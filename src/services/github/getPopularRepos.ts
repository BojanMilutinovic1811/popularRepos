
import { token } from '../../config/githubToken'
import formatDate from '../../utilities/formatDate'

export interface PopularRepo {
    id: number,
    name: string,
    stars: number,
    description?: string | null,
    isFavorite?: boolean
}

const getPopularRepos  = async (inLastDays = 7, numOfRepos = 30): Promise<PopularRepo[]> => {
    const url = `https://api.github.com/search/repositories?q=created:>${formatDate(inLastDays)}&sort=stars&order=desc`
    const config = token ? {
        'method': 'GET',
        'headers': {
        'Authorization': `Token ${token}`
        } 
    }: {}
    const response = await fetch(url, config)
    const data = await response.json()
    const popularRepos = data.items.map((repo: any): PopularRepo => {
        const {id, name, description, stargazers_count} = repo
        return {
            id,
            name,
            description,
            stars: stargazers_count,
        }
    })
    return popularRepos
}

export default getPopularRepos