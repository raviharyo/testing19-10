import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './src/navigations/MainNavigation'

class App extends React.Component {
  state = {}
  render() {
    return (
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    );
  }
}

export default App;