import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import getPopularRepos, { PopularRepo } from './services/github/getPopularRepos';
import Header from './components/Header/Header'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {

  const [repos, setRepos] = React.useState<PopularRepo[]>([])
  const [filteredRepos, setFilteredRepos] = React.useState<PopularRepo[]>([])

  React.useEffect(() => {
    getPopularRepos()
      .then((popularRepos: PopularRepo[]) => {
        setRepos(popularRepos)
        setFilteredRepos(popularRepos)
      })
  }, [])

  return (
    <div className='container'>
      <Header repos={repos} setFilteredRepos={setFilteredRepos}/>
        <div className="ag-theme-alpine" style={{height: '100vh', width: '100%'}}>
            <AgGridReact
                rowData={filteredRepos}>
                <AgGridColumn field="name" flex={1}></AgGridColumn>
                <AgGridColumn field="description" flex={2}></AgGridColumn>
                <AgGridColumn field="link" flex={2}></AgGridColumn>
                <AgGridColumn field="stars" width={100}></AgGridColumn>
            </AgGridReact>
        </div>
    </div>
  );
}

export default App;
