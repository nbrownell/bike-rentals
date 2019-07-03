import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import {observer} from 'mobx-react';

@observer
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
