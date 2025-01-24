import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1
    },
    tab:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 4,
    },
    label:{ 
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        marginVertical:5
    },
    tabBar: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 6,
        ...Platform.select({
          ios: {
            shadowOffset: {width: 0, height: -4},
            shadowOpacity: 0.8,
            shadowRadius: 8,
          },
          android: {
            elevation: 1,
            shadowOffset: {width: 0, height: -4},
            shadowOpacity: 0.8,
            shadowRadius: 8,
          },
        }),
      },
})