import {Route,Switch,BrowserRouter} from 'react-router-dom'

import Paginationapi from './component/Paginationapi'
import Dynamicform from './component/Dynamicform'
import Createcategory from './component/category/Createcategory'
import Subcategory from './component/Subcategory'

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Paginationapi}/>
            <Route exact path="/dynamicform" component={Dynamicform} />
            <Route exact path="/createcategory" component={Createcategory} />
            <Route exact path="/subcategory" component={Subcategory} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
