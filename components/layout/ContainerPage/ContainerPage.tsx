import React from 'react'

interface ContainerPageProps {
  children: React.ReactNode
}

const ContainerPage = ({ children }: ContainerPageProps) => {
  return <div className="container mx-auto pb-28 pt-14">{children}</div>
}

export default ContainerPage
