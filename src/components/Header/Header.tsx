import React from 'react'
import { PopularRepo } from '../../services/github/getPopularRepos';
import Props from './Types'

const Header = ({repos, setFilteredRepos, displayFavorite, setDisplayFavorite}: Props): React.ReactElement => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const filtered: PopularRepo[] = repos.filter((repo: PopularRepo) => repo.name.toLowerCase().includes(e.target.value))
        setFilteredRepos(filtered)
      }

    return (
        <React.Fragment>
            <h1>Popular GitHub Repositories</h1>
            <p className='lead'>Take a look at the most popular repositories in last 7 days.</p>
            <div className='col-md-3 mb-2'>
                <button type='button' className='btn btn-primary w-100' onClick={() => setDisplayFavorite(!displayFavorite)}>
                    {displayFavorite ? 'Display all' : 'Display favorite'}
                </button>
            </div>
            {!displayFavorite && 
                <div className='col-md-3 mb-1'>
                    <input className="form-control mb-2" 
                        onChange={handleSearch}
                        placeholder="Search"
                        type="search"/>
                </div>}
        </React.Fragment>
    )
}

export default Header