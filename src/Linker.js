import React from 'react'
import { Link } from 'react-router-dom'

export default function Linker() {
  return (
    <div>
      <Link to="/comp/1">
        Link1
      </Link>
      <br/>
      <Link to="/comp/2">
        Link2
      </Link>
      <br/>
      <Link to="/comp/3">
        Link3
      </Link>
    </div>
  )
}