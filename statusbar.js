import React from 'react';
import { Platform, StyleSheet, View, StatusBar} from 'react-native';
const Statusbar = (prop) => {
    const styles = StyleSheet.create({
        StatusBar: {
            height: 50,
            backgroundColor: prop.backgroundColor
        },
    });
    if(Platform.OS == "android"){
        return (
            <StatusBar barStyle={prop.barStyle} animated={true} backgroundColor={prop.backgroundColor}/>
        );
    }else{
        return (
            <View style={styles.StatusBar}>
                <StatusBar translucent barStyle={prop.barStyle} animated={true}/>
            </View>
        );
    }
};
export default Statusbar;