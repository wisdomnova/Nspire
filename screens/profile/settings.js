import React from 'react';
import {SafeAreaView,View,Image,Text,Pressable} from 'react-native';
import Statusbar from '../../statusbar';
import FontStyles from '../../styles/fonts';
import Ripple from 'react-native-material-ripple';
import {HabitStyle} from '../../styles/stylesheet';
const SettingsScreen = ({navigation}) => {
    if(FontStyles())
    return(
        <>
            <Statusbar backgroundColor='#EFF0F1' barStyle='dark-content'/>
            <SafeAreaView style={HabitStyle.HabitSafeArea}>
                <View style={HabitStyle.HabitTopView}>
                    <Pressable style={HabitStyle.HabitTopViewIconPress} onPress={()=>navigation.goBack()}>
                        <Image style={HabitStyle.HabitTopViewIcon} source={require('../../temps/arrowleft-circle.png')}/>
                    </Pressable>
                    <Text style={HabitStyle.HabitTopViewText}>Settings</Text>
                </View>
                <View style={HabitStyle.HabitMidView}>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListViewSett}>
                        <Image style={HabitStyle.HabitListViewImageSett} source={require('../../temps/bell-black.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Notification</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListViewSett}>
                        <Image style={HabitStyle.HabitListViewImageSett} source={require('../../temps/customer-black.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Help & Support</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListViewSett}>
                        <Image style={HabitStyle.HabitListViewImageSett} source={require('../../temps/chat-black.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Feedback</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListViewSett}>
                        <Image style={HabitStyle.HabitListViewImageSett} source={require('../../temps/star-black.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Rate Us</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListViewSett}>
                        <Image style={HabitStyle.HabitListViewImageSett} source={require('../../temps/user-plus-black.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Invite Friends</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListViewSett}>
                        <Image style={HabitStyle.HabitListViewImageSett} source={require('../../temps/question-black.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Help</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListViewSett}>
                        <Image style={HabitStyle.HabitListViewImageSett} source={require('../../temps/logout-black.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Logout</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                </View>
            </SafeAreaView>
        </>
    )
};
export default React.memo(SettingsScreen);