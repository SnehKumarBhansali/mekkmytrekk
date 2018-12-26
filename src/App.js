import React, { Component } from 'react';
import NavigationMenuPage from './components/NavigationMenuPage'
import FooterPage from './components/FooterPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationMenuPage />
        <FooterPage />
      </div>
    );
  }
}

export default App;