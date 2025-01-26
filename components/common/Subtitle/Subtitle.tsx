import React from 'react'

interface SubtitleProps {
  children: React.ReactNode
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <div className="text-sm text-foreground">{children}</div>
}

export default Subtitle
