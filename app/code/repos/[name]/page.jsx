import {Suspense} from 'react'
import Repo from '@/app/components/Repo'
import RepoDir from '@/app/components/RepoDir'
import Link from 'next/link'

const RepositoryPage = ({params: {name}}) => {
  return (
    <div className='params'>
      <h1>Details Page</h1>
      <Link href='/code/repos' className='link'>Back to repositories</Link>
      <Suspense fallback={<div>Loading repo...</div>}>
      <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
      <RepoDir name={name} />
      </Suspense>

    </div>
  )
}

export default RepositoryPage
