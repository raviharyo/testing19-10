import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, FlatList, Animated, ImageBackground} from 'react-native'
import { Image, Button, Overlay } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
// import * as Animatable from 'react-native-animatable';
import TextTicker from 'react-native-text-ticker'
import Axios from 'axios'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Home extends React.Component {
    state = {
        dataLink: [],
        error: null,
        errorMessage: null,
        loading: false,
        visible: false,
        message: "",
        x: new Animated.Value(0)
    }

    componentDidMount() {
        this.getData()
        this.runText()
    }

    runText = () => {
        Animated.loop(
            Animated.sequence([
                Animated.delay(1000),
                Animated.timing(this.state.x, {
                    toValue: -600,
                    duration: 10000,
                    // useNativeDriver: true
                })
            ]),
            {
                // iterations: 10 // Number of repetitions
            }
        ).start()
    }

    getData = () => {
        Axios.get('http://93.188.163.58:6060/link/getLinkTs')
            .then((res) => {
                console.log('test')
                this.setState({ dataLink: res.data, loading: !this.state.loading })
            })
            .catch((err) => {
                console.log('Error : ', err.message)
                // this.setState({ errorMessage: err})
            })
    }

    onRef = () => {
        this.getData()
        this.setState({ loading: !this.state.loading, visible: !this.state.visible, message: this.state.dataLink.length > 0 ? "Connected to server ✅" : "Error connecting to server ⛔" })
    }

    onBtBrowser = (index) => {
        if (this.state.dataLink.length > 0) {
            let data = this.state.dataLink
            this.props.navigation.navigate('Browser', { btLink: data[index].link })
        }
    }
    render() {
        if (this.state.dataLink.length == 0) {
            this.getData()
        }
        console.disableYellowBox = true;
        // setInterval(this.runText,2000)
        return (
            <ImageBackground source={require('../image/bg.png')} style={{ width: '100%', height: '105%', justifyContent: 'center' }}>
            <View style={{ height: '100%', width: '100%' }}>
                <FlatList
                    style={{ width: wp('100%'), height: hp('4%'), zIndex: 10, position: 'absolute' }}
                    showsVerticalScrollIndicator={false}
                    onRefresh={() => this.onRef()}
                    refreshing={this.state.loading}
                />
                <Overlay isVisible={this.state.visible} onBackdropPress={() => this.setState({ visible: !this.state.visible })}>
                    <Text>{this.state.message}</Text>
                </Overlay>
                <View style={{ width: wp('100%'), height: hp('10%'), justifyContent: 'space-between', display: 'flex', flexDirection: 'row', margin: wp('1%') }}>
                    <Image source={require('../image/logo.png')} containerStyle={{ width: '30%', height: '40%', marginVertical: '7%' }} />
                    <View style={{ marginVertical: '7%' }}>
                        <TouchableWithoutFeedback onPress={() => this.onBtBrowser(0)}>
                            <Image source={require('../image/button_chat.png')} containerStyle={{ width: wp('20.3%'), height: hp('3.4%'), marginHorizontal: wp('4%') }} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <View style={{ width: wp('100%'), backgroundColor: 'white', height: hp('3%'), alignItems: 'center', flexDirection: 'row' }} >
                    <Button
                        icon={
                            <Icon
                                name="volume-up"
                                size={hp('1.5%')}
                                color="black"
                                style={{ marginVertical: hp('-0.2%') }}
                            />
                        }
                        buttonStyle={{ backgroundColor: 'white'}}
                        containerStyle={{ width: wp('7%'), height: hp('3%'),zIndex:100 }} titleStyle={{ fontSize: hp('0.3%') }} />
                    <Animated.Text style={{ transform: [{ translateX: this.state.x }], fontSize: hp('1.2%'),marginLeft:'1%', textAlign: 'right', width: wp("125%") }}>SELAMAT DATANG DI APLIKASI TSTOTO. SELAMAT BERMAIN BERSAMA KAMI..</Animated.Text>
                </View>
                <View style={{ display: 'flex', height: hp('25%'), flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: wp('4%'), marginVertical: hp('2%') }}>
                    <TouchableWithoutFeedback onPress={() => this.onBtBrowser(1)}>
                        <Image source={require('../image/button_server1.png')} containerStyle={styles.serverBtStyle} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.onBtBrowser(2)}>
                        <Image source={require('../image/button_server2.png')} containerStyle={styles.serverBtStyle} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.onBtBrowser(3)}>
                        <Image source={require('../image/button_server3.png')} containerStyle={styles.serverBtStyle} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.onBtBrowser(4)}>
                        <Image source={require('../image/button_server4.png')} containerStyle={styles.serverBtStyle} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ alignItems: 'center', width: wp('100%'), height: hp('36%') }}>
                    <TouchableWithoutFeedback onPress={() => this.onBtBrowser(5)}>
                        <Image source={require('../image/button_1.png')} containerStyle={{ width: wp('90%'), height: hp('7%'), marginTop: hp('1%') }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.onBtBrowser(6)}>
                        <Image source={require('../image/button_2.png')} containerStyle={{ width: wp('90%'), height: hp('7%'), marginTop: hp('1%') }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.onBtBrowser(7)}>
                        <Image source={require('../image/button_3.png')} containerStyle={{ width: wp('90%'), height: hp('7%'), marginTop: hp('1%') }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.onBtBrowser(8)}>
                        <Image source={require('../image/button_4.png')} containerStyle={{ width: wp('90%'), height: hp('7%'), marginTop: hp('1%') }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ width: wp('100%'), height: hp('15.5%'), flexDirection: 'row', position: 'relative' }}>
                    <Image source={require('../image/fotter_1.png')} containerStyle={{ marginVertical: hp('5%'), marginLeft: wp('5%'), width: wp('25%') }} />
                    <View style={{ marginTop: hp('5%'), marginLeft: wp('1%') }}>
                        <Text style={{ fontSize: hp('1.2%'), fontWeight: '200', color: 'white' }}>Pusat pelaporan dan beri penilaian LOTTO21GROUP team.</Text>
                        <TouchableWithoutFeedback onPress={() => this.onBtBrowser(9)}>
                            <Image source={require('../image/button_ftr1.png')} containerStyle={{ width: wp('20%'), height: hp('3%') }} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={{ alignItems: 'center', width: wp('100%'), height: hp('5%'), backgroundColor: 'black' }}>
                    <Text style={{ color: 'white', fontSize: hp('1.4%') }}>2014 - 2020 All Rights Reserved | 18+</Text>
                </View>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    serverBtStyle: {
        width: wp('45%'),
        height: hp('10%'),
        marginTop: hp('2%')
    },
    serverBtTitle: {
        fontSize: hp('2%'), paddingTop: hp('2%'), paddingBottom: hp('2%')
    },
    menuBtTitle: {
        textAlign: 'center', width: wp('91%'), fontSize: hp('2.5%'), marginVertical: hp('2%'), color: 'white', fontWeight: 'bold'
    }
})

export default Home;