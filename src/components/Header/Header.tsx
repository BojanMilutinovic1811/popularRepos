import React from 'react'
import { PopularRepo } from '../../services/github/getPopularRepos';
import Props from './Types'

const Header = ({repos, setFilteredRepos, displayFavorite, setDisplayFavorite, setNumOfRepos}: Props): React.ReactElement => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const filtered: PopularRepo[] = repos.filter((repo: PopularRepo) => repo.name.toLowerCase().includes(e.target.value))
        setFilteredRepos(filtered)
      }

    const handleNumOfRepos = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNumOfRepos(Number(e.target.value))
    }

    return (
        <React.Fragment>
            <h1>Popular GitHub Repositories</h1>
            <p className='lead'>Take a look at the most popular repositories in last 7 days.</p>
            {!displayFavorite && 
                <div className='col-md-3 mb-1'>
                    <input className="form-control mb-2" 
                        onChange={handleSearch}
                        placeholder="Search"
                        type="search"/>
                </div>}
            {!displayFavorite &&
                <div className='col-md-3 mb-2 d-flex align-items-center justify-content-between'>
                    <span>Number of Repositories:</span>
                    <div className='col-md-3 ml-1'>
                        <select className="form-select" onChange={handleNumOfRepos}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">50</option>
                            <option value="40">100</option>
                        </select>
                    </div>
                </div> } 
            <div className='col-md-3 mb-2'>
                <button type='button' className='btn btn-primary w-100' onClick={() => setDisplayFavorite(!displayFavorite)}>
                    {displayFavorite ? 'Display all' : 'Display favorite'}
                </button>
            </div>
            
        </React.Fragment>
    )
}

export default Header