import React, {useState,useEffect} from 'react';
import {SafeAreaView,View,Image,Text,Pressable,TextInput,Modal,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox';
import Statusbar from '../../statusbar';
import FontStyles from '../../styles/fonts';
import Ripple from 'react-native-material-ripple';
import {HabitStyle} from '../../styles/stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
const RepeatScreen = ({navigation}) => {
    const [isChecked, setChecked] = useState({
        "Sun" : false,
        "Mon" : false,
        "Tue" : false,
        "Wed" : false,
        "Thu" : false,
        "Fri" : false,
        "Sat" : false,
    });
    const handleChange = (e) => {
        setChecked(prevState => ({
            ...prevState,
            [e] : !isChecked[e]
        }));
    };
    const SaveRepeat = async () => {
        try{
            const jsonValue = JSON.stringify(isChecked);
            await AsyncStorage.setItem('NspireRepeatValue', jsonValue);
            setTimeout(()=>{navigation.goBack()},1000);
        }catch(e){
            return false;
        }
    }; 
    const RepeatDays = async () => {
        try{
          const jsonValue = await AsyncStorage.getItem('NspireRepeatValue');
          if(jsonValue !== null){
            var jsonResponse = JSON.parse(jsonValue);
            setChecked(jsonResponse);
          }
        }catch(e){
          return false;
        }
    };
    useEffect(()=>{
        navigation.addListener('focus', function(){
            RepeatDays();
        });
    },[]);
    if(FontStyles())
    return(
        <>
            <Statusbar backgroundColor='#EFF0F1' barStyle='dark-content'/> 
            <SafeAreaView style={HabitStyle.HabitSafeArea}>
                <View style={HabitStyle.HabitTopView}>
                    <Pressable style={HabitStyle.HabitTopViewIconPress} onPress={()=>navigation.goBack()}>
                        <Image style={HabitStyle.HabitTopViewIcon} source={require('../../temps/arrowleft-circle.png')}/>
                    </Pressable>
                    <Text style={HabitStyle.HabitTopViewText}>Repeat</Text>
                </View>
                <View style={HabitStyle.HabitMidView}>

                    <Pressable style={HabitStyle.HabitSmallListView}>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Sunday</Text>
                        </View>
                        <Checkbox style={HabitStyle.HabitListViewCheck} value={isChecked.Sun} onValueChange={()=>handleChange('Sun')} color={isChecked.Sun ? '#639B6D' : undefined}/>
                    </Pressable>
                    <Pressable style={HabitStyle.HabitSmallListView}>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Monday</Text>
                        </View>
                        <Checkbox style={HabitStyle.HabitListViewCheck} value={isChecked.Mon} onValueChange={()=>handleChange('Mon')} color={isChecked.Mon ? '#639B6D' : undefined}/>
                    </Pressable>
                    <Pressable style={HabitStyle.HabitSmallListView}>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Tuesday</Text>
                        </View>
                        <Checkbox style={HabitStyle.HabitListViewCheck} value={isChecked.Tue} onValueChange={()=>handleChange('Tue')} color={isChecked.Tue ? '#639B6D' : undefined}/>
                    </Pressable>
                    <Pressable style={HabitStyle.HabitSmallListView}>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Wednesday</Text>
                        </View>
                        <Checkbox style={HabitStyle.HabitListViewCheck} value={isChecked.Wed} onValueChange={()=>handleChange('Wed')} color={isChecked.Wed ? '#639B6D' : undefined}/>
                    </Pressable>
                    <Pressable style={HabitStyle.HabitSmallListView}>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Thursday</Text>
                        </View>
                        <Checkbox style={HabitStyle.HabitListViewCheck} value={isChecked.Thu} onValueChange={()=>handleChange('Thu')} color={isChecked.Thu ? '#639B6D' : undefined}/>
                    </Pressable>
                    <Pressable style={HabitStyle.HabitSmallListView}>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Friday</Text>
                        </View>
                        <Checkbox style={HabitStyle.HabitListViewCheck} value={isChecked.Fri} onValueChange={()=>handleChange('Fri')} color={isChecked.Fri ? '#639B6D' : undefined}/>
                    </Pressable>
                    <Pressable style={HabitStyle.HabitSmallListView}>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextBig}>Saturday</Text>
                        </View>
                        <Checkbox style={HabitStyle.HabitListViewCheck} value={isChecked.Sat} onValueChange={()=>handleChange('Sat')} color={isChecked.Sat ? '#639B6D' : undefined}/> 
                    </Pressable>


                    <View style={HabitStyle.HabitListBaseViewCont}>
                        <View style={HabitStyle.HabitListBaseView}>
                            <Ripple style={HabitStyle.HabitListBaseViewRippleWhite} rippleColor='#EFF0F1' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={()=>navigation.goBack()}>
                                <Text style={HabitStyle.HabitListBaseViewRippleTextWhite}>Cancel</Text>
                            </Ripple>
                            <Ripple style={HabitStyle.HabitListBaseViewRippleGreen} rippleColor='#FFFFFF' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={SaveRepeat}>
                                <Text style={HabitStyle.HabitListBaseViewRippleTextGreen}>Save</Text>
                            </Ripple>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
};
export default React.memo(RepeatScreen);