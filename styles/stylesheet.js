import {StyleSheet,Dimensions} from 'react-native';
import {moderateScale,verticalScale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AppStyle = StyleSheet.create({
    AppBar: {
        backgroundColor: '#FFF',
        marginHorizontal: moderateScale(-20)
        // height: moderateScale(50),
    },
    AppText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(12),
    },
    AppIcon: {
        width: moderateScale(17),
        height: moderateScale(17),
        resizeMode: 'contain'
    },
});
const OnboardingStyle = StyleSheet.create({
    OnBoardSafeArea: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#fff'
    },
    OnBoardImgView: {
        width: '100%',
        height: moderateScale(150),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: moderateScale(30),
    },
    OnBoardImg: {
        width: moderateScale(80),
        height: moderateScale(80),
        resizeMode: 'contain',
    },
    OnBoardViewCol: {
        width: '100%',
        height: '85%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    OnBoardViewCols: {
        width: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    OnBoardViewColImg: {
        width: moderateScale(500),
        height: moderateScale(200),
        resizeMode: 'contain',
        marginBottom: moderateScale(70)
    },
    OnBoardViewColBigText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(20),
        color: '#29282A',
        marginBottom: moderateScale(10)
    },
    OnBoardViewColSmallText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(15),
        color: '#757C90',
    },
    OnBoardViewColBtns: {
        width: '100%',
        height: moderateScale(40),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(20)
    },
    OnBoardViewColBtnsView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/2,
        backgroundColor: '#DFDFDF',
        width: moderateScale(15),
        height: moderateScale(15),
        marginHorizontal: 10,
        marginBottom: moderateScale(50)
    },
    OnBoardViewColBtnsViewChild: {
        borderRadius: 100/2,
        backgroundColor: '#639B6D',
        width: moderateScale(8),
        height: moderateScale(8),
    },
    OnBoardViewBase: {
        width: '100%',
        height: moderateScale(100),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    OnBoardViewBases: {
        width: '100%',
        height: moderateScale(150),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    OnBoardViewBasePress: {
        width: '88%',
        height: moderateScale(50),
        backgroundColor: '#639B6D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    OnBoardViewBasePressWhite: {
        width: '88%',
        height: moderateScale(50),
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#639B6D',
        marginTop: moderateScale(15)
    },
    OnBoardViewBasePressWhiteText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#639B6D',
    },
    OnBoardViewBasePressText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#FFFFFF',
    },
});
const UtilityStyle = StyleSheet.create({
    UtilSafeView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingTop: moderateScale(50),
    },
    UtilSafeViewSmall: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingTop: moderateScale(100),
    },
    UtilAvoidView: {
        height: windowWidth,
        backgroundColor: '#FFFFFF',
    },
    UtilScrollView: {
        width: '100%',
        height: '100%'
    }, 
    UtilScrollViewCon: { 
        height: windowHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    UtilViewCol: {
        width: '100%',
        height: moderateScale(45),
        display: 'flex',
        flexDirection: 'column',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    UtilViewColChildText: {
        fontFamily: 'Poppins-Medium', 
        fontSize: moderateScale(14),
        color: '#666666',
    },
    UtilViewColChildMedText: {
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(13),
        color: '#757C90',
        textAlign: 'center'
    },
    UtilViewColAuth: {
        width: '100%',
        height: moderateScale(220),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    UtilViewColAuthItem: {
        width: '90%',
        height: moderateScale(50),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#EFF0F1',
        borderRadius: 10,
        marginVertical: 8
    },
    UtilViewColAuthItemIcon: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
        marginRight: 10,
    },
    UtilViewColAuthItemText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(14),
        color: '#29282A',
    },
    UtilViewColCapText: { 
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(22),
        color: '#29282A',
    },
    UtilFormView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: moderateScale(70),
    },
    UtilFormViewCol: {
        width: '90%',
        height: moderateScale(55),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 15,
        marginVertical: 10
    },
    UtilFormViewColTrue: {
        borderWidth: 1,
        borderColor: '#c9c9c9',
    },
    UtilFormViewColErr: {
        borderWidth: 1,
        borderColor: '#FF1010',
    },
    UtilFormViewColImg: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
        marginHorizontal: 5
    },
    UtilFormViewColInput: {
        flex: 1,
        height: '100%',
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(14),
        color: '#757C90',
        marginHorizontal: 5
    },
    UtilFormViewColInputText: {
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(12),
        color: '#757C90',
    },
    UtilFormViewBase: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    UtilFormViewBasePress: {
        width: '88%',
        height: moderateScale(50),
        backgroundColor: '#639B6D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    UtilFormViewBasePressText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#FFFFFF',
    },
    UtilFormViewBaseCon: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    UtilFormViewBaseConTextBig: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#757C90',
        marginHorizontal: 10
    },
    UtilFormViewBaseConTextSmall: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#3C8469',
        marginHorizontal: 10
    },
    UtilErrorView: {
        width: '90%',
        height: moderateScale(50),
        backgroundColor: '#FFEDED',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        marginTop: moderateScale(5),
    },
    UtilErrorViewText: {
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(13),
        color: '#FF1010',
    },
    UtilErrorViewPress: {
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    UtilErrorViewImg: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
    },
});
const HomeStyle = StyleSheet.create({
    HomeSafeArea : {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    HomeCalendarView: {
        width: '100%',
        backgroundColor: '#F4F5F5',
        paddingHorizontal: moderateScale(5)
    },
    HomeCalendarTextView: {
        width: '100%',
        height: moderateScale(60),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: moderateScale(15)
    },
    HomeCalendarTextBold: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(16),
        color: '#29282A',
        margin: 2
    },
    HomeCalendarTextRegular: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(11),
        color: '#757C90',
        margin: 2
    },
    HomeCalendarTextBaseBold: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#29282A',
        margin: 2
    },
    HomeCalendarTextBaseBoldCurrent: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#FFF',
        margin: 2 
    },
    HomeCalendarTextBaseRegular: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#757C90',
        margin: 2
    },
    HomeCalendarTab: {
        width: '100%',
        height: moderateScale(100),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    HomeCalendarTabRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    HomeCalendarTabRowPressable: {
        width: moderateScale(35),
        height: verticalScale(30),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 100/2
    },
    HomeCalendarTabRowPressableCurrent: {
        width: moderateScale(35),
        height: moderateScale(35),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#639B6D',
        borderRadius: 100/2
    },
    HomeScrollView: {
        width: '100%',
        marginTop: 10,
        marginBottom: verticalScale(40),
    },
    HomeScrollContentView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    HomeScrollViewDivider: {
        width: '100%',
        paddingHorizontal: moderateScale(20),
        paddingVertical: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    HomeScrollViewSubDivider: {
        width: '100%',
        paddingHorizontal: moderateScale(20),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    HomeScrollViewDividerText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(14),
        color: '#29282A',
        margin: 2
    },
    HomeTopScrollView: {
        width: '100%',
    },
    HomeTopContentScrollView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    HomeTopScrollViewInCurrent: {
        width: moderateScale(330),
        height: moderateScale(200),
        // width: 350,
        // height: 230,
        backgroundColor: '#DEEAE2',
        marginHorizontal: 5,
        borderRadius: 15
    },
    HomeTopScrollViewCurrent: {
        // width: 350,
        // height: 230,
        width: moderateScale(330),
        height: moderateScale(200),
        // backgroundColor: '#639B6D',
        marginHorizontal: 5,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: moderateScale(20),
        position: 'relative'
    },
    HomeTopScrollViewCurrentImage: {
        // width: 360,
        // height: 250,
        width: moderateScale(330),
        height: moderateScale(200),
        resizeMode: 'contain',
    },
    HomeTopScrollViewCurrentText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(18),
        color: '#FFF',
        margin: 2,
    },
    HomeTopScrollViewCurrentBase: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        marginTop: 70
    },
    HomeTopScrollViewCurrentBaseRemoved: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: 30
    },
    HomeTopScrollViewCurrentBaseImg: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 5
    },
    HomeTopScrollViewCurrentBaseText: {
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(13),
        color: '#FFF',
        margin: 2
    },
    HomeJourneyView: {
        width: '100%',
        marginTop: 30
    },
    HomeJourneyMainGrid: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    HomeJourneyMainGridLeft: {
        width: moderateScale(35),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    HomeJourneyMainGridLeftTube: {
        width: moderateScale(0.65),
        flex: 1,
        backgroundColor: '#757C90',
        marginVertical: 10,
    },
    HomeJourneyMainGridLeftCircle: {
        width: moderateScale(15),
        height: moderateScale(15),
        backgroundColor: '#fff',
        borderRadius: 100/2,
        borderWidth: 1,
        borderColor: '#757C90',
        position: 'absolute',
        top: 0,
        left: moderateScale(-25),
        // left: -30,
        zIndex: 20
    },
    HomeJourneyMainGridRight: {
        flex: 1,
    },
    HomeJourneyMainItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        marginBottom: 30
    },
    HomeJourneyMainItemText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(12),
        color: '#757C90',
        margin: 2
    },
    HomeJourneyMainItemFull: {
        width: '100%',
        height: moderateScale(70),
        backgroundColor: '#EFF0F1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 10
    },
    HomeJourneyMainItemHalf: {
        width: '100%',
        backgroundColor: '#EFF0F1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 10
    },
    HomeJourneyMainItemHalfList: {
        width: '100%',
        height: moderateScale(45),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginBottom: 5
    },
    HomeJourneyMainItemFullLeft: {
        width: '80%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    HomeJourneyMainItemFullImage: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        marginRight: 10,
    },
    HomeJourneyMainItemFullInput: {
        flex: 1,
        height: '100%',
        backgroundColor: 'transparent',
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(12),
        color: '#666666',
    },
    HomeJourneyMainItemFullIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    HomeJourneyMainItemFullCircle: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    HomeJourneyMainItemFullText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(12),
        color: '#666666',
        margin: 2
    },
});
const TodayStyle = StyleSheet.create({
    TodaySafeArea: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    TodayKeyView: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    TodayCalendarView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F4F5F5',
        paddingBottom: moderateScale(15)
    },
    TodayQuotesView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: moderateScale(20)
    },
    TodayJourneyView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: moderateScale(20),
        paddingHorizontal: moderateScale(10)
    },
    TodayScrollView: {
        width: '100%',
        height: '100%',
        flex: 1,
        marginBottom: moderateScale(30),
        paddingTop: moderateScale(15),
    },
    TodayCalendarTopContainer: {
        marginTop: moderateScale(8),
    },
    TodayCalendarTopView: {
        width: '100%',
        height: moderateScale(30),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: moderateScale(20),
    },
    TodayCalendarMidCont: {
        width: windowWidth,
        height: '100%',
    },
    TodayCalendarMidView: {
        width: '100%',
        height: moderateScale(170),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TodayCalendarBaseView: {
        width: '100%',
        height: moderateScale(40),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TodayCalendarTopViewText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(13),
        color: '#29282A',
    },
    TodayCalendarViewPress: {
        width: moderateScale(30),
        height: moderateScale(30),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/2,
        marginHorizontal: moderateScale(10),
    },
    TodayCalendarViewRipple: {
        width: moderateScale(30),
        height: moderateScale(30),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/2,
        backgroundColor: '#639B6D',
        marginHorizontal: moderateScale(10),
        marginBottom: moderateScale(15)
    },
    TodayCalendarViewRipples: {
        backgroundColor: '#639B6D',
    },
    TodayCalendarTopViewText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#757C90',
    },
    TodayCalendarViewText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(13),
        color: '#29282A',
    },
    TodayCalendarBaseViewText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(13),
        color: '#FFFFFF',
    },
    TodayCalendarTopText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#29282A',
    },
    TodayQuotesScroll: {
        height: moderateScale(220),
        paddingHorizontal: moderateScale(8)
    },
    TodayQuotesScrollCon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TodayQuotesScrollBarLeft: {
        width: moderateScale(15),
        height: '95%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#DEEAE2',
        position: 'absolute',
        left: 0,
    },
    TodayQuotesScrollBarRight: {
        width: moderateScale(15),
        height: '95%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: '#DEEAE2',
        position: 'absolute',
        right: 0,
    },
    TodayQuotesScrollCon: { 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    TodayQuotesScrollCont: {
        width: moderateScale(350),
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TodayQuotesScrollOpacity: {
        width: '95%',
        height: '95%',
        backgroundColor: '#639B6D',
        borderRadius: 15,
        flexDirection: 'column',
        display: 'flex',
    },
    TodayQuotesScrollItem: {
        width: '100%',
        height: '100%',
        backgroundColor: '#639B6D',
        borderRadius: 15,
        flexDirection: 'column',
        display: 'flex',
        paddingVertical: moderateScale(30),
        paddingHorizontal: moderateScale(25)
    },
    TodayQuotesScrollItemTop: {
        width: '100%',
        height: moderateScale(100),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TodayQuotesScrollItemBase: {
        width: '100%',
        height: moderateScale(60),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    TodayQuotesScrollItemBaseImg: {
        width: moderateScale(40),
        height: moderateScale(40),
        resizeMode: 'contain',
        marginRight: 10,
    },
    TodayQuotesScrollItemTopText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(19),
        color: '#FFFFFF',
        textAlign: 'left'
    },
    TodayQuotesScrollItemBaseText: {
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(14),
        color: '#FFFFFF',
    },
    TodayJourneyViewCont: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    TodayJourneyViewContLeft: {
        width: moderateScale(35),
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TodayJourneyViewContLeftRod: {
        marginVertical: moderateScale(35),
        width: moderateScale(0.55),
        flex: 1,
        backgroundColor: '#757C90'
    },
    TodayJourneyViewContRight: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    TodaysJourneyViews: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginVertical: moderateScale(10),
        paddingHorizontal: moderateScale(10)
    },
    TodaysJourneyViewsBall: {
        width: moderateScale(15),
        height: moderateScale(15),
        backgroundColor: '#fff',
        borderRadius: 100/2,
        borderWidth: 1,
        borderColor: '#757C90',
        position: 'absolute',
        left: moderateScale(-35),
        zIndex: 20
    },
    TodaysJourneyViewsTop: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: moderateScale(10),
    },
    TodaysJourneyViewsTopText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#757C90',
    },
    TodaysJourneyViewsTopTextComplete: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#639B6D',
    },
    TodaysJourneyViewsBase: {
        width: '100%',
        height: moderateScale(70),
        borderRadius: 10,
        backgroundColor: '#EFF0F1',
        flexDirection: 'row',
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: moderateScale(15)
    },
    TodaysJourneyViewsBases: {
        width: (80.5/100)*windowWidth,
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#EFF0F1',
        flexDirection: 'row',
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: moderateScale(15)
    },
    TodaysJourneyViewsBaseScroll: {
        width: '100%',
        height: moderateScale(70),
        borderRadius: 10,
        backgroundColor: '#377690',
        display: 'flex',
        flexDirection: 'row',
    }, 
    TodaysJourneyViewsBaseScrollView: {
        width: moderateScale(70),
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
    }, 
    TodaysJourneyViewsBaseSwipe: {
        width: moderateScale(50),
        height: moderateScale(70),
        backgroundColor: '#377690',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    TodaysJourneyViewsBaseSwipeText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#FFF',
    },
    TodaysJourneyViewsBaseCol: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#EFF0F1',
        flexDirection: 'column',
        display: 'flex',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(5),
    },
    TodaysJourneyViewsBaseCols: {
        width: '100%',
        height: moderateScale(50),
        flexDirection: 'row',
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: moderateScale(15),
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
    },

    TodaysJourneyViewsBaseImg: {
        width: moderateScale(50),
        height: moderateScale(50),
        resizeMode: 'contain',
        marginRight: 10
    },
    TodaysJourneyViewsBaseRipple: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    TodaysJourneyViewsBaseRippleText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#666666',
    },
    TodaysJourneyViewsBaseInput: {
        flex: 1,
        height: '100%',
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#21263E',
    },
    TodaysJourneyViewsBasePress: {
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        marginRight: moderateScale(15),
        paddingHorizontal: moderateScale(5),
    },
    TodaysJourneyViewsBaseCheck: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
    },
    TodaysGratModal: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    TodaysQuoteModal: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    TodaysGratModalView: {
        backgroundColor: '#fff',
        width: moderateScale(300),
        borderRadius: 20,
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(20)
    },
    TodaysQuoteModalView: {
        backgroundColor: '#fff',
        width: '100%',
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(20),
        position: 'relative'
    },
    TodaysGratModalCancView: {
        width: '100%',
        height: moderateScale(30),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    TodaysGratModalCancViewImg: {
        width: moderateScale(25),
        height: moderateScale(25),
        resizeMode: 'contain'
    },
    TodaysGratModalLenView: {
        width: '100%',
        height: moderateScale(25),
        marginBottom: moderateScale(5),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    TodaysGratModalLenViewText: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#29282A',
    },
    TodaysGratModalInputView: {
        width: '100%',
        height: moderateScale(200),
        backgroundColor: '#EFF0F1',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        padding: moderateScale(20),
        marginBottom: moderateScale(10),
    },
    TodaysGratModalInput: {
        flex: 1,
        height: '100%',
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#757C90',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlignVertical: 'top'
    },
    TodaysGratModalInputCountView: {
        width: '100%',
        height: moderateScale(20),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    TodaysGratModalInputCount: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(11),
        color: '#757C90',
    },

    TodaysGratModalSuggestionsView: {
        width: '100%',
        height: moderateScale(45),
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    TodaysGratModalSuggestionsRipple: {
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(10),
        marginHorizontal: moderateScale(2),
        backgroundColor: '#EFF0F1',
        borderRadius: 100/2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TodaysGratModalSuggestionsText: {
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(11),
        color: '#757C90',
    },
    TodaysGratModalButtonView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(20)
    },
    TodaysGratModalButtonRipple: {
        width: '100%',
        height: moderateScale(40),
        backgroundColor: '#639B6D',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TodaysGratModalButtonText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(14),
        color: '#FFFFFF',
    },
    TodaysQuoteTopView: {
        width: '100%',
        height: moderateScale(50),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    TodaysQuoteTopViewText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#29282A',
    },
    TodaysQuoteTopViewPress: {
        position: 'absolute',
        right: 0,
    },
    TodaysQuoteTopViewImage: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
    },
    TodaysQuoteMidView: {
        width: '100%',
        flex: 1,
        marginBottom: moderateScale(50),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TodaysQuoteLayoutItem: {
        width: '100%',
        height: moderateScale(250),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    TodaysQuoteLayoutItemTop: {
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(20)
    },
    TodaysQuoteLayoutItemTopText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(18),
        color: '#FFFFFF',
    },
    TodaysQuoteLayoutItemBase: {
        width: '100%',
        height: moderateScale(80),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(15)
    },
    TodaysQuoteLayoutItemBaseLeft: {
        width: '70%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    TodaysQuoteLayoutItemBaseLeftBig: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(14),
        color: '#EFF0F1',
    },
    TodaysQuoteLayoutItemBaseLeftSmall: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(11),
        color: '#EFF0F1',
    },
    TodaysQuoteLayoutItemBaseRight: {
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    TodaysQuoteLayoutItemBaseRightImg: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
        marginRight: moderateScale(5)
    },
    TodaysQuoteLayoutItemBaseRightText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(8),
        color: '#FFFFFF',
    },
    TodaysQuoteModalButtonView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(30),
        position: 'absolute',
        bottom: 0,
    },
    TodaysQuoteModalButtonRipple: {
        width: '100%',
        height: moderateScale(45),
        backgroundColor: '#639B6D',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TodaysQuoteModalButtonImage: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
        marginRight: 10
    },
    TodaysQuoteModalButtonText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(14),
        color: '#FFFFFF',
    },
});
const HabitStyle = StyleSheet.create({
    HabitSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    HabitTopView: {
        width: '100%',
        height: moderateScale(80),
        backgroundColor: '#EFF0F1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row'
    },
    HabitTopViewIconPress: {
        position: 'absolute',
        left: 0,
        marginLeft: moderateScale(30)
    },
    HabitTopViewIcon: {
        width: moderateScale(35),
        height: moderateScale(35),
        resizeMode: 'contain',
    },
    HabitTopViewText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#29282A',
    },
    HabitMidView: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(20),
        position: 'relative'
    },
    HabitInpView: {
        width: '100%',
        height: moderateScale(70),
        backgroundColor: '#EFF0F1',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(15),
        marginBottom: moderateScale(15)
    },
    HabitInpImg: {
        width: moderateScale(45),
        height: moderateScale(45),
        resizeMode: 'contain',
        marginRight: moderateScale(10)
    },
    HabitInpCon: {
        flex: 1,
        height: '100%',
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#29282A',
    },
    HabitListView: {
        width: '100%',
        height: moderateScale(70),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingHorizontal: moderateScale(20),
        marginVertical: moderateScale(10),
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9'
    },
    HabitListViewSett: {
        width: '100%',
        height: moderateScale(55),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingHorizontal: moderateScale(20),
        marginVertical: moderateScale(10),
        borderBottomWidth: 0.5,
        borderBottomColor: '#D9D9D9'
    },
    HabitSmallListView: {
        width: '100%',
        height: moderateScale(45),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingHorizontal: moderateScale(20),
        marginVertical: moderateScale(10),
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9'
    },
    HabitListViewImage: {
        width: moderateScale(40),
        height: moderateScale(40),
        resizeMode: 'contain',
        marginRight: moderateScale(15)
    },
    HabitListViewImageSett: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
        marginRight: moderateScale(15)
    },
    HabitListViewCont: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    HabitListViewContTextSmall: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(11),
        color: '#757C90',
        margin: 2
    },
    HabitListViewContTextBig: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#29282A',
        margin: 2
    },
    HabitListViewIcon: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        marginRight: moderateScale(20)
    },
    HabitListViewCheck: {
        width: moderateScale(20),
        height: moderateScale(20),
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        marginRight: moderateScale(20)
    },
    HabitListBaseViewCont: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    HabitListBaseView: {
        width: '100%',
        height: moderateScale(80),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    HabitListBaseViewRippleWhite: {
        width: '45%',
        height: moderateScale(45),
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#639B6D',
        borderWidth: 1,
        borderRadius: 8
    },
    HabitListBaseViewRippleTextWhite: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(13),
        color: '#639B6D',
    },
    HabitListBaseViewRippleGreen: {
        width: '45%',
        height: moderateScale(45),
        backgroundColor: '#639B6D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#639B6D',
        borderWidth: 1,
        borderRadius: 8
    },
    HabitListBaseViewRippleTextGreen: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(13),
        color: '#FFFFFF',
    },
    HabitCalendarModal: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    HabitCalendarModalView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(20),
    },
    HabitCalendarView: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: moderateScale(380),
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(20),
        transform: [{scale:0.9}],
        display: 'flex',
        justifyContent: 'center',
    },
    HabitTimeView: {
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(20),
        transform: [{scale:1}],
        position: 'absolute',
        bottom: 0,
    },
    HabitTimeViewPicker: {
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    HabitTimeButtonView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(10)
    },
    HabitCalendarButtonView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: moderateScale(30)
    },
    HabitCalendarButtonRipple: {
        width: '90%',
        height: moderateScale(40),
        backgroundColor: '#639B6D',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    HabitCalendarButtonText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(14),
        color: '#FFFFFF',
    }
});
const ProfileStyle = StyleSheet.create({
    ProfileSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    ProfileHeaderView: {
        width: '100%',
        height: moderateScale(80),
        backgroundColor: '#EFF0F1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row'
    },
    ProfileScrollView: {
        width: '100%',
        height: '100%',
        marginBottom: moderateScale(50)
    },
    ProfileHeaderViewIconPress: {
        position: 'absolute',
        right: 0,
        marginRight: moderateScale(30)
    },
    ProfileHeaderViewIcon: {
        width: moderateScale(35),
        height: moderateScale(35),
        resizeMode: 'contain',
    },
    ProfileHeaderViewText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#29282A',
    },
    ProfileContOverBar: {
        width: '100%',
        height: moderateScale(170),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(5),
        borderRadius: 10,
    },
    ProfileContOverBarHr: {
        width: '100%',
        height: moderateScale(10),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProfileContOverBarHrItem: {
        width: '100%',
        height: '80%',
        borderBottomColor: '#757C90',
        borderBottomWidth: 0.3
    },
    ProfileContOverView: {
        backgroundColor: '#F3FFFA',
        width: '90%',
        height: '100%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingVertical: moderateScale(10)
    },
    ProfileContOverViewTop: {
        width: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ProfileContOverViewTopProp: {
        width: moderateScale(90),
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    ProfileContOverViewTopPropImg: {
        width: moderateScale(80),
        height: moderateScale(80),
        resizeMode: 'contain'
    },
    ProfileContOverViewTopPropIconPress: {
        position: 'absolute',
        top: 0,
        right: 0,
        marginTop: moderateScale(25)
    },
    ProfileContOverViewTopPropIcon: {
        width: moderateScale(25),
        height: moderateScale(25),
        resizeMode: 'contain',
    },
    ProfileContOverViewBase: {
        width: '100%',
        height: moderateScale(40),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    ProfileContOverViewBaseText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#29282A',
        marginRight: 5
    },
    ProfileContOverViewBaseImg: {
        width: moderateScale(25),
        height: moderateScale(25),
        resizeMode: 'contain'
    },
    ProfileStreakView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(20),
    },
    ProfileStreakViewRowMid: {
        width: '100%',
        height: moderateScale(60),
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ProfileStreakViewRow: {
        width: '100%',
        height: moderateScale(30),
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ProfileStreakViewRowTextBig: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(15),
        color: '#29282A',
    },
    ProfileStreakViewRowTextSmall: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(11),
        color: '#757C90',
    },
    ProfileStreakViewRowTextSmallGreen: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(11),
        color: '#639B6D',
    },
    ProfileStreakViewRowSmall: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ProfileStreakViewRowImg: {
        width: moderateScale(15),
        height: moderateScale(15),
        resizeMode: 'contain',
        marginRight: 8
    },
    ProfileStreakViewCent: {
        width: '100%',
        height: moderateScale(12),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(15)
    },
    ProfileStreakViewCentLong: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EFF0F1',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    ProfileStreakViewCentShort: {
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#639B6D'
    }
});
const ExploreStyle =  StyleSheet.create({
    ExploreSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    ExploreHeaderView: {
        width: '100%',
        height: moderateScale(80),
        backgroundColor: '#EFF0F1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row'
    },
    ExploreScrollView: {
        width: '100%',
        height: '100%',
        marginBottom: moderateScale(50),
    },
    ExploreHeaderViewIconPress: {
        position: 'absolute',
        right: 0,
        marginRight: moderateScale(30)
    },
    ExploreHeaderViewIcon: {
        width: moderateScale(35),
        height: moderateScale(35),
        resizeMode: 'contain',
    },
    ExploreHeaderViewText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#29282A',
    },
    ExploreHorizontalView: {
        width: '100%',
        height: moderateScale(120),
        paddingHorizontal: moderateScale(10)
    },
    ExploreHorizontalViewCont: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ExploreHorizontalViewImg: {
        width: moderateScale(180),
        height: '100%',
        resizeMode: 'contain',
        marginHorizontal: moderateScale(5)
    },
    ExploreCapTextView: {
        width: '100%',
        height: moderateScale(30),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: moderateScale(20),
        marginTop: moderateScale(30)
    },
    ExploreCapText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#29282A',
    },
});
const PremiumStyle = StyleSheet.create({
    PremiumSafeArea: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    PremiumTopView: {
        width: '100%',
        height: moderateScale(80),
        backgroundColor: '#EFF0F1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row'
    },
    PremiumTopViewIconPress: {
        position: 'absolute',
        left: 0,
        marginLeft: moderateScale(30)
    },
    PremiumTopViewIcon: {
        width: moderateScale(35),
        height: moderateScale(35),
        resizeMode: 'contain',
    },
    PremiumTopViewText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#29282A',
    },
    PremiumMidView: {
        width: '100%',
        height: '100%',
        flex: 1,
        paddingHorizontal: moderateScale(10)
    },
    PremiumMidViewTopCont: {
        width: '100%',
        height: moderateScale(80),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: moderateScale(30),
        marginTop: moderateScale(50)
    },
    PremiumMidViewTopContBig: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(20),
        color: '#639B6D'
    },
    PremiumMidViewTopContSmall: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(14),
        color: '#3F3D56'
    },
    PremiumBaseView: {
        width: '100%',
        height: moderateScale(200),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: moderateScale(50)
    },
    PremiumBaseViewCol: {
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PremiumBaseViewColTextBig: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#29282A',
        margin: moderateScale(2)
    },
    PremiumBaseViewColTextSmall: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#757C90',
        margin: moderateScale(2)
    },
    PremiumBasePress: {
        width: '88%',
        height: moderateScale(50),
        backgroundColor: '#639B6D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    PremiumBasePressText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: moderateScale(15),
        color: '#FFFFFF',
    },
    PremiumListView: {
        width: '100%',
        height: moderateScale(70),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingHorizontal: moderateScale(20),
        marginVertical: moderateScale(10),
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9'
    },
    PremiumListViewImage: {
        width: moderateScale(40),
        height: moderateScale(40),
        resizeMode: 'contain',
        marginRight: moderateScale(15)
    },
    PremiumListViewCont: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    PremiumListViewContTextSmall: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(11),
        color: '#21263E',
        margin: 2
    },
    PremiumListViewContTextBig: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(13),
        color: '#29282A',
        margin: 2
    },
});
export default AppStyle;
export {HomeStyle,OnboardingStyle,UtilityStyle,TodayStyle,HabitStyle,ProfileStyle,ExploreStyle,PremiumStyle};