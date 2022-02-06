import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import getPopularRepos, { PopularRepo } from './services/github/getPopularRepos';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {

  const [repos, setRepos] = React.useState<PopularRepo[]>([])

  React.useEffect(() => {
    getPopularRepos()
      .then((popularRepos: PopularRepo[]) => {
        setRepos(popularRepos)
      })
  }, [])

  return (
    <div className="ag-theme-alpine" style={{height: '100vh', width: '100vw'}}>
          <AgGridReact
              rowData={repos}>
              <AgGridColumn field="name"></AgGridColumn>
              <AgGridColumn field="description"></AgGridColumn>
              <AgGridColumn field="stars"></AgGridColumn>
          </AgGridReact>
      </div>
  );
}

export default App;
