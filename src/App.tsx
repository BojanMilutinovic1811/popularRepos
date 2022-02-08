import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { State } from './store'
import getPopularRepos, { PopularRepo } from './services/github/getPopularRepos'
import Header from './components/Header/Header'
import ReposGrid from './components/ReposGrid/ReposGrid'
import FavoriteReposGrid from './components/FavoriteReposGrid/FavoriteReposGrid'


const App = () => {

    const dispatch = useDispatch()
    const state = useSelector((state: State) => state)
    const { numOfRepos, repos, displayFavorite } = state

    React.useEffect(() => {
      getPopularRepos(7, numOfRepos)
        .then((popularRepos: PopularRepo[]) => {
          dispatch({
            type: "SET_INITIAL",
            payload: popularRepos
          })
        })
    }, [numOfRepos])

    React.useEffect(() => {
      dispatch({
        type: "SET_FILTERED",
        payload: repos
      })
    }, [repos])

  return (
    <div className='container'>
      <Header />
      {displayFavorite ? <FavoriteReposGrid /> : <ReposGrid />}
    </div>
  );
}

export default App;
