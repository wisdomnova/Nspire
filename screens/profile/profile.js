import React from 'react';
import {SafeAreaView,ScrollView,View,Text,Pressable,Image} from 'react-native';
import Statusbar from '../../statusbar';
import {ProfileStyle} from '../../styles/stylesheet';
const TodayScreen = ({navigation}) => {
    return(
    <>
        <Statusbar backgroundColor='#EFF0F1' barStyle='dark-content'/>
        <SafeAreaView style={ProfileStyle.ProfileSafeArea}>
            <View style={ProfileStyle.ProfileHeaderView}>
                <Pressable style={ProfileStyle.ProfileHeaderViewIconPress} onPress={()=>navigation.navigate('Settings')}>
                    <Image source={require('../../temps/cogs.png')} style={ProfileStyle.ProfileHeaderViewIcon}/>
                </Pressable>
                <Text style={ProfileStyle.ProfileHeaderViewText}>Profile</Text>
            </View>
            <ScrollView style={ProfileStyle.ProfileScrollView}>
                <View style={ProfileStyle.ProfileContOverBar}> 
                    <View style={ProfileStyle.ProfileContOverView}>
                        <View style={ProfileStyle.ProfileContOverViewTop}>
                            <View style={ProfileStyle.ProfileContOverViewTopProp}>
                                <Image source={require('../../temps/jack.png')} style={ProfileStyle.ProfileContOverViewTopPropImg}/>
                                <Pressable style={ProfileStyle.ProfileContOverViewTopPropIconPress}>
                                    <Image source={require('../../temps/plus.png')} style={ProfileStyle.ProfileContOverViewTopPropIcon}/>
                                </Pressable>
                            </View>
                        </View>
                        <View style={ProfileStyle.ProfileContOverViewBase}>
                            <Text style={ProfileStyle.ProfileContOverViewBaseText}>John creta</Text>
                            <Image source={require('../../temps/pen.png')} style={ProfileStyle.ProfileContOverViewBaseImg}/>
                        </View>
                    </View>
                </View>
                <View style={ProfileStyle.ProfileStreakView}>
                    <View style={ProfileStyle.ProfileStreakViewRowMid}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextBig}>Journey Streak</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>Current</Text>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmallGreen}>+27</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>Personal Best</Text>
                        <View style={ProfileStyle.ProfileStreakViewRowSmall}>
                            <Image source={require('../../temps/trophy.png')} style={ProfileStyle.ProfileStreakViewRowImg}/>
                            <Text style={ProfileStyle.ProfileStreakViewRowTextBig}>27</Text>
                        </View>
                    </View>
                </View>
                <View style={ProfileStyle.ProfileContOverBarHr}>
                    <View style={ProfileStyle.ProfileContOverBarHrItem}></View>
                </View>
                <View style={ProfileStyle.ProfileStreakView}>
                    <View style={ProfileStyle.ProfileStreakViewRowMid}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextBig}>Achievements</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextBig}>Gratitude</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>Complete  15 gratitudes</Text>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>10/15</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewCent}>
                        <View style={ProfileStyle.ProfileStreakViewCentLong}>
                            <View style={[ProfileStyle.ProfileStreakViewCentShort,{width:'60%'}]}></View>
                        </View>
                    </View>
                </View>
                <View style={ProfileStyle.ProfileStreakView}>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextBig}>Affirmations</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>Complete 10 Affirmations</Text>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>7/10</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewCent}>
                        <View style={ProfileStyle.ProfileStreakViewCentLong}>
                            <View style={[ProfileStyle.ProfileStreakViewCentShort,{width:'65%'}]}></View>
                        </View>
                    </View>
                </View>
                <View style={ProfileStyle.ProfileStreakView}>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextBig}>Today’s Goals</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>Complete 5 Today’s Goals</Text>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>1/5</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewCent}>
                        <View style={ProfileStyle.ProfileStreakViewCentLong}>
                            <View style={[ProfileStyle.ProfileStreakViewCentShort,{width:'20%'}]}></View>
                        </View>
                    </View>
                </View>
                <View style={ProfileStyle.ProfileStreakView}>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextBig}>Meditate for 10 Minutes</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewRow}>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>Complete 5 Meditations</Text>
                        <Text style={ProfileStyle.ProfileStreakViewRowTextSmall}>1/5</Text>
                    </View>
                    <View style={ProfileStyle.ProfileStreakViewCent}>
                        <View style={ProfileStyle.ProfileStreakViewCentLong}>
                            <View style={[ProfileStyle.ProfileStreakViewCentShort,{width:'20%'}]}></View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </>
    );
};
export default React.memo(TodayScreen);