import React,{useState} from 'react';
import FontStyles from '../../styles/fonts';
import {SafeAreaView,View,Image,Text,Pressable} from 'react-native';
import GestureRecognizer,{swipeDirections} from 'react-native-swipe-gestures';
import {OnboardingStyle} from '../../styles/stylesheet';
import Ripple from 'react-native-material-ripple';
import Swiper from 'react-native-swiper';
const OnboardingScreen = ({navigation}) => {
    const [swipecount, SetSwipeCount] = useState(0);
    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        if(gestureName == 'SWIPE_LEFT' && swipecount == 2){
            navigation.navigate('OnboardingTwo');
        }
    };
    const SwipeEnd = (res) => {
        SetSwipeCount(res);
    };
    const SwipeEnds = () => {
        console.log('red');
        if(swipecount == 2){
            navigation.navigate('Login');
        }
    };
    if(FontStyles())
    return(
        <SafeAreaView style={OnboardingStyle.OnBoardSafeArea}>
            <View style={OnboardingStyle.OnBoardImgView}>
                <Image source={require('../../temps/nspire-logo.png')} style={OnboardingStyle.OnBoardImg}/>
            </View> 
            <Swiper 
                horizontal={true} 
                index={0} 
                loop={false} 
                scrollEnabled={true} 
                showsButtons={false} 
                showsPagination={true} 
                autoplay={false} 
                dot={<Pressable style={OnboardingStyle.OnBoardViewColBtnsView}></Pressable>} 
                activeDot={<Pressable style={OnboardingStyle.OnBoardViewColBtnsView}><Pressable style={OnboardingStyle.OnBoardViewColBtnsViewChild}></Pressable></Pressable>}
            >
                <View style={OnboardingStyle.OnBoardViewCol}>
                    <Image source={require('../../temps/onboarding-one.png')} style={OnboardingStyle.OnBoardViewColImg}/>
                    <Text style={OnboardingStyle.OnBoardViewColBigText}>Enjoy the Journey</Text>
                    <Text style={OnboardingStyle.OnBoardViewColSmallText}>It’s not about the destination</Text>
                </View>
                <View style={OnboardingStyle.OnBoardViewCol}>
                    <Image source={require('../../temps/onboarding-two.png')} style={OnboardingStyle.OnBoardViewColImg}/>
                    <Text style={OnboardingStyle.OnBoardViewColBigText}>Guided Motivation</Text>
                    <Text style={OnboardingStyle.OnBoardViewColSmallText}>Inspire progress and excitement</Text>
                </View>
                <View style={OnboardingStyle.OnBoardViewCol}>
                    <Image source={require('../../temps/onboarding-three.png')} style={OnboardingStyle.OnBoardViewColImg}/>
                    <Text style={OnboardingStyle.OnBoardViewColBigText}>Compound your efforts</Text>
                    <Text style={OnboardingStyle.OnBoardViewColSmallText}>Build yourself up 1% better every day</Text>
                </View>
            </Swiper>
            <View style={OnboardingStyle.OnBoardViewBase}>
                <Ripple style={OnboardingStyle.OnBoardViewBasePress} rippleColor='#fff' rippleOverflow={true} rippleSize={350} rippleOpacity={0.9} rippleDuration={500} onPress={()=>navigation.navigate('OnboardingTwo')}>
                    <Text style={OnboardingStyle.OnBoardViewBasePressText}>Let's Get Started</Text>
                </Ripple>
            </View>
        </SafeAreaView>
    );
};
export default React.memo(OnboardingScreen); 