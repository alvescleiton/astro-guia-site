import React from 'react'

interface ContainerPageProps {
  children: React.ReactNode
}

const ContainerPage = ({ children }: ContainerPageProps) => {
  return <div className="container mx-auto py-4 pb-10">{children}</div>
}

export default ContainerPage
