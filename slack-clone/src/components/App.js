import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import { Slack } from './';

function Home() {
  return <div>home</div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/slack" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
