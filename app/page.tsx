import React from 'react'

import ContainerPage from '@/components/layout/ContainerPage'

const Home = () => {
  return (
    <ContainerPage>
      <div className="flex h-36 w-full items-center justify-center bg-slate-800">Banner</div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="min-h-16 rounded-lg bg-red-300"></div>
        <div className="min-h-16 rounded-lg bg-blue-300"></div>
        <div className="min-h-16 rounded-lg bg-green-300"></div>
        <div className="min-h-16 rounded-lg bg-purple-300"></div>
      </div>
    </ContainerPage>
  )
}

export default Home
