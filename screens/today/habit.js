import React, {useState,useEffect} from 'react';
import {SafeAreaView,View,Image,Text,Pressable,TextInput,Modal,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import Statusbar from '../../statusbar';
import FontStyles from '../../styles/fonts';
import Ripple from 'react-native-material-ripple';
import {HabitStyle} from '../../styles/stylesheet';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from 'react-native-wheel-pick';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HabitScreen = ({navigation}) => {
    const [isChecked, setChecked] = useState({});
    const [repeats, SetRepeats] = useState('Everyday');
    const [habittext, SetHabitText] = useState('');
    const [datemodal, SetDateModal] = useState(false);
    const [timemodal, SetTimeModal] = useState(false);
    const [numbermodal, SetNumberModal] = useState(false);
    const [presentdate, SetPresentDate] = useState(new Date());
    const [date, SetDate] = useState("Today");
    const [time, SetTime] = useState("9:30 PM");
    const [presenttime, SetPresentTime] = useState(new Date());
    const [number, SetNumber] = useState(1);
    const [mode, setMode] = useState('date');
    const [show, SetShow] = useState(true); 
    const DateChange = (res,dar) => {
        SetPresentDate(dar);
        var datevar = new Date(dar), 
        datesel = datevar.toLocaleString('en-US',{day:'numeric',month:'short',year:'numeric'});
        SetDate(datesel);
    };
    const TimeChange = (res,dar) => {
        SetPresentTime(dar);
        var timevar = new Date(dar),
        timesel = timevar.toLocaleString('en-US',{hour:'numeric',minute:'numeric',hour12:true});
        SetTime(timesel);
    };
    const NumberChange = (res) => {
        SetNumber(res);
    };
    const CalendarModal = () => {
        return(
            <>
                <Modal transparent={true} visible={datemodal}>
                    <TouchableOpacity style={HabitStyle.HabitCalendarModal} onPressOut={()=>SetDateModal(false)}>
                        <TouchableWithoutFeedback>
                            <View style={HabitStyle.HabitCalendarView}>
                                <RNDateTimePicker mode='date' value={presentdate} display='inline' is24Hour={true} onChange={DateChange} textColor='#000' accentColor='#639B6D' themeVariant='light' locale="en-US"/>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={HabitStyle.HabitCalendarButtonView}>
                                <Ripple style={HabitStyle.HabitCalendarButtonRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={()=>SetDateModal(false)}>
                                    <Text style={HabitStyle.HabitCalendarButtonText}>Confirm</Text>
                                </Ripple>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </>
        );
    };
    const TimeModal = () => {
        return(
            <>
                <Modal transparent={true} visible={timemodal}>
                    <TouchableOpacity style={HabitStyle.HabitCalendarModal} onPressOut={()=>SetTimeModal(false)}>
                        <TouchableWithoutFeedback>
                            <View style={HabitStyle.HabitTimeView}>
                                <RNDateTimePicker mode="time" value={presenttime} display="spinner" is24Hour={false} onChange={TimeChange} minuteInterval={15} textColor='#000' locale="en-US"/>
                                <View style={HabitStyle.HabitTimeButtonView}>
                                    <Ripple style={HabitStyle.HabitCalendarButtonRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={()=>SetTimeModal(false)}>
                                        <Text style={HabitStyle.HabitCalendarButtonText}>Confirm</Text>
                                    </Ripple>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </>
        );
    };
    const NumberModal = () => {
        return(
            <>
                <Modal transparent={true} visible={numbermodal}>
                    <TouchableOpacity style={HabitStyle.HabitCalendarModal} onPressOut={()=>SetNumberModal(false)}>
                        <TouchableWithoutFeedback>
                            <View style={HabitStyle.HabitTimeView}>
                                <Picker style={HabitStyle.HabitTimeViewPicker} selectedValue={number} pickerData={['1','2','3','4','5','6','7','8','9']} onValueChange={NumberChange}/>
                                <View style={HabitStyle.HabitTimeButtonView}>
                                    <Ripple style={HabitStyle.HabitCalendarButtonRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={()=>SetNumberModal(false)}>
                                        <Text style={HabitStyle.HabitCalendarButtonText}>Confirm</Text>
                                    </Ripple>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </>
        ); 
    };
    const SaveHabit = () => {
        if(habittext.length >0){
            SaveHabitAsync();
        }else{
            navigation.goBack();
        }
    };
    const SaveHabitAsync = async () => {
        try{
            await AsyncStorage.setItem('NspireHabitValue', habittext);
            await AsyncStorage.setItem('NspireHabitCount', number.toString()); 
            await AsyncStorage.setItem('NspireHabitActiveCount', '0');
            navigation.goBack();
        }catch (e) {
            return false;
        }
    };
    const RepeatDays = async () => {
        try{
            const repeatValue = await AsyncStorage.getItem('NspireHabitValue');
            const jsonValue = await AsyncStorage.getItem('NspireRepeatValue'); 
            const numberCount = await AsyncStorage.getItem('NspireHabitCount');
            if(repeatValue !== null) {
                SetHabitText(repeatValue);
            }
            if(jsonValue !== null){
                var jsonResponse = JSON.parse(jsonValue);
                setChecked(jsonResponse);
            }
            if(numberCount !== null){
                SetNumber(parseInt(numberCount));
            }
        }catch(e){
          return false;
        }
    };
    const ParseRepeats = () => {
        var parseKeys = Object.keys(isChecked).filter(key => isChecked[key] === true);
        if(parseKeys.length > 0){
            SetRepeats(parseKeys+" ");
        }else{
            SetRepeats('Everyday');
        }
    };  
    useEffect(()=>{
        ParseRepeats();
    },[isChecked]);
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
                {CalendarModal()}
                {TimeModal()}
                {NumberModal()}
                <View style={HabitStyle.HabitTopView}>
                    <Pressable style={HabitStyle.HabitTopViewIconPress} onPress={()=>navigation.goBack()}>
                        <Image style={HabitStyle.HabitTopViewIcon} source={require('../../temps/arrowleft-circle.png')}/>
                    </Pressable>
                    <Text style={HabitStyle.HabitTopViewText}>Create Habit</Text>
                </View>
                <View style={HabitStyle.HabitMidView}>
                    <View style={HabitStyle.HabitInpView}>
                        <Image style={HabitStyle.HabitInpImg} source={require('../../temps/book-green.png')}/>
                        <TextInput style={HabitStyle.HabitInpCon} placeholder='Type your Habit...' placeholderTextColor={'#666666'} selectionColor={'#666666'} returnKeyType='done' value={habittext} onChangeText={SetHabitText} autoFocus/>
                    </View>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListView} onPress={()=>navigation.navigate('Repeat')}>
                        <Image style={HabitStyle.HabitListViewImage} source={require('../../temps/recycle.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextSmall}>Repeat</Text>
                            <Text style={HabitStyle.HabitListViewContTextBig}>{repeats}</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListView} onPress={()=>SetNumberModal(true)}>
                        <Image style={HabitStyle.HabitListViewImage} source={require('../../temps/target.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextSmall}>Goal</Text>
                            <Text style={HabitStyle.HabitListViewContTextBig}>{number} time(s) per day</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListView} onPress={()=>SetTimeModal(true)}>
                        <Image style={HabitStyle.HabitListViewImage} source={require('../../temps/bell.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextSmall}>Reminder</Text>
                            <Text style={HabitStyle.HabitListViewContTextBig}>{time}</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <Ripple rippleColor='#EFF0F1' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={HabitStyle.HabitListView} onPress={()=>SetDateModal(true)}>
                        <Image style={HabitStyle.HabitListViewImage} source={require('../../temps/calendar.png')}/>
                        <View style={HabitStyle.HabitListViewCont}>
                            <Text style={HabitStyle.HabitListViewContTextSmall}>Start Date</Text>
                            <Text style={HabitStyle.HabitListViewContTextBig}>{date}</Text>
                        </View>
                        <Image style={HabitStyle.HabitListViewIcon} source={require('../../temps/chevron-right.png')}/>
                    </Ripple>
                    <View style={HabitStyle.HabitListBaseViewCont}> 
                        <View style={HabitStyle.HabitListBaseView}>
                            <Ripple style={HabitStyle.HabitListBaseViewRippleWhite} rippleColor='#EFF0F1' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={()=>navigation.goBack()}>
                                <Text style={HabitStyle.HabitListBaseViewRippleTextWhite}>Cancel</Text>
                            </Ripple>
                            <Ripple style={HabitStyle.HabitListBaseViewRippleGreen} rippleColor='#FFFFFF' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={SaveHabit}>
                                <Text style={HabitStyle.HabitListBaseViewRippleTextGreen}>Save</Text>
                            </Ripple>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
};
export default React.memo(HabitScreen);