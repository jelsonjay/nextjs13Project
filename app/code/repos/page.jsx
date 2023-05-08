import Link from "next/link"
import {FaStar, FaEye, FaCodeBranch} from 'react-icons/fa'
import './repo.scss'
async function getRepos(){
  const res = await fetch("https://api.github.com/users/jelsonjay/repos", {next:{revalidate:60}})

  await new Promise((resolve) => setTimeout(resolve, 1000))
  const repos = await res.json()
  return repos
}

const Repopage = async () => {

  const repos = await getRepos()
  //console.log(repos)
  return (
    <div className="repo">
      <h1>Repositories</h1>
      <div className="card">
      {repos.map((repo) =>(
      <Link key={repo.id} href={`/code/repos/${repo.name}`}>
      <div  className="box">
      <h2>{repo.name}</h2>
      <div className="details">
      <span>
         <FaEye />{repo.watchers_count}
      </span>
            <span>
         <FaCodeBranch />{repo.forks_count}
      </span>
            <span>
         <FaStar />{repo.stargazers_count}
      </span>
      </div>
      </div>
       </Link>
      ))}
      </div>
    </div>
  )
}

export default Repopage
