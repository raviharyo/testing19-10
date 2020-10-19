import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../pages/splashscreen'
import Home from '../pages/home_page'
import Browser from '../pages/browser_page'

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Browser" component={Browser} />
        </Stack.Navigator>
    )
}