import React,{useState,useEffect} from 'react';
import {SafeAreaView,ScrollView,View,Text,Pressable,Image,TextInput,Modal,TouchableWithoutFeedback,TouchableOpacity,Keyboard,KeyboardAvoidingView,Platform} from 'react-native';
import {initializeApp} from 'firebase/app';
import {getDatabase,ref,onValue,set,push} from 'firebase/database';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LinearGradient} from 'expo-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';
import SwipeableItem from 'react-native-swipeable-item';
import Statusbar from '../../statusbar';
import FontStyles from '../../styles/fonts';
import Ripple from 'react-native-material-ripple';
import {TodayStyle} from '../../styles/stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarStrip from 'react-native-calendar-strip';
import {moderateScale} from 'react-native-size-matters';
const TodayScreen = ({navigation}) => {
    const [habittext, SetHabitText] = useState('Click to add a Habit...');
    const [numbervalue, SetNumberValue]= useState(0);
    const [activevalue, SetActiveValue] = useState(0);
    const [goal1, SetGoal1] = useState('');
    const [goal2, SetGoal2] = useState('');
    const [goal3, SetGoal3] = useState('');
    const [gratmodal, SetGratModal] = useState(false);
    const [affirmodal, SetAffirModal] = useState(false);
    const [quotemodal, SetQuoteModal] = useState(false);
    const [gratTexts, SetGratTexts] = useState('Write here...');
    const [gratText, SetGratText] = useState('');
    const [gratlen, SetGratLen] = useState(0);
    const [affirTexts, SetAffirTexts] = useState('Write here...');
    const [affirText, SetAffirText] = useState('');
    const [affirlen, SetAffirLen] = useState(0);
    const [radiostate1, SetRadioState1] = useState(false);
    const [radiostate2, SetRadioState2] = useState(false);
    const [radiostate3, SetRadioState3] = useState(false);
    const [completebool, SetCompleteBool] = useState([false,false,false,false]);
    const [contentoff, SetContentOff] = useState({x:0,y:0});
    const [nspireId, SetNspireId] = useState('');
    const todays_date = new Date();
    const todays_date_int = todays_date.getDate();
    const todays_fullyear_int = todays_date.getFullYear();
    const todays_weekday_string = todays_date.toLocaleString('default',{weekday:'long'});
    const todays_month_string = todays_date.toLocaleString('default',{month:'long'});
    const todays_date_string = (todays_weekday_string+", "+todays_month_string+" "+todays_date_int+", "+todays_fullyear_int);
    const firebaseConfig = {
        apiKey: "AIzaSyAxU3F8GFW_HxuQB08s4BKgpliJRDB1Ot4",
        authDomain: "nspire-app.firebaseapp.com",
        databaseURL: "https://nspire-app-default-rtdb.firebaseio.com",
        projectId: "nspire-app",
        storageBucket: "nspire-app.appspot.com",
        messagingSenderId: "734709562919",
        appId: "1:734709562919:web:dc9b952775f539e1f75802",
        measurementId: "G-3E1K1JVWBT"
    };
    const myApp = initializeApp(firebaseConfig);
    const UpdateGrat = (res) => {
        SetGratText(res);
        SetGratTexts(res);
        SetGratLen(res.length);
    };
    const UpdateGratText = (res) => {
        var reslength = res.length + gratText.length;
        if(reslength < 100){
            SetGratText(gratText + res);
            SetGratTexts(gratText + res);
            SetGratLen(gratlen + res.length);
        }
    };
    const UpdateAffir = (res) => {
        SetAffirText(res);
        SetAffirTexts(res);
        SetAffirLen(res.length);
    };
    const UpdateAffirText = (res) => {
        var reslength = res.length + affirText.length;
        if(reslength < 100){
            SetAffirText(affirText + res);
            SetAffirTexts(affirText + res);
            SetAffirLen(affirlen + res.length);
        }
    };
    const GratitudeModal = () => {
        return(
            <>
                <Modal visible={gratmodal} transparent={true}>
                    <TouchableOpacity style={TodayStyle.TodaysGratModal} onPressOut={()=>SetGratModal(false)}>
                        <TouchableWithoutFeedback>
                            <View style={TodayStyle.TodaysGratModalView}> 
                                <View style={TodayStyle.TodaysGratModalCancView}>
                                    <Pressable onPress={()=>SetGratModal(false)}>
                                        <Image style={TodayStyle.TodaysGratModalCancViewImg} source={require('../../temps/closebtn-green.png')}/>
                                    </Pressable>
                                </View>
                                <View style={TodayStyle.TodaysGratModalLenView}>
                                    <Text style={TodayStyle.TodaysGratModalLenViewText}>Gratitude</Text>
                                </View>
                                <View style={TodayStyle.TodaysGratModalInputView}>
                                    <TextInput style={TodayStyle.TodaysGratModalInput} placeholder='I am grateful for...' placeholderTextColor={'#666666'} selectionColor={'#666666'} returnKeyType='done' multiline={true} blurOnSubmit={true} value={gratText} onChangeText={UpdateGrat} onSubmitEditing={()=>{Keyboard.dismiss()}} maxLength={100}/>
                                    <View style={TodayStyle.TodaysGratModalInputCountView}>
                                        <Text style={TodayStyle.TodaysGratModalInputCount}>{gratlen}/100</Text>
                                    </View>
                                </View>
                                <View style={TodayStyle.TodaysGratModalLenView}>
                                    <Text style={TodayStyle.TodaysGratModalLenViewText}>Suggested Gratitudes</Text>
                                </View>
                                <View style={TodayStyle.TodaysGratModalSuggestionsView}>
                                    <Ripple style={TodayStyle.TodaysGratModalSuggestionsRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={100} rippleOpacity={0.9} rippleDuration={500} onPress={()=>UpdateGratText('Mother nature')}>
                                        <Text style={TodayStyle.TodaysGratModalSuggestionsText}>Mother nature</Text>
                                    </Ripple>
                                    <Ripple style={TodayStyle.TodaysGratModalSuggestionsRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={100} rippleOpacity={0.9} rippleDuration={500} onPress={()=>UpdateGratText('The sun shining bright')}>
                                        <Text style={TodayStyle.TodaysGratModalSuggestionsText}>The sun shining bright</Text>
                                    </Ripple>
                                </View>
                                <View style={TodayStyle.TodaysGratModalSuggestionsView}>
                                    <Ripple style={TodayStyle.TodaysGratModalSuggestionsRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={100} rippleOpacity={0.9} rippleDuration={500} onPress={()=>UpdateGratText('My business doing well and growing')}>
                                        <Text style={TodayStyle.TodaysGratModalSuggestionsText}>My business doing well and growing</Text>
                                    </Ripple>
                                </View>
                                <View style={TodayStyle.TodaysGratModalButtonView}>
                                    <Ripple style={TodayStyle.TodaysGratModalButtonRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={()=>SetGratModal(false)}>
                                        <Text style={TodayStyle.TodaysGratModalButtonText}>Done</Text>
                                    </Ripple>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </>
        )
    };
    const AffirmationModal = () => {
        return(
            <>
                <Modal visible={affirmodal} transparent={true}>
                    <TouchableOpacity style={TodayStyle.TodaysGratModal} onPressOut={()=>SetAffirModal(false)}>
                        <TouchableWithoutFeedback>
                            <View style={TodayStyle.TodaysGratModalView}> 
                                <View style={TodayStyle.TodaysGratModalCancView}>
                                    <Pressable onPress={()=>SetAffirModal(false)}>
                                        <Image style={TodayStyle.TodaysGratModalCancViewImg} source={require('../../temps/closebtn-green.png')}/>
                                    </Pressable>
                                </View>
                                <View style={TodayStyle.TodaysGratModalLenView}>
                                    <Text style={TodayStyle.TodaysGratModalLenViewText}>Affirmation</Text>
                                </View>
                                <View style={TodayStyle.TodaysGratModalInputView}>
                                    <TextInput style={TodayStyle.TodaysGratModalInput} placeholder='I...' placeholderTextColor={'#666666'} selectionColor={'#666666'} returnKeyType='done' multiline={true} blurOnSubmit={true} value={affirText} onChangeText={UpdateAffir} onSubmitEditing={()=>{Keyboard.dismiss()}} maxLength={100}/>
                                    <View style={TodayStyle.TodaysGratModalInputCountView}>
                                        <Text style={TodayStyle.TodaysGratModalInputCount}>{affirlen}/100</Text>
                                    </View>
                                </View>
                                <View style={TodayStyle.TodaysGratModalLenView}>
                                    <Text style={TodayStyle.TodaysGratModalLenViewText}>Suggested Affirmations</Text>
                                </View>
                                <View style={TodayStyle.TodaysGratModalSuggestionsView}>
                                    <Ripple style={TodayStyle.TodaysGratModalSuggestionsRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={100} rippleOpacity={0.9} rippleDuration={500} onPress={()=>UpdateAffirText('I am successful')}>
                                        <Text style={TodayStyle.TodaysGratModalSuggestionsText}>I am successful</Text>
                                    </Ripple>
                                    <Ripple style={TodayStyle.TodaysGratModalSuggestionsRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={100} rippleOpacity={0.9} rippleDuration={500} onPress={()=>UpdateAffirText('My work gives me joy')}>
                                        <Text style={TodayStyle.TodaysGratModalSuggestionsText}>My work gives me joy</Text>
                                    </Ripple>
                                </View>
                                <View style={TodayStyle.TodaysGratModalSuggestionsView}>
                                    <Ripple style={TodayStyle.TodaysGratModalSuggestionsRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={100} rippleOpacity={0.9} rippleDuration={500} onPress={()=>UpdateAffirText('I am more than my work and goals')}>
                                        <Text style={TodayStyle.TodaysGratModalSuggestionsText}>I am more than my work and goals</Text>
                                    </Ripple>
                                </View>
                                <View style={TodayStyle.TodaysGratModalButtonView}>
                                    <Ripple style={TodayStyle.TodaysGratModalButtonRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={()=>SetAffirModal(false)}>
                                        <Text style={TodayStyle.TodaysGratModalButtonText}>Done</Text>
                                    </Ripple>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </>
        )
    };
    const QuoteModal = () => {
        return(
            <>
                <Modal visible={quotemodal} transparent={true}>
                    <TouchableOpacity style={TodayStyle.TodaysQuoteModal} onPressOut={()=>SetQuoteModal(false)}>
                        <TouchableWithoutFeedback>
                            <View style={TodayStyle.TodaysQuoteModalView}>
                                <View style={TodayStyle.TodaysQuoteTopView}>
                                    <Text style={TodayStyle.TodaysQuoteTopViewText}>Quote</Text>
                                    <Pressable style={TodayStyle.TodaysQuoteTopViewPress} onPress={()=>SetQuoteModal(false)}>
                                        <Image source={require('../../temps/close.png')} style={TodayStyle.TodaysQuoteTopViewImage}/>
                                    </Pressable>
                                </View>
                                <View style={TodayStyle.TodaysQuoteMidView}>
                                    <LinearGradient colors={['#639B6D','#377690']} style={TodayStyle.TodaysQuoteLayoutItem} start={{x: 0, y: 0.3}}>
                                        <View style={TodayStyle.TodaysQuoteLayoutItemTop}>
                                            <Text style={TodayStyle.TodaysQuoteLayoutItemTopText}>Many of life’s failures are people who did not realize how close they were to success when they gave up.</Text>
                                        </View>
                                        <View style={TodayStyle.TodaysQuoteLayoutItemBase}>
                                            <View style={TodayStyle.TodaysQuoteLayoutItemBaseLeft}>
                                                <Text style={TodayStyle.TodaysQuoteLayoutItemBaseLeftBig}>Daily Quote</Text>
                                                <Text style={TodayStyle.TodaysQuoteLayoutItemBaseLeftSmall}>Thomas A. Edison</Text>
                                            </View>
                                            <View style={TodayStyle.TodaysQuoteLayoutItemBaseRight}>
                                                <Image style={TodayStyle.TodaysQuoteLayoutItemBaseRightImg} source={require('../../temps/nspirelogo-white.png')}/>
                                                <Text style={TodayStyle.TodaysQuoteLayoutItemBaseRightText}>NSPIRE</Text>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </View>
                                <View style={TodayStyle.TodaysQuoteModalButtonView}>
                                    <Ripple style={TodayStyle.TodaysQuoteModalButtonRipple} rippleColor='#fff' rippleOverflow={true} rippleSize={150} rippleOpacity={0.9} rippleDuration={500} onPress={()=>SetQuoteModal(false)}>
                                        <Image style={TodayStyle.TodaysQuoteModalButtonImage} source={require('../../temps/share-white.png')}/>
                                        <Text style={TodayStyle.TodaysQuoteModalButtonText}>Share</Text>
                                    </Ripple>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>
            </>
        )
    };
    const ImageRadio = (res) => {
        const resindex = res.index;
        const respress = res.onPress;
        if(!resindex){
            return(
                <Pressable onPress={respress} style={TodayStyle.TodaysJourneyViewsBasePress}>
                    <Image source={require('../../temps/circle.png')} style={TodayStyle.TodaysJourneyViewsBaseCheck}/>
                </Pressable>
            );
        }else{
            return(
                <Pressable onPress={respress} style={TodayStyle.TodaysJourneyViewsBasePress}>
                    <Image source={require('../../temps/circle-check.png')} style={TodayStyle.TodaysJourneyViewsBaseCheck}/>
                </Pressable>
            );
        }
    };
    const RoadRing = (res) => {
        var roadtrig = res.trig;
        if(roadtrig !== 'Write here...'){
            return(
                <>
                    <Image source={require('../../temps/greencheck-icon.png')} style={TodayStyle.TodaysJourneyViewsBall}/>
                </>
            );
        }else{
            return(
            <>
                <Pressable style={TodayStyle.TodaysJourneyViewsBall}></Pressable>
            </>
            );
        }
    };
    const RoadRingHabit = (res) => {
        var roadtrig = res.trig;
        if(roadtrig !== 'Click to add a Habit...' && activevalue == numbervalue){
            return(
                <>
                    <Image source={require('../../temps/greencheck-icon.png')} style={TodayStyle.TodaysJourneyViewsBall}/>
                </>
            );
        }else{
            return(
            <>
                <Pressable style={TodayStyle.TodaysJourneyViewsBall}></Pressable>
            </>
            );
        }
    };
    const RoadRingGoals = () => { 
        if(goal1 !== '' && goal2 !== '' && goal3 !== '' && radiostate1 && radiostate2 && radiostate3){
            return(
                <>
                    <Image source={require('../../temps/greencheck-icon.png')} style={TodayStyle.TodaysJourneyViewsBall}/>
                </>
            );
        }else{
            return(
            <>
                <Pressable style={TodayStyle.TodaysJourneyViewsBall}></Pressable>
            </>
            );
        }
    };
    const FetchHabitAsync = async () => {
        try{
            const value = await AsyncStorage.getItem('NspireHabitValue');
            const number_value = await AsyncStorage.getItem('NspireHabitCount');
            const active_value = await AsyncStorage.getItem('NspireHabitActiveCount');
            if(value !== null) {
                SetHabitText(value);
            }
            if(number_value !== null){
                SetNumberValue(parseInt(number_value));
            }
            if(active_value !== null){
                SetActiveValue(parseInt(active_value));
            }
        }catch(e) {
          return false;
        }
    };
    const UpdateActiveValue = () => {
        if(activevalue < numbervalue){
            var res = activevalue + 1;
            SetActiveValue(res);
        }
    };
    const SaveHabitAsync = async () => {
        try{
            await AsyncStorage.setItem('NspireHabitActiveCount', activevalue.toString());
            FetchHabitAsync();
        }catch(e){
            return false;
        }
    };
    const SwipeButton = () => {
        return(
            <Pressable style={TodayStyle.TodaysJourneyViewsBaseSwipe} onPress={()=>navigation.navigate('Habit')}>
                <Text style={TodayStyle.TodaysJourneyViewsBaseSwipeText}>Edit</Text>
            </Pressable>
        );
    };
    const CheckComplete = () => {
        if(gratText.length){
            completebool[0] = true;
        }else{
            completebool[0] = false;
        }
        if(affirText.length){
            completebool[1] = true;
        }else{
            completebool[1] = false;
        }
        if(goal1 !== '' && goal2 !== '' && goal3 !== '' && radiostate1 && radiostate2 && radiostate3){
            completebool[2] = true;
        }else{
            completebool[2] = false;
        }
        if(habittext !== 'Click to add a Habit...' && activevalue == numbervalue){
            completebool[3] = true;
        }else{
            completebool[3] = false;
        }
        const completeevery = completebool.every(val => val === true);
        const completecount = completebool.filter(val => val === true).length;
        if(completeevery){
            return(
                <>
                    <View style={TodayStyle.TodaysJourneyViewsTop}>
                        <Image source={require('../../temps/greencheck-icon.png')} style={TodayStyle.TodaysJourneyViewsBall}/>
                        <Text style={TodayStyle.TodaysJourneyViewsTopTextComplete}>4/4 You’re done!</Text>
                    </View>
                </>
            );
        }else{
            return(
                <>
                    <View style={TodayStyle.TodaysJourneyViewsTop}>
                        <Pressable style={TodayStyle.TodaysJourneyViewsBall}></Pressable>
                        <Text style={TodayStyle.TodaysJourneyViewsTopText}>{completecount}/4 Complete</Text>
                    </View>
                </>
            );
        }
    };

    const SendProgress = () => {
        const SendDates = {
            [todays_date_string] : {
                "Quotes": "",
                "Gratitude": gratTexts,
                "Affirmation": affirTexts,
                "Goals": [goal1,goal2,goal3],
                "Habit": {
                    "Name": "",
                    "Repeat": "Everyday",
                    "Goal": 1,
                    "Reminder": "9:30pm",
                    "Start": "Today"
                },
            },
        };
        console.log(SendDates); 
    };
    const ProcessProgress = () => {
        const user_reference = ref(getDatabase(), 'users/' + nspireId);
        
    };


    const markedDatesArray = [
        {
          date: new Date(),
          dots: [
            {
              color: '#000',
              selectedColor: '#000',
            }
          ]
        }
    ];
    const getFirstDayOfWeek = () => {
        const date = new Date(new Date());
        const day = date.getDay();
        const diff = date.getDate() - (day);
        return new Date(date.setDate(diff));
    };
    const getSaturdayOfCurrentWeek = () => {
        const today = new Date();
        const first = today.getDate() - today.getDay() + 1;
        const sixth = first + 5;
        const saturday = new Date(today.setDate(sixth));
        return saturday;
    };


    const FetchUserDate = () => {
        if(nspireId !== "" || nspireId !== null){
            const reference = ref(getDatabase(), 'users/'+nspireId+'/Dates');
            onValue(reference, (snapshot) => {
                const response = snapshot.val();
                const specific_response = response[todays_date_string];
                if(specific_response !== undefined){
                    console.log('Not Undefined'+specific_response);
                }else{
                    console.log('Undefined');
                }
            },{
                onlyOnce: true,
            });
        };
    };
    const FetchUserId = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@Nspire__Id');
            if(jsonValue !== null){
                var jsonParse = JSON.parse(jsonValue);
                SetNspireId(jsonParse.UserId);
            }
        }catch(e){
            return false;
        }
    };

    useEffect(()=>{
        FetchUserId();
    },[]);
    useEffect(()=>{
        FetchUserDate();
    },[nspireId]);


    useEffect(()=>{
        CheckComplete();
        SendProgress();
    },[gratTexts,affirText,goal1,goal2,goal3,radiostate1,radiostate2,radiostate3,activevalue]);
    useEffect(()=>{
        SaveHabitAsync();
    },[activevalue]);
    useEffect(()=>{
        navigation.addListener('focus', function(){
            FetchHabitAsync();
        });
    },[]);
    if(FontStyles())
    return(
        <>
        <Statusbar backgroundColor='#F4F5F5' barStyle='dark-content'/>
        <SafeAreaView style={TodayStyle.TodaySafeArea}>
            <KeyboardAvoidingView behavior={Platform.OS ==='ios'?'padding':'height'} style={TodayStyle.TodayKeyView} enabled={true}>
                {GratitudeModal()}
                {AffirmationModal()}
                {QuoteModal()}
                <View style={TodayStyle.TodayCalendarView}>
                    <CalendarStrip
                        scrollable={true}
                        scrollerPaging={true}
                        numDaysInWeek={7}
                        startDate={getFirstDayOfWeek()}
                        endDate={getSaturdayOfCurrentWeek()}
                        updateWeek={false}
                        useIsoWeekday={true}
                        scrollToOnSetSelectedDate={false}
                        style={TodayStyle.TodayCalendarMidView}
                        dayContainerStyle={TodayStyle.TodayCalendarTopContainer}
                        calendarHeaderContainerStyle={TodayStyle.TodayCalendarTopView}
                        calendarHeaderStyle={TodayStyle.TodayCalendarTopText}
                        dateNumberStyle={TodayStyle.TodayCalendarViewText}
                        dateNameStyle={TodayStyle.TodayCalendarTopViewText}
                        highlightDateNumberContainerStyle={TodayStyle.TodayCalendarViewRipple}
                        highlightDateNumberStyle={TodayStyle.TodayCalendarBaseViewText}
                        highlightDateNameStyle={TodayStyle.TodayCalendarTopViewText}
                        selectedDate={new Date()}
                        selectedDateStyle={TodayStyle.TodayCalendarViewRipple}
                        markedDates={markedDatesArray}
                        markedDatesStyle={TodayStyle.TodayCalendarViewRipples} 
                    />
                </View>
                <KeyboardAwareScrollView style={TodayStyle.TodayScrollView} contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps="handled" contentOffset={contentoff} scrollEnabled>
                    <View style={TodayStyle.TodayQuotesView}>
                        <View style={TodayStyle.TodayCalendarTopView}>
                            <Text style={TodayStyle.TodayCalendarTopText}>Daily Quotes</Text>
                        </View>
                        <ScrollView style={TodayStyle.TodayQuotesScroll} contentContainerStyle={TodayStyle.TodayQuotesScrollCon} pagingEnabled={true} showsHorizontalScrollIndicator={false} snapToInterval={moderateScale(340)} decelerationRate={'fast'} contentInset={{top:0,left:20,bottom:0,right:20}} horizontal>
                            <View style={TodayStyle.TodayQuotesScrollCont}>
                                <Ripple rippleColor='#fff' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={TodayStyle.TodayQuotesScrollOpacity} onPress={()=>SetQuoteModal(true)}>
                                    <LinearGradient colors={['#639B6D','#377690']} style={TodayStyle.TodayQuotesScrollItem} start={{x: 0, y: 0.3}}>
                                        <View style={TodayStyle.TodayQuotesScrollItemTop}>
                                            <Text style={TodayStyle.TodayQuotesScrollItemTopText}>If opportunity doesn’t knock, build a door.</Text>
                                        </View>
                                        <View style={TodayStyle.TodayQuotesScrollItemBase}>
                                            <Image source={require('../../temps/quote.png')} style={TodayStyle.TodayQuotesScrollItemBaseImg}/>
                                            <Text style={TodayStyle.TodayQuotesScrollItemBaseText}>Milton Berle</Text>
                                        </View>
                                    </LinearGradient>
                                </Ripple>
                            </View>
                            <View style={TodayStyle.TodayQuotesScrollCont}>
                                <Ripple rippleColor='#fff' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={TodayStyle.TodayQuotesScrollOpacity} onPress={()=>SetQuoteModal(true)}>
                                    <LinearGradient colors={['#639B6D','#377690']} style={TodayStyle.TodayQuotesScrollItem} start={{x: 0, y: 0.3}}>
                                        <View style={TodayStyle.TodayQuotesScrollItemTop}>
                                            <Text style={TodayStyle.TodayQuotesScrollItemTopText}>If opportunity doesn’t knock, build a door.</Text>
                                        </View>
                                        <View style={TodayStyle.TodayQuotesScrollItemBase}>
                                            <Image source={require('../../temps/quote.png')} style={TodayStyle.TodayQuotesScrollItemBaseImg}/>
                                            <Text style={TodayStyle.TodayQuotesScrollItemBaseText}>Milton Berle</Text>
                                        </View>
                                    </LinearGradient>
                                </Ripple>
                            </View>
                            <View style={TodayStyle.TodayQuotesScrollCont}>
                                <Ripple rippleColor='#fff' rippleOverflow={false} rippleSize={200} rippleOpacity={0.9} rippleDuration={500} style={TodayStyle.TodayQuotesScrollOpacity} onPress={()=>SetQuoteModal(true)}>
                                    <LinearGradient colors={['#639B6D','#377690']} style={TodayStyle.TodayQuotesScrollItem} start={{x: 0, y: 0.3}}>
                                        <View style={TodayStyle.TodayQuotesScrollItemTop}>
                                            <Text style={TodayStyle.TodayQuotesScrollItemTopText}>If opportunity doesn’t knock, build a door.</Text>
                                        </View>
                                        <View style={TodayStyle.TodayQuotesScrollItemBase}>
                                            <Image source={require('../../temps/quote.png')} style={TodayStyle.TodayQuotesScrollItemBaseImg}/>
                                            <Text style={TodayStyle.TodayQuotesScrollItemBaseText}>Milton Berle</Text>
                                        </View>
                                    </LinearGradient>
                                </Ripple>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={TodayStyle.TodayCalendarTopView}>
                        <Text style={TodayStyle.TodayCalendarTopText}>Today’s Journey</Text>
                    </View>
                    <View style={TodayStyle.TodayJourneyView}>
                        <View style={TodayStyle.TodayJourneyViewCont}>
                            <View style={TodayStyle.TodayJourneyViewContLeft}>
                                <View style={TodayStyle.TodayJourneyViewContLeftRod}></View>
                            </View>
                            <View style={TodayStyle.TodayJourneyViewContRight}>
                                <View style={TodayStyle.TodaysJourneyViews}>
                                    <View style={TodayStyle.TodaysJourneyViewsTop}>
                                        <RoadRing trig={gratTexts}/>
                                        <Text style={TodayStyle.TodaysJourneyViewsTopText}>Prompt - Gratitude</Text>
                                    </View>
                                    <TouchableOpacity style={TodayStyle.TodaysJourneyViewsBase} onPress={()=>SetGratModal(true)}>
                                        <Image source={require('../../temps/lovehands.png')} style={TodayStyle.TodaysJourneyViewsBaseImg}/>
                                        <View style={TodayStyle.TodaysJourneyViewsBaseRipple}>
                                            <Text style={TodayStyle.TodaysJourneyViewsBaseRippleText}>{gratTexts}</Text>
                                        </View>
                                        <Image source={require('../../temps/chevronright.png')} style={TodayStyle.TodaysJourneyViewsBaseCheck}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={TodayStyle.TodaysJourneyViews}>
                                    <View style={TodayStyle.TodaysJourneyViewsTop}>
                                        <RoadRing trig={affirTexts}/>
                                        <Text style={TodayStyle.TodaysJourneyViewsTopText}>Prompt - Affirmation</Text>
                                    </View>
                                    <TouchableOpacity style={TodayStyle.TodaysJourneyViewsBase} onPress={()=>SetAffirModal(true)}>
                                        <Image source={require('../../temps/thumbs.png')} style={TodayStyle.TodaysJourneyViewsBaseImg}/>
                                        <View style={TodayStyle.TodaysJourneyViewsBaseRipple}>
                                            <Text style={TodayStyle.TodaysJourneyViewsBaseRippleText}>{affirTexts}</Text>
                                        </View>
                                        <Image source={require('../../temps/chevronright.png')} style={TodayStyle.TodaysJourneyViewsBaseCheck}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={TodayStyle.TodaysJourneyViews}>
                                    <View style={TodayStyle.TodaysJourneyViewsTop}>
                                        <RoadRingGoals/>
                                        <Text style={TodayStyle.TodaysJourneyViewsTopText}>Today’s Goals</Text>
                                    </View>
                                    <View style={TodayStyle.TodaysJourneyViewsBaseCol}>
                                        <View style={TodayStyle.TodaysJourneyViewsBaseCols}>
                                            <TextInput placeholder='Add a goal here...' style={TodayStyle.TodaysJourneyViewsBaseInput} placeholderTextColor={'#666666'} selectionColor={'#666666'} textContentType='none' autoComplete='off' onChangeText={SetGoal1}/>
                                            <ImageRadio index={radiostate1} onPress={()=>SetRadioState1(!radiostate1)}/>
                                        </View>
                                        <View style={TodayStyle.TodaysJourneyViewsBaseCols}>
                                            <TextInput placeholder='Add a goal here...' style={TodayStyle.TodaysJourneyViewsBaseInput} placeholderTextColor={'#666666'} selectionColor={'#666666'} textContentType='none' autoComplete='off' onChangeText={SetGoal2}/>
                                            <ImageRadio index={radiostate2} onPress={()=>SetRadioState2(!radiostate2)}/>
                                        </View>
                                        <View style={TodayStyle.TodaysJourneyViewsBaseCols}>
                                            <TextInput placeholder='Add a goal here...' style={TodayStyle.TodaysJourneyViewsBaseInput} placeholderTextColor={'#666666'} selectionColor={'#666666'} textContentType='none' autoComplete='off' onChangeText={SetGoal3}/>
                                            <ImageRadio index={radiostate3} onPress={()=>SetRadioState3(!radiostate3)}/>
                                        </View>
                                    </View>
                                </View>
                                <View style={TodayStyle.TodaysJourneyViews}>
                                    <View style={TodayStyle.TodaysJourneyViewsTop}>
                                        <RoadRingHabit trig={habittext}/>
                                        <Text style={TodayStyle.TodaysJourneyViewsTopText}>Habit Checklist</Text>
                                    </View>
                                    {
                                        habittext == "Click to add a Habit..." ?
                                        <>
                                            <TouchableOpacity style={TodayStyle.TodaysJourneyViewsBase} onPressOut={()=>navigation.navigate('Habit')}>
                                                <Image source={require('../../temps/hands.png')} style={TodayStyle.TodaysJourneyViewsBaseImg}/>
                                                <View style={TodayStyle.TodaysJourneyViewsBaseRipple}>
                                                    <Text style={TodayStyle.TodaysJourneyViewsBaseRippleText}>{habittext}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </>
                                        :
                                        <>
                                            <View style={TodayStyle.TodaysJourneyViewsBaseScroll}>
                                                <SwipeableItem renderUnderlayLeft={()=><SwipeButton/>} snapPointsLeft={[50]}>
                                                    <Pressable style={TodayStyle.TodaysJourneyViewsBases}>
                                                        <Image source={require('../../temps/hands.png')} style={TodayStyle.TodaysJourneyViewsBaseImg}/>
                                                        <View style={TodayStyle.TodaysJourneyViewsBaseRipple}>
                                                            <Text style={TodayStyle.TodaysJourneyViewsBaseRippleText}>{habittext}</Text>
                                                        </View>
                                                    </Pressable>
                                                    <TouchableOpacity style={TodayStyle.TodaysJourneyViewsBaseScrollView} onPress={UpdateActiveValue}>
                                                        <CircularProgress
                                                            value={activevalue}
                                                            radius={25}
                                                            maxValue={numbervalue}
                                                            initialValue={activevalue}
                                                            valueSuffix={'/'+numbervalue}
                                                            progressValueColor='#639B6D'
                                                            activeStrokeColor='#639B6D'
                                                            activeStrokeWidth={5}
                                                            inActiveStrokeWidth={5}
                                                            clockwise={false}
                                                        />
                                                    </TouchableOpacity>
                                                </SwipeableItem>
                                            </View>
                                        </>
                                    }
                                </View>
                                <View style={TodayStyle.TodaysJourneyViews}>
                                    {CheckComplete()}
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
        </>
    );
};
export default React.memo(TodayScreen); 