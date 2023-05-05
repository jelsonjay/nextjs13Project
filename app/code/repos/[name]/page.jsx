import React from 'react'

const RepositoryPage = ({params}) => {
  return (
    <div className='params'>
      <h1>Details Page</h1>
    <h1>{params.name}</h1>

    </div>
  )
}

export default RepositoryPage
