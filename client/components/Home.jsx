import React from 'react'
import Handling from './Handling'

function Home() {
  const current = new Date()
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`

  return (
    <>
      <div>
        <div className="text-2xl font-bold mb-4">
          <h1>TODAY : {date}</h1>
        </div>
        <div className="mb-2">
          <p>Tick off at least one task from each category</p>
        </div>
      </div>
      <div>
        <Handling />
      </div>
    </>
  )
}

export default Home
