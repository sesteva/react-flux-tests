import React from 'react/addons';
import HomePage from 'pages/Home';
let ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('styles/main.css');

class HealthApp extends React.Component {

  render() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <HomePage />
        </ReactTransitionGroup>
      </div>
    );
  }
}

export default HealthApp;
