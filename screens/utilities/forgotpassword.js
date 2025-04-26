import React,{useEffect,useCallback,useState} from 'react';
import {SafeAreaView,View,Text,TextInput,Image,KeyboardAvoidingView,ScrollView,Platform,Pressable} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Ripple from 'react-native-material-ripple';
import FontStyles from '../../styles/fonts';
import {UtilityStyle} from '../../styles/stylesheet';
const ForgotPasswordScreen = ({navigation}) => {
    const [email, SetEmail] = useState('');
    const [emailerror, SetEmailError] = useState(false);
    const [emptyerror, SetEmptyError] = useState(false);
    const [errordisplay, SetErrorDisplay] = useState('none');
    const [formdisabled, IsFormDisabled] = useState(false);
    const [timesTried, SetTimesTried] = useState(0);
    var EmailState = [UtilityStyle.UtilFormViewCol,UtilityStyle.UtilFormViewColTrue];
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
        }else if(emptyerror){
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
    const ValidateForm = () => {
        SetTimesTried(1);
        if(email.length){
            if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                SetEmailError(true);
                SetEmptyError(false);
                SetErrorDisplay('flex');
            }else{
                SetEmailError(false);
                SetEmptyError(false);
                SetErrorDisplay('none');
                navigation.navigate('ResetPassword');
            }
        }else{
            SetEmptyError(true);
            SetEmailError(false);
            SetErrorDisplay('flex');
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
        }
    }();
    if(FontStyles())
    return(
        <SafeAreaView style={UtilityStyle.UtilSafeViewSmall}> 
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                <ScrollView style={UtilityStyle.UtilAvoidView} showsVerticalScrollIndicator={false}>
                    <View style={UtilityStyle.UtilScrollViewCon}>
                        {ErrorToast()}
                        <View style={UtilityStyle.UtilViewCol}>
                            <Text style={UtilityStyle.UtilViewColCapText}>Forgot password</Text>
                        </View>
                        <View style={UtilityStyle.UtilViewCol}>
                            <Text style={UtilityStyle.UtilViewColChildMedText}>Don't worry it happens. Please enter the address associated with your account. </Text>
                        </View>
                        <View style={[UtilityStyle.UtilFormView,{marginVertical:moderateScale(80)}]}>
                            <View style={EmailState}>
                                <Image source={require('../../temps/mail-icon.png')} style={UtilityStyle.UtilFormViewColImg}/>
                                <TextInput placeholder='Email' selectionColor={'#757C90'} style={UtilityStyle.UtilFormViewColInput} placeholderTextColor="#757C90" onChangeText={SetEmail}/>
                                <CheckMailIcon/>
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
export default React.memo(ForgotPasswordScreen);