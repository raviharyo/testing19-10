import React from 'react';
import { StackActions } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { Image } from 'react-native-elements'

class Splash extends React.Component {
    state = {}
    render() {
        setTimeout(() => this.props.navigation.dispatch(StackActions.replace('Home')), 1900)
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#28272D' }}>
                {/* <Text style={{color:'white', fontSize:30}}>Welcome</Text> */}
                <Image source={require('../image/loading-ts.gif')} containerStyle={{ marginVertical: '5%', padding: 2, alignSelf: 'center',height:'100%',width:'100%' }} />
            </View>
        );
    }
}

export default Splash;