import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export const globalStyles = StyleSheet.create({
    // defualt Style
    screenContainer: {
        flex: 1,
        paddingHorizontal: 17,
        backgroundColor: '#fff',
        // paddingTop: 20
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    h2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: 18,
        fontWeight: "500"
    },
    h4: {
        fontSize: 18,
        // fontWeight: "500"
    },
    text: {
        fontSize: 16,
        // width: '80%'
    },
    avatar: {
        width: 85,
        height: 85,
    },
    avatarSmall: {
        width: 50,
        height: 50,
    },


    // Resuable Style
    shadowBox: {
        // shadowColor: 'black',
        // shadowOpacity: 0.05,
        // shadowOffset: { width: 0, height: 1 },
        // shadowRadius: 2,
        // elevation: 1,
        borderTopColor: '#eee',
        borderTopWidth: 1,
        // backgroundColor: '#F9FFFF',
        padding: 15,
        // gap: 10
    },

    scrollViewContainer: {
        rowGap: 20,
        paddingTop: 25
    },
    primaryBtn: {
        width: "100%",
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',


    },
    primaryBtnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }

});
