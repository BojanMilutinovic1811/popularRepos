import React from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import Props from './Types'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const ReposGrid = ({filteredRepos}: Props): React.ReactElement => {

    const makeLink = (params: any): string => {
        const link = params.value.replace('https://api.github.com/repos/', 'https://github.com/')
       return `<a href="${link}" target="_blank">${link}</a>`
    }

    return(
        <div className="ag-theme-alpine" style={{height: '100vh', width: '100%'}}>
            <AgGridReact
                rowData={filteredRepos}>
                <AgGridColumn field="name" flex={1}></AgGridColumn>
                <AgGridColumn field="description" flex={2}></AgGridColumn>
                <AgGridColumn field="link" flex={2} cellRenderer={(params) => makeLink(params)}></AgGridColumn>
                <AgGridColumn field="stars" width={100}></AgGridColumn>
            </AgGridReact>
        </div>
    )
}

export default ReposGrid