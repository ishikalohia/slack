import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';

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
        </Switch>
      </div>
    );
  }
}

export default App;
