import { StyleSheet } from "react-native";

export default StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        alignItems: 'center',
        paddingBottom:10
      },
      eventImage: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginStart:10
      },
      detailsContainer: {
        flex: 1,
        marginLeft: 10,
      },
      titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        flex: 1,
        marginRight: 5,
        marginTop:10,
      },
      eventLocation: {
        fontSize: 12,
        color: '#888',
      },
      eventDates: {
        fontSize: 12,
        color: 'green',
        marginTop: 5,
      },
      eventPrice: {
        fontSize: 12,
        color: '#555',
      },
      tagsContainer: {
        flexDirection: 'row',
        marginTop: 5,
      },
      tag: {
        fontSize: 12,
        backgroundColor: '#f0f0f0',
        color: '#555',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
        marginRight: 5,
      },
      actionsContainer: {
       flexDirection: 'row',    
        alignItems: 'center',
        marginLeft: 10,
      },
})