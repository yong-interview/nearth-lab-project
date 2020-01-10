import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ListPage,
  DetailPage,
} from '../pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ListPage} />
      <Route path="/page/:page" component={ListPage}/>
      <Route path="/labelTypeIds/:labelTypeIds" component={ListPage}/>
      <Route path="/photo/:id" component={DetailPage}/>
    </Switch>
  );
}

export default App;
