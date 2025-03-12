import React from 'react'

interface ContainerPageProps {
  children: React.ReactNode
}

const ContainerPage: React.FC<ContainerPageProps> = ({ children }) => {
  return <div className="container mx-auto pb-28 pt-14">{children}</div>
}

export default ContainerPage
