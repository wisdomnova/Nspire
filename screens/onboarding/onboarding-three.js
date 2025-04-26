import React from 'react';
import FontStyles from '../../styles/fonts';
import {SafeAreaView,View,Image,Text,Pressable} from 'react-native';
import GestureRecognizer,{swipeDirections} from 'react-native-swipe-gestures';
import {OnboardingStyle} from '../../styles/stylesheet';
import Ripple from 'react-native-material-ripple';
const OnboardingScreenThree = ({navigation}) => {
    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        if(gestureName == 'SWIPE_LEFT'){
            navigation.navigate('Register');
        }else if(gestureName == 'SWIPE_RIGHT'){
            navigation.goBack();
        }
    };
    if(FontStyles())
    return(
        <GestureRecognizer onSwipe={onSwipe}>
            <SafeAreaView style={OnboardingStyle.OnBoardSafeArea}>
                <View style={OnboardingStyle.OnBoardImgView}>
                    <Image source={require('../../temps/nspire-logo.png')} style={OnboardingStyle.OnBoardImg}/>
                </View>
                <View style={OnboardingStyle.OnBoardViewCol}>
                    <Image source={require('../../temps/onboarding-three.png')} style={OnboardingStyle.OnBoardViewColImg}/>
                    <Text style={OnboardingStyle.OnBoardViewColBigText}>Compound your efforts</Text>
                    <Text style={OnboardingStyle.OnBoardViewColSmallText}>Build yourself up 1% better every day</Text>
                    <View style={OnboardingStyle.OnBoardViewColBtns}>
                        <Pressable style={OnboardingStyle.OnBoardViewColBtnsView}></Pressable>
                        <Pressable style={OnboardingStyle.OnBoardViewColBtnsView}></Pressable>
                        <Pressable style={OnboardingStyle.OnBoardViewColBtnsView}>
                            <Pressable style={OnboardingStyle.OnBoardViewColBtnsViewChild}></Pressable>
                        </Pressable>
                    </View>
                </View>
                <View style={OnboardingStyle.OnBoardViewBase}>
                    <Ripple style={OnboardingStyle.OnBoardViewBasePress} rippleColor='#fff' rippleOverflow={true} rippleSize={350} rippleOpacity={0.9} rippleDuration={500} onPress={()=>navigation.navigate('Register')}>
                        <Text style={OnboardingStyle.OnBoardViewBasePressText}>Let's Get Started</Text>
                    </Ripple>
                </View>
            </SafeAreaView>
        </GestureRecognizer>
    );
};
export default React.memo(OnboardingScreenThree);