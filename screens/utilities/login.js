import React,{useEffect,useCallback,useState} from 'react';
import {SafeAreaView,View,Text,TextInput,Image,KeyboardAvoidingView,ScrollView,Platform,Pressable} from 'react-native';
import {initializeApp} from 'firebase/app';
import {getDatabase,ref,onValue,set,push} from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ripple from 'react-native-material-ripple';
import Statusbar from '../../statusbar';
import FontStyles from '../../styles/fonts';
import {UtilityStyle} from '../../styles/stylesheet';
const LoginScreen = ({navigation}) => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [emailerror, SetEmailError] = useState(false);
    const [emptyerror, SetEmptyError] = useState(false);
    const [usererror, SetUserError] = useState(false);
    const [credentialerror, SetCredentialError] = useState(false);
    const [errordisplay, SetErrorDisplay] = useState('none');
    const [show, SetShow] = useState(true);
    const [showText, SetShowText] = useState('');
    const [formdisabled, IsFormDisabled] = useState(false);
    const [timesTried, SetTimesTried] = useState(0);
    var EmailState = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue],
    PasswordState = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue];
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
    const UpdatePasswordState = (res) => {
        SetPassword(res);
        if(res.length >0){
            SetShowText('Show');
        }else{
            SetShow(true);
            SetShowText('');
        }
    };
    const SecurePassword = () => {
        if(password.length >0){
            if(showText == 'Show'){
                SetShow(false);
                SetShowText('Hide');
            }else if(showText == 'Hide'){
                SetShow(true);
                SetShowText('Show');
            }
        }
    }; 
    const ErrorToast = () => {
        if(emailerror){
            return(
                <>
                    <View style={[UtilityStyle.UtilErrorView,{display: errordisplay}]}>
                        <Text style={UtilityStyle.UtilErrorViewText}>Plese enter a valid Email Address</Text>
                        <Pressable style={UtilityStyle.UtilErrorViewPress} onPress={()=>SetErrorDisplay('none')}>
                            <Image source={require('../../temps/close-grey-icon.png')} style={UtilityStyle.UtilErrorViewImg}/>
                        </Pressable>
                    </View>
                </>
            );
        }else if(emptyerror) {
            return(
                <>
                    <View style={[UtilityStyle.UtilErrorView,{display: errordisplay}]}>
                        <Text style={UtilityStyle.UtilErrorViewText}>Please fill in the boxes below</Text>
                        <Pressable style={UtilityStyle.UtilErrorViewPress} onPress={()=>SetErrorDisplay('none')}>
                            <Image source={require('../../temps/close-grey-icon.png')} style={UtilityStyle.UtilErrorViewImg}/>
                        </Pressable>
                    </View>
                </>
            );
        }else if(usererror){
            return(
                <>
                    <View style={[UtilityStyle.UtilErrorView,{display: errordisplay}]}>
                        <Text style={UtilityStyle.UtilErrorViewText}>This account does not exist</Text>
                        <Pressable style={UtilityStyle.UtilErrorViewPress} onPress={()=>SetErrorDisplay('none')}>
                            <Image source={require('../../temps/close-grey-icon.png')} style={UtilityStyle.UtilErrorViewImg}/>
                        </Pressable>
                    </View>
                </>
            );
        }else if(credentialerror){
            return(
                <>
                    <View style={[UtilityStyle.UtilErrorView,{display: errordisplay}]}>
                        <Text style={UtilityStyle.UtilErrorViewText}>The credentials don't match</Text>
                        <Pressable style={UtilityStyle.UtilErrorViewPress} onPress={()=>SetErrorDisplay('none')}>
                            <Image source={require('../../temps/close-grey-icon.png')} style={UtilityStyle.UtilErrorViewImg}/>
                        </Pressable>
                    </View>
                </>
            );
        }
        else{
            return(<></>);
        }
    };
    const ValidateForm = () => {
        SetTimesTried(1);
        if(password.length && email.length){
            if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                SetEmailError(true);
                SetEmptyError(false);
                SetErrorDisplay('flex');
            }else{
                SetEmailError(false);
                SetEmptyError(false);
                SetErrorDisplay('none');
                LogUser();
            }
        }else{
            SetEmptyError(true);
            SetEmailError(false);
            SetErrorDisplay('flex');
        } 
    };
    const LogUser = () => {
        const nickname = email.replace(/@+[a-z]+.+[a-z]/gi, "");
        const reference = ref(getDatabase(), 'users-id/' + nickname);
        SetUserError(false);
        SetCredentialError(false);
        SetErrorDisplay('none');
        onValue(reference, (snapshot) => {
            const response = snapshot.val();
            if(response === null){
                SetErrorDisplay('flex');
                SetUserError(true);
            }else if(response.Password !== password){
                SetErrorDisplay('flex');
                SetCredentialError(true);
            }else{
                StoreId(response);
            }
        },{
            onlyOnce: true,
        });
    };
    const StoreId = async (value) => {
        try{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@Nspire__Id', jsonValue);
            navigation.navigate('Root');
        }catch (e) {
            return false;
        } 
    };
    const CheckIcon = (res) => {
        var resname = res.reference;
        if(resname.length){
            return(
                <Image source={require('../../temps/greencheck-icon.png')} style={UtilityStyle.UtilFormViewColImg}/>
            );
        }else{
            return(<></>);
        }
    };
    const CheckMailIcon = () => {
        if(email.length && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            return(
                <Image source={require('../../temps/greencheck-icon.png')} style={UtilityStyle.UtilFormViewColImg}/>
            );
        }else{
            return(<></>);
        }
    };
    !function CheckEmpty(){
        if(timesTried == 1){
            if(!email.length || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                EmailState = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColErr];
            }else{
                EmailState = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue];
            }
            if(!password.length){
                PasswordState = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColErr];
            }else{
                PasswordState = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue];
            }
        }
    }();
    if(FontStyles()) 
    return(
        <>
        <Statusbar backgroundColor='#FFFFFF' barStyle='dark-content'/>
        <SafeAreaView style={UtilityStyle.UtilSafeView}> 
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                <ScrollView style={UtilityStyle.UtilAvoidView} showsVerticalScrollIndicator={false}>
                    <View style={UtilityStyle.UtilScrollViewCon}>
                        {ErrorToast()}
                        <View style={UtilityStyle.UtilViewCol}>
                            <Text style={UtilityStyle.UtilViewColCapText}>Welcome Back</Text>
                        </View>
                        <View style={UtilityStyle.UtilViewCol}> 
                            <Text style={UtilityStyle.UtilViewColChildMedText}>Log in to your account</Text>
                        </View>
                        <View style={UtilityStyle.UtilFormView}>
                            <View style={EmailState}>
                                <Image source={require('../../temps/mail-icon.png')} style={UtilityStyle.UtilFormViewColImg}/>
                                <TextInput placeholder='Email' selectionColor={'#757C90'} style={UtilityStyle.UtilFormViewColInput} placeholderTextColor="#757C90" onChangeText={SetEmail}/>
                                <CheckMailIcon/>
                            </View>
                            <View style={PasswordState}>
                                <Image source={require('../../temps/lock-icon.png')} style={UtilityStyle.UtilFormViewColImg}/>
                                <TextInput placeholder='Password' selectionColor={'#757C90'} style={UtilityStyle.UtilFormViewColInput} placeholderTextColor="#757C90" textContentType="password" secureTextEntry={show} onChangeText={UpdatePasswordState}/>
                                <Text style={UtilityStyle.UtilFormViewColInputText} onPress={SecurePassword}>{showText}</Text>
                            </View>
                        </View>
                        <View style={UtilityStyle.UtilViewCol}>
                            <Text style={UtilityStyle.UtilViewColChildMedText} onPress={()=>navigation.navigate('ForgotPassword')}>Forgot Password</Text>
                        </View>
                        <View style={UtilityStyle.UtilViewCol}>
                            <Text style={UtilityStyle.UtilViewColChildText}>OR</Text>
                        </View>
                        <View style={UtilityStyle.UtilFormViewBase}>
                            <Ripple style={UtilityStyle.UtilFormViewBasePress} rippleColor='#fff' rippleOverflow={true} rippleSize={350} rippleOpacity={0.9} rippleDuration={500} onPress={ValidateForm} disabled={formdisabled}>
                                <Text style={UtilityStyle.UtilFormViewBasePressText}>Proceed</Text>
                            </Ripple>
                            <View style={UtilityStyle.UtilFormViewBaseCon}>
                                <Text style={UtilityStyle.UtilFormViewBaseConTextBig}>New here?</Text>
                                <Text style={UtilityStyle.UtilFormViewBaseConTextSmall} onPress={()=>navigation.navigate('Register')}>Create an account</Text>
                            </View>
                        </View>
                        <View style={UtilityStyle.UtilViewColAuth}>
                            <Ripple style={UtilityStyle.UtilViewColAuthItem} rippleColor='lightgrey' rippleOverflow={false} rippleSize={350} rippleOpacity={0.9} rippleDuration={500}>
                                <Image source={require('../../temps/apple-icon.png')} style={UtilityStyle.UtilViewColAuthItemIcon}/>
                                <Text style={UtilityStyle.UtilViewColAuthItemText}>Sign in with Apple</Text>
                            </Ripple>
                            <Ripple style={UtilityStyle.UtilViewColAuthItem} rippleColor='lightgrey' rippleOverflow={false} rippleSize={350} rippleOpacity={0.9} rippleDuration={500}>
                                <Image source={require('../../temps/facebook-icon.png')} style={UtilityStyle.UtilViewColAuthItemIcon}/>
                                <Text style={UtilityStyle.UtilViewColAuthItemText}>Sign in with Facebook</Text>
                            </Ripple>
                            <Ripple style={UtilityStyle.UtilViewColAuthItem} rippleColor='lightgrey' rippleOverflow={false} rippleSize={350} rippleOpacity={0.9} rippleDuration={500}>
                                <Image source={require('../../temps/google-icon.png')} style={UtilityStyle.UtilViewColAuthItemIcon}/>
                                <Text style={UtilityStyle.UtilViewColAuthItemText}>Sign in with Google</Text>
                            </Ripple>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
        </>
    ); 
};
export default React.memo(LoginScreen);