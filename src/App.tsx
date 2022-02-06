import React from 'react'
import getPopularRepos, { PopularRepo } from './services/github/getPopularRepos'
import Header from './components/Header/Header'
import ReposGrid from './components/ReposGrid/ReposGrid'


const App = () => {

  const [repos, setRepos] = React.useState<PopularRepo[]>([])
  const [filteredRepos, setFilteredRepos] = React.useState<PopularRepo[]>([])

  React.useEffect(() => {
    getPopularRepos()
      .then((popularRepos: PopularRepo[]) => {
        setRepos(popularRepos)
        setFilteredRepos(popularRepos)
      })
  }, [])

  return (
    <div className='container'>
      <Header repos={repos} setFilteredRepos={setFilteredRepos}/>
      <ReposGrid filteredRepos={filteredRepos} />
    </div>
  );
}

export default App;
