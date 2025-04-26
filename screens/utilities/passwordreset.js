import React,{useEffect,useCallback,useState} from 'react';
import {SafeAreaView,View,Text,TextInput,Image,KeyboardAvoidingView,ScrollView,Platform,Pressable} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Ripple from 'react-native-material-ripple';
import FontStyles from '../../styles/fonts';
import {UtilityStyle} from '../../styles/stylesheet';
const PasswordResetScreen = ({navigation}) => {
    const [password1, SetPassword1] = useState('');
    const [password2, SetPassword2] = useState('');
    const [formdisabled, IsFormDisabled] = useState(false);
    const [passworderror, SetPasswordError] = useState(false);
    const [emptyerror, SetEmptyError] = useState(false);
    const [errordisplay, SetErrorDisplay] = useState('none');
    const [show1, SetShow1] = useState(true);
    const [showText1, SetShowText1] = useState('');
    const [show2, SetShow2] = useState(true);
    const [showText2, SetShowText2] = useState('');
    const [timesTried, SetTimesTried] = useState(0); 
    var PasswordState1 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue],
    PasswordState2 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue];
    const UpdatePasswordState1 = (res) => {
        SetPassword1(res);
        if(res.length >0){
            SetShowText1('Show');
        }else{
            SetShow1(true);
            SetShowText1('');
        }
    };
    const SecurePassword1 = () => {
        if(password1.length >0){
            if(showText1 == 'Show'){
                SetShow1(false);
                SetShowText1('Hide');
            }else if(showText1 == 'Hide'){
                SetShow1(true);
                SetShowText1('Show');
            }
        }
    };
    const UpdatePasswordState2 = (res) => {
        SetPassword2(res);
        if(res.length >0){
            SetShowText2('Show');
        }else{
            SetShow2(true);
            SetShowText2('');
        }
    };
    const SecurePassword2 = () => {
        if(password2.length >0){
            if(showText2 == 'Show'){
                SetShow2(false);
                SetShowText2('Hide');
            }else if(showText2 == 'Hide'){
                SetShow2(true);
                SetShowText2('Show');
            }
        }
    };
    const ValidateForm = () => {
        SetTimesTried(1);
        if(password1.length && password2.length){
            if(password1 !== password2){
                SetPasswordError(true);
                SetEmptyError(false);
                SetErrorDisplay('flex');
            }else{
                SetPasswordError(false);
                SetEmptyError(false);
                SetErrorDisplay('none');
                navigation.navigate('Login'); 
            }
        }else{
            SetEmptyError(true);
            SetPasswordError(false);
            SetErrorDisplay('flex');
        } 
    };
    const ErrorToast = () => {
        if(passworderror){
            return(
                <>
                    <View style={[UtilityStyle.UtilErrorView,{display: errordisplay}]}>
                        <Text style={UtilityStyle.UtilErrorViewText}>Passwords do not match</Text>
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
        }else{
            return(<></>);
        }
    };
    !function(){
        if(timesTried == 1){
            if(!password1.length){
                PasswordState1 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColErr];
            }else{
                PasswordState1 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue];
            }
            if(!password2.length){
                PasswordState2 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColErr];
            }else{
                PasswordState2 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue];
            }
            if(password1 !== password2){
                PasswordState1 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColErr];
                PasswordState2 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColErr];
            }else{
                PasswordState1 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue];
                PasswordState2 = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue];
            }
        }
    }();
    if(FontStyles())
    return(
        <SafeAreaView style={UtilityStyle.UtilSafeViewSmall}> 
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                <ScrollView style={UtilityStyle.UtilAvoidView} showsHorizontalScrollIndicator={false}>
                    <View style={UtilityStyle.UtilScrollViewCon}>
                        {ErrorToast()}
                        <View style={UtilityStyle.UtilViewCol}>
                            <Text style={UtilityStyle.UtilViewColCapText}>Reset password</Text>
                        </View>
                        <View style={UtilityStyle.UtilViewCol}>
                            <Text style={UtilityStyle.UtilViewColChildMedText}>Enter a new 8 character new password.</Text>
                        </View>
                        <View style={[UtilityStyle.UtilFormView,{marginVertical:moderateScale(100)}]}>
                            <View style={PasswordState1}>
                                <Image source={require('../../temps/lock-icon.png')} style={UtilityStyle.UtilFormViewColImg}/>
                                <TextInput placeholder='New Password' selectionColor={'#757C90'} style={UtilityStyle.UtilFormViewColInput} placeholderTextColor="#757C90" secureTextEntry={show1} onChangeText={UpdatePasswordState1}/>
                                <Text style={UtilityStyle.UtilFormViewColInputText} onPress={SecurePassword1}>{showText1}</Text>
                            </View>
                            <View style={PasswordState2}>
                                <Image source={require('../../temps/lock-icon.png')} style={UtilityStyle.UtilFormViewColImg}/>
                                <TextInput placeholder='Confirm New Password' selectionColor={'#757C90'} style={UtilityStyle.UtilFormViewColInput} placeholderTextColor="#757C90" secureTextEntry={show2} onChangeText={UpdatePasswordState2}/>
                                <Text style={UtilityStyle.UtilFormViewColInputText} onPress={SecurePassword2}>{showText2}</Text>
                            </View>
                        </View>
                        <View style={UtilityStyle.UtilFormViewBase}>
                            <Ripple style={UtilityStyle.UtilFormViewBasePress} rippleColor='#fff' rippleOverflow={true} rippleSize={350} rippleOpacity={0.9} rippleDuration={500} onPress={ValidateForm} disabled={formdisabled}>
                                <Text style={UtilityStyle.UtilFormViewBasePressText}>Submit</Text>
                            </Ripple>
                            <View style={UtilityStyle.UtilFormViewBaseCon}>
                                <Text style={UtilityStyle.UtilFormViewBaseConTextSmall} onPress={()=>navigation.navigate('Login')}>Back To Log In</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
export default React.memo(PasswordResetScreen);
// 015674781941
// 5009975378165
// 5015674781941
// a@gmail.com