import React from 'react';
import {SafeAreaView,View,Text,Pressable,Image} from 'react-native';
import Statusbar from '../../statusbar';
import FontStyles from '../../styles/fonts';
import Ripple from 'react-native-material-ripple';
import {PremiumStyle} from '../../styles/stylesheet';
const PremiumScreen = ({navigation}) => {
    if(FontStyles())
    return(
        <>
            <Statusbar backgroundColor='#EFF0F1' barStyle='dark-content'/>
            <SafeAreaView style={PremiumStyle.PremiumSafeArea}>
                <View style={PremiumStyle.PremiumTopView}>
                    <Pressable style={PremiumStyle.PremiumTopViewIconPress} onPress={()=>navigation.goBack()}>
                        <Image style={PremiumStyle.PremiumTopViewIcon} source={require('../../temps/arrowleft-circle.png')}/>
                    </Pressable>
                    <Text style={PremiumStyle.PremiumTopViewText}>Free Trial</Text>
                </View>
                <View style={PremiumStyle.PremiumMidView}>
                    <View style={PremiumStyle.PremiumMidViewTopCont}>
                        <Text style={PremiumStyle.PremiumMidViewTopContBig}>UPGRADE PRO</Text>
                        <Text style={PremiumStyle.PremiumMidViewTopContSmall}>TRY 7-day FREE</Text>
                    </View>

                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={PremiumStyle.PremiumListView}>
                        <Image style={PremiumStyle.PremiumListViewImage} source={require('../../temps/lock-shadow.png')}/>
                        <View style={PremiumStyle.PremiumListViewCont}>
                            <Text style={PremiumStyle.PremiumListViewContTextSmall}>Unlock all Quote Packs and Journey Themes</Text>
                        </View>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={PremiumStyle.PremiumListView}>
                        <Image style={PremiumStyle.PremiumListViewImage} source={require('../../temps/plus-shadow.png')}/>
                        <View style={PremiumStyle.PremiumListViewCont}>
                            <Text style={PremiumStyle.PremiumListViewContTextSmall}>Add Unlimted Quote Packs</Text>
                        </View>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={PremiumStyle.PremiumListView}>
                        <Image style={PremiumStyle.PremiumListViewImage} source={require('../../temps/recurr.png')}/>
                        <View style={PremiumStyle.PremiumListViewCont}>
                            <Text style={PremiumStyle.PremiumListViewContTextSmall}>Switch between all Journey Themes</Text>
                        </View>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={PremiumStyle.PremiumListView}>
                        <Image style={PremiumStyle.PremiumListViewImage} source={require('../../temps/dollar.png')}/>
                        <View style={PremiumStyle.PremiumListViewCont}>
                            <Text style={PremiumStyle.PremiumListViewContTextSmall}>Only $2.42/month, billed annually</Text>
                        </View>
                    </Ripple>

                </View>
                <View style={PremiumStyle.PremiumBaseView}>
                    <View style={PremiumStyle.PremiumBaseViewCol}>
                        <Text style={PremiumStyle.PremiumBaseViewColTextBig}>7 Day Free, then $29.00/year</Text>
                        <Text style={PremiumStyle.PremiumBaseViewColTextSmall}>only $2.42/month</Text>
                    </View>
                    <Ripple style={PremiumStyle.PremiumBasePress} rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500}>
                        <Text style={PremiumStyle.PremiumBasePressText}>Start Free Trial</Text>
                    </Ripple>
                </View>
            </SafeAreaView>
        </>
    );
};
export default React.memo(PremiumScreen);