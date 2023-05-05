import Link from 'next/link'


async function getRepContents(name){
   await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`https://api.github.com/repos/jelsonjay/${name}/contents`)

  const contents = await res.json()
  return contents

}

  const RepoDir =  async ({name}) => {
  const contents = await getRepContents(name)
  const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <div>
    <h2>Directories</h2>
    <ul>
      {dirs.map((item) => (
      <li key={item.path}>
      <Link href={`/code/repo/${name}/${item.path}`}>
      {item.path}
      </Link>
      </li>
      ))}
    </ul>
    </div>
  )
}

export default RepoDir
