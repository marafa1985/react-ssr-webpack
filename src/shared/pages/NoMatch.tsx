import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to='/' title="Job List">&larr; Back to Home page</Link>
    </div>
  )
}