import React,{useEffect,memo,useState} from 'react';
import {Text,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import AppStyle, { TodayStyle } from './styles/stylesheet';
import today from './screens/today/today';
import onboarding from './screens/onboarding/onboarding';
import register from './screens/utilities/register';
import login from './screens/utilities/login';
import forgotpassword from './screens/utilities/forgotpassword';
import passwordreset from './screens/utilities/passwordreset';
import habit from './screens/today/habit';
import repeat from './screens/today/repeat';
import profile from './screens/profile/profile';
import settings from './screens/profile/settings';
import explore from './screens/explore/explore';
import onboardingTwo from './screens/onboarding/onboarding-two';
import premium from './screens/premium/premium';
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator(); 
const AppScreen = () => {
  const RootTab = memo(({navigation}) => {
    return(
    <>
        <Tab.Navigator initialRouteName="Today" barStyle={AppStyle.AppBar} activeColor='#639B6D' inactiveColor='#757C90'>
          <Tab.Screen name='Today' component={today} options={{
            tabBarLabel: <Text style={AppStyle.AppText}>Today</Text>,
            tabBarIcon: ({focused,color}) => {
              if(focused){
                return(<Image source={require('./temps/calendar-bar-selected.png')} style={AppStyle.AppIcon}/>)
              }else{
                return(<Image source={require('./temps/calendar-bar.png')} style={AppStyle.AppIcon}/>)
              }
            }
          }}/>
          <Tab.Screen name='Explore' component={explore} options={{
            tabBarLabel: <Text style={AppStyle.AppText}>Explore</Text>,
            tabBarIcon: ({focused,color}) => {
              if(focused){
                return(<Image source={require('./temps/search-selected.png')} style={AppStyle.AppIcon}/>)
              }else{
                return(<Image source={require('./temps/search.png')} style={AppStyle.AppIcon}/>)
              }
            }
          }}/>
          <Tab.Screen name='Profile' component={profile} options={{
            tabBarLabel: <Text style={AppStyle.AppText}>Profile</Text>,
            tabBarIcon: ({focused,color}) => {
              if(focused){
                return(<Image source={require('./temps/user-selected.png')} style={AppStyle.AppIcon}/>)
              }else{
                return(<Image source={require('./temps/user.png')} style={AppStyle.AppIcon}/>)
              }
            }
          }}/>
        </Tab.Navigator>
    </>
    );
  });
  return(
  <>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{
      animation: 'slide_from_right',
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="Root" component={RootTab} />
      <Stack.Screen name="Onboarding" component={onboarding} /> 
      <Stack.Screen name="OnboardingTwo" component={onboardingTwo} /> 
      <Stack.Screen name="Register" component={register} />
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="ForgotPassword" component={forgotpassword} />
      <Stack.Screen name="ResetPassword" component={passwordreset} />
      <Stack.Screen name="Habit" component={habit} />
      <Stack.Screen name="Repeat" component={repeat} />
      <Stack.Screen name="Settings" component={settings} />
      <Stack.Screen name="Premium" component={premium} />
    </Stack.Navigator>
  </NavigationContainer>
  </> 
  );
}; 
export default React.memo(AppScreen);   