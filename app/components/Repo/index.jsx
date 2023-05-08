import Link from "next/link"
import {FaStar, FaEye, FaCodeBranch} from 'react-icons/fa'

async function getRepo(name){

  const res = await fetch(`https://api.github.com/repos/jelsonjay/${name}`,  {next:{revalidate:60}})

  //  await new Promise((resolve) => setTimeout(resolve, 1000))
  const repos = await res.json()
  return repos

}


const Repo = async ({name}) => {

  const repo = await getRepo(name)

  //console.log(repo)
  return (
    <div className="repo-content">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>

      <div className="repo-item">
      <FaEye />
      <span>{repo.watcher_count}</span>
      </div>

      <div className="repo-item">
      <FaStar />
      <span>{repo.stargazes_count}</span>
      </div>

            <div className="repo-item">
      <FaCodeBranch />
      <span>{repo.forks_count}</span>
      </div>
      
    </div>
  )
}

export default Repo
