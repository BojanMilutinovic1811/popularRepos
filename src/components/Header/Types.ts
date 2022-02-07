import React from "react";
import { PopularRepo } from '../../services/github/getPopularRepos';

export default interface Props {
    repos: PopularRepo[],
    setFilteredRepos: React.Dispatch<React.SetStateAction<PopularRepo[]>>,
    displayFavorite: boolean,
    setDisplayFavorite: React.Dispatch<React.SetStateAction<boolean>>
}