import React from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { useSelector } from "react-redux";
import { State } from '../../store'
import makeLink from '../../utilities/makeLinkColumn';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const ReposGrid = (): React.ReactElement => {

    const state = useSelector((state: State) => state)
    const { favoriteRepos } = state

    return(
        <div className="ag-theme-alpine customGrid">
            <AgGridReact
                rowData={favoriteRepos}>
                <AgGridColumn field="name" flex={1}></AgGridColumn>
                <AgGridColumn field="description" flex={2}></AgGridColumn>
                <AgGridColumn field="link" flex={2} cellRenderer={(params) => makeLink(params)}></AgGridColumn>
                <AgGridColumn field="stars" width={100}></AgGridColumn>
                <AgGridColumn field="date" headerName="Date Added" width={200}></AgGridColumn>
            </AgGridReact>
        </div>
    )
}

export default ReposGrid