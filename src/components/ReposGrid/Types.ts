import React from "react";
import { PopularRepo } from "../../services/github/getPopularRepos";

export default interface Props {
    filteredRepos: PopularRepo[],
    setFilteredRepos: React.Dispatch<React.SetStateAction<PopularRepo[]>>,
    setFavoriteRepos: React.Dispatch<React.SetStateAction<PopularRepo[]>>,
}