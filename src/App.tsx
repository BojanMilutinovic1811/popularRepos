import React from 'react'
import getPopularRepos, { PopularRepo } from './services/github/getPopularRepos'
import Header from './components/Header/Header'
import ReposGrid from './components/ReposGrid/ReposGrid'
import FavoriteReposGrid from './components/FavoriteReposGrid/FavoriteReposGrid'


const App = () => {

    const [numOfRepos, setNumOfRepos] = React.useState(10)
    const [repos, setRepos] = React.useState<PopularRepo[]>([])
    const [filteredRepos, setFilteredRepos] = React.useState<PopularRepo[]>([])
    const [favoriteRepos, setFavoriteRepos] = React.useState<PopularRepo[]>(JSON.parse(localStorage.getItem('favorites') || '[]'))
    const [displayFavorite, setDisplayFavorite] = React.useState(false)

    React.useEffect(() => {
      getPopularRepos(7, numOfRepos)
        .then((popularRepos: PopularRepo[]) => {
          setRepos(popularRepos)
          setFilteredRepos(popularRepos)
        })
    }, [numOfRepos])

    React.useEffect(() => {
      setFilteredRepos(repos)
    }, [repos])

  return (
    <div className='container'>
      <Header repos={repos} 
              setFilteredRepos={setFilteredRepos} 
              displayFavorite={displayFavorite}
              setDisplayFavorite={setDisplayFavorite}
              setNumOfRepos={setNumOfRepos}
      />
      {displayFavorite ? <FavoriteReposGrid  favoriteRepos={favoriteRepos}/>
                       : <ReposGrid filteredRepos={filteredRepos} 
                                    setFilteredRepos={setFilteredRepos} 
                                    setFavoriteRepos={setFavoriteRepos}/>}
    </div>
  );
}

export default App;
