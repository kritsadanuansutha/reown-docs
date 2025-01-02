import React from 'react'
import SmallContainer from './SmallContainer'
import LargeContainer from './LargeContainer'
import CenteredContainer from './CenteredContainer'
import SupportContainer from './SupportContainer'

const Wrapper = ({ items, type, fit = true, ...props }) => {
  return (
    <div
      {...props}
      className="home__wrapper"
      style={{
        paddingTop: !fit ? '1rem' : 'inherit',
        ...props.style,
      }}
    >
      {type === 'small' &&
        items.map((item, index) => (
          <SmallContainer
            key={index}
            href={item.href}
            type={item.type}
            name={item.name}
            icon={item.icon}
            isWhite={item.isWhite || false}
          />
        ))}

      {type === 'large' &&
        items.map((item, index) => (
          <LargeContainer
            key={index}
            href={item.href}
            type={item.type}
            name={item.name}
            icon={item.icon}
            fit={fit}
            isWhite={item.isWhite || false}
            description={item.description}
          />
        ))}

      {type === 'centered' &&
        items.map((item, index) => (
          <CenteredContainer
            key={index}
            href={item.href}
            name={item.name}
            icon={item.icon}
            description={item.description}
          />
        ))}

      {type === 'support' &&
        items.map((item, index) => (
          <SupportContainer
            key={index}
            href={item.href}
            name={item.name}
            icon={item.icon}
            description={item.description}
          />
        ))}
    </div>
  )
}

export default Wrapper
