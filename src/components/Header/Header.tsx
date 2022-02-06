import React from 'react'
import { PopularRepo } from '../../services/github/getPopularRepos';
import Props from './Types'

const Header = ({repos, setFilteredRepos}: Props): React.ReactElement => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filtered: PopularRepo[] = repos.filter((repo: PopularRepo) => repo.name.toLowerCase().includes(e.target.value))
        setFilteredRepos(filtered)
      }

    return (
        <React.Fragment>
            <h1>Popular GitHub Repositories</h1>
            <p className='lead'>Take a look at the most popular repositories in last 7 days.</p>
            <input className="col-md-3 form-control  mb-4" 
                onChange={handleSearch} 
                placeholder="Search" 
                type="search"/>
        </React.Fragment>
    )
}

export default Header