import {useFonts} from 'expo-font';
const FontStyles = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Regular' : require('../assets/fonts/Poppins-Regular.ttf')
    });
    return fontsLoaded;
}; 
export default FontStyles;