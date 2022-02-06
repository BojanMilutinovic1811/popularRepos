import React from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import Props from './Types'
import './styles.css'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { CellClickedEvent } from 'ag-grid-community/dist/lib/events';

const ReposGrid = ({filteredRepos, setFilteredRepos}: Props): React.ReactElement => {

    const makeLink = (params: any): string => {
        const link = params.value.replace('https://api.github.com/repos/', 'https://github.com/')
       return `<a href="${link}" target="_blank">${link}</a>`
    }

    const makeFavorite = (params: any): string => {
        return params.data.isFavorite ? 'remove' : 'add'
    }

    const onCellClicked = (params: CellClickedEvent) => {
        if (params.column.getColId() === 'favorite') {
            const {isFavorite, id} = params.data
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            if (isFavorite) {
                favorites = favorites.filter((repo: any) => repo.id !== id)
            } else {
                favorites.push(params.data)    
            }
            let repos = [...filteredRepos]
            let clickedRepo = repos.find((repo) => repo.id === id)
            //@ts-ignore
            clickedRepo.isFavorite = !isFavorite
            setFilteredRepos(repos)
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }
    } 
    return(
        <div className="ag-theme-alpine customGrid">
            <AgGridReact
                onCellClicked={onCellClicked}
                rowData={filteredRepos}>
                <AgGridColumn field="name" flex={1}></AgGridColumn>
                <AgGridColumn field="description" flex={2}></AgGridColumn>
                <AgGridColumn field="link" flex={2} cellRenderer={(params) => makeLink(params)}></AgGridColumn>
                <AgGridColumn field="stars" width={100}></AgGridColumn>
                <AgGridColumn field="favorite" width={100} cellRenderer={(params) => makeFavorite(params)}></AgGridColumn>

            </AgGridReact>
        </div>
    )
}

export default ReposGrid