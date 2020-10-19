import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'

function Loading() {
    return (
        <View>
            <ActivityIndicator  color='#009b88' size='large' />
            <Text style={{textAlign:'center',marginBottom:'100%'}}>Connecting..</Text>
        </View>
    )
}

export default (props) => {
    const { params } = props.route
    console.log('Cek', props)
    return (
        <View style={{ flex: 1 }}>
            <WebView source={{ uri: params.btLink }}
                renderLoading={Loading}
                startInLoadingState={true} />
        </View>
    );
}
