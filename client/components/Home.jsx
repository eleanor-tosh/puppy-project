import React from 'react'
import HandlingDropdown from './HandlingDropdown'

function Home() {
  const current = new Date()
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`

  return (
    <>
      <div>
        <h1>TODAY : {date}</h1>
        <p>Tick off at least one task from each category</p>
      </div>
      <div>
        <HandlingDropdown />
      </div>
    </>
  )
}

export default Home
