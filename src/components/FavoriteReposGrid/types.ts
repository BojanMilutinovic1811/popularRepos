import { PopularRepo } from "../../services/github/getPopularRepos";

export default interface Props {
    favoriteRepos: PopularRepo[],
}