import React from 'react';
import {SafeAreaView,ScrollView,View,Text,Pressable,Image,TouchableOpacity} from 'react-native';
import {ExploreStyle} from '../../styles/stylesheet';
import Statusbar from '../../statusbar';
const ExploreScreen = ({navigation}) => {
    return(
        <>
            <Statusbar backgroundColor='#EFF0F1' barStyle='dark-content'/>
            <SafeAreaView style={ExploreStyle.ExploreSafeArea}>
                <View style={ExploreStyle.ExploreHeaderView}>
                    <Pressable style={ExploreStyle.ExploreHeaderViewIconPress} onPress={()=>navigation.navigate('Settings')}>
                        <Image source={require('../../temps/cogs.png')} style={ExploreStyle.ExploreHeaderViewIcon}/>
                    </Pressable>
                    <Text style={ExploreStyle.ExploreHeaderViewText}>Explore</Text>
                </View>
                <ScrollView style={ExploreStyle.ExploreScrollView}>
                    <ScrollView showsHorizontalScrollIndicator={false} style={ExploreStyle.ExploreHorizontalView} contentContainerStyle={ExploreStyle.ExploreHorizontalViewCont} horizontal>
                        <TouchableOpacity>
                            <Image source={require('../../temps/explore/general.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../temps/explore/favourite.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={ExploreStyle.ExploreCapTextView}>
                        <Text style={ExploreStyle.ExploreCapText}>Most popular</Text>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} style={ExploreStyle.ExploreHorizontalView} contentContainerStyle={ExploreStyle.ExploreHorizontalViewCont} horizontal>
                        <TouchableOpacity>
                            <Image source={require('../../temps/explore/general.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Premium')}>
                            <Image source={require('../../temps/explore/love.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView showsHorizontalScrollIndicator={false} style={ExploreStyle.ExploreHorizontalView} contentContainerStyle={ExploreStyle.ExploreHorizontalViewCont} horizontal>
                        <TouchableOpacity onPress={()=>navigation.navigate('Premium')}>
                            <Image source={require('../../temps/explore/gym.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Premium')}>
                            <Image source={require('../../temps/explore/meditation.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={ExploreStyle.ExploreCapTextView}>
                        <Text style={ExploreStyle.ExploreCapText}>For You</Text>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} style={ExploreStyle.ExploreHorizontalView} contentContainerStyle={ExploreStyle.ExploreHorizontalViewCont} horizontal>
                        <TouchableOpacity onPress={()=>navigation.navigate('Premium')}>
                            <Image source={require('../../temps/explore/child.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Premium')}>
                            <Image source={require('../../temps/explore/sad.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView showsHorizontalScrollIndicator={false} style={ExploreStyle.ExploreHorizontalView} contentContainerStyle={ExploreStyle.ExploreHorizontalViewCont} horizontal>
                        <TouchableOpacity onPress={()=>navigation.navigate('Premium')}>
                            <Image source={require('../../temps/explore/child.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Premium')}>
                            <Image source={require('../../temps/explore/sad.png')} style={ExploreStyle.ExploreHorizontalViewImg}/>
                        </TouchableOpacity>
                    </ScrollView>

                </ScrollView>
            </SafeAreaView>
        </>
    );
};
export default React.memo(ExploreScreen);