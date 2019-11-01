import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8740ad',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homelogo: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: Platform.OS === "ios" ? 27 : 30,
        lineHeight: 30,
        textAlign: 'center',
        color: "white",
        width: 400,
    },
    settingsContainer: {
        flex: 1,
        backgroundColor: '#8740ad',
        alignItems: 'center',
    },
    settings: {
        position: 'absolute',
        color: "white",
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        marginTop: 50
    },
    label: {
        fontWeight: 'bold',
        fontSize: Platform.OS === "ios" ? 30 : 35,
        color: 'white',
        textAlign: 'center',
        marginTop: 125
    },
    volume: {
        fontSize: Platform.OS === "ios" ? 25 : 30,
        marginBottom: 25,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Montserrat-Light'
    },
    slider: {
        width: Platform.OS === "ios" ? 300 : 350, 
        height: 50,    
        borderRadius: 0
    },
    button: {
        marginTop: Platform.OS === "ios" ? 160 : 170,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'lightgrey',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 2,
        borderRadius: 4,
        elevation: Platform.OS === "ios" ? 10 : 25
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
