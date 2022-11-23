import React from 'react'

function Header() {
  const current = new Date()
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`

  return (
    <div>
      <h1>Social Puppy</h1>
      <h2>Menu</h2>
    </div>
  )
}

export default Header
