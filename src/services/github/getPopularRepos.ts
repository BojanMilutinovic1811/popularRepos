
import { token } from '../../config/githubToken'
import formatDate from '../../utilities/formatDate'

export interface PopularRepo {
    id: number,
    name: string,
    stars: number,
    link: string,
    description?: string | null,
    isFavorite?: boolean
    date?: string,
}

const getPopularRepos  = async (inLastDays = 7, numOfRepos = 30): Promise<PopularRepo[]> => {
    const url = `https://api.github.com/search/repositories?q=created:>${formatDate(inLastDays)}&sort=stars&order=desc&per_page=${numOfRepos}`
    const config = token ? {
        'method': 'GET',
        'headers': {
        'Authorization': `Token ${token}`
        } 
    }: {}
    const response = await fetch(url, config)
    const data = await response.json()
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const popularRepos = data.items.map((repo: any): PopularRepo => {
        const {id, name, description, stargazers_count, url} = repo
        const isFavorite = () => {
            return favorites.some((favorite: any) => favorite.id === id)
        }
        return {
            id,
            name,
            description,
            link: url,
            stars: stargazers_count,
            isFavorite: isFavorite()
        }
    })
    return popularRepos
}

export default getPopularRepos