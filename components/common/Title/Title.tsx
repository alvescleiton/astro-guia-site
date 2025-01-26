import React from 'react'

interface TitleProps {
  children: React.ReactNode
  heading?: React.ElementType
}

const Title = ({ children, heading = 'h1' }: TitleProps) => {
  const Component = heading

  return <Component className="text-xl font-semibold text-primary">{children}</Component>
}

export default Title
