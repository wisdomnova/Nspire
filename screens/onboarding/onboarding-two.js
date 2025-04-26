import React from 'react';
import FontStyles from '../../styles/fonts';
import {SafeAreaView,View,Image,Text,Pressable} from 'react-native';
import {OnboardingStyle} from '../../styles/stylesheet';
import Ripple from 'react-native-material-ripple';
const OnboardingScreenTwo = ({navigation}) => {
    if(FontStyles())
    return(
        <SafeAreaView style={OnboardingStyle.OnBoardSafeArea}>
            <View style={OnboardingStyle.OnBoardImgView}>
                <Image source={require('../../temps/nspire-logo.png')} style={OnboardingStyle.OnBoardImg}/>
            </View>
            <View style={OnboardingStyle.OnBoardViewCols}>
                <Image source={require('../../temps/onboarding-four.png')} style={OnboardingStyle.OnBoardViewColImg}/>
                <Text style={OnboardingStyle.OnBoardViewColBigText}>Let’s get started</Text>
                <Text style={OnboardingStyle.OnBoardViewColSmallText}>Moving towards the right direction</Text>
            </View>
            <View style={OnboardingStyle.OnBoardViewBases}>
                <Ripple style={OnboardingStyle.OnBoardViewBasePress} rippleColor='#fff' rippleOverflow={true} rippleSize={350} rippleOpacity={0.9} rippleDuration={500} onPress={()=>navigation.navigate('Register')}>
                    <Text style={OnboardingStyle.OnBoardViewBasePressText}>Create an account</Text>
                </Ripple>
                <Ripple style={OnboardingStyle.OnBoardViewBasePressWhite} rippleColor='#fff' rippleOverflow={true} rippleSize={350} rippleOpacity={0.9} rippleDuration={500} onPress={()=>navigation.navigate('Login')}>
                    <Text style={OnboardingStyle.OnBoardViewBasePressWhiteText}>Login</Text>
                </Ripple>
            </View>
        </SafeAreaView>
    );
};
export default React.memo(OnboardingScreenTwo);