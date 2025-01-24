import { View, Text, TouchableOpacity, Image, FlatList, Alert, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { apiRequest } from '../../service';
import Config from '../../config';
import styles from './style';
import Images from '../../config/image'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/favourite';
import { loadUserData, saveUserData } from '../../utils';
import Component from '../../component';


type Props = {}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'; // Add this line to define HttpMethod type

const Event = (props: Props) => {
  const [eventList, seteventList] = useState<any[]>([])
  const [userData, setuserData] = useState({})
  const dispatch = useDispatch()
  const favoriteEvents = useSelector((state: any) => state?.favourite?.favoriteEvents);
  const user  = useSelector((state: any) => state?.user?.user);
  console.log("Pass -----",user?.data?.user?.usr_fname);
  
  useEffect(() => {
      const createUser = async () => {
        try {
          const eventList = await apiRequest<any>(Config.Constant.Api.EVENT_LIST.url, Config.Constant.Api.EVENT_LIST.type as HttpMethod);
          seteventList(eventList?.data?.events)
        } catch (error) {
          console.error('Error creating user:', error);
        }
      };
      createUser();
    }, []);

    const handleFavoriteToggle = async (event: any) => {
      try {
        dispatch(toggleFavorite(event));
        const updatedFavorites = favoriteEvents.some((fav: any) => fav.event_date_id === event.event_date_id)
          ? favoriteEvents.filter((fav: any) => fav.event_date_id !== event.event_date_id)
          : [...favoriteEvents, event];
  
        // Update local storage
        await saveUserData('favorites', JSON.stringify(updatedFavorites));
      } catch (error) {
        console.error('Error updating favorites:', error);
        Alert.alert('Error', 'Something went wrong while updating favorites.');
      }
    };
  

    const renderItem = ({item,index}:any) => {
      const isFavorite = favoriteEvents.some((fav: any) => fav.event_date_id === item.event_date_id);

      return(
        <View style={styles.cardContainer}>
        <Image
          source={{ uri:  item?.event_profile_img}} // Replace with your image URL
          style={styles.eventImage}
        />
  
        <View style={styles.detailsContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.eventTitle}>{item?.event_name}</Text>
            <TouchableOpacity style={{marginTop:-10}}>
              <Image source={Images.BACK} style={{width:20,height:20}}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingEnd:12}}>
          <Text style={styles.eventDates}>{`${item?.readable_from_date}`}</Text>
            <Text style={styles.eventLocation}>{`${item?.city}, ${item?.country}`}</Text>
          </View>
          <Text style={styles.eventPrice}>{`${item?.event_price_from} - ${item?.event_price_to}`}</Text>
  
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingEnd:7}}>
          <View style={styles.tagsContainer}>
            {item?.danceStyles.length > 0 && 
            item?.danceStyles.map((item:any,index:any) => {
              return(
              <Text key={index} style={styles.tag}>{item?.ds_name}</Text>

            )})}
          </View>
          <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={() => handleFavoriteToggle(item)}>
            <Image source={isFavorite ? Images.LIKE_FILL : Images.LIKE} style={{width:20,height:20,marginHorizontal:5}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.SHARE} style={{width:20,height:20,marginHorizontal:5}}/>
          </TouchableOpacity>
        </View>
          </View>
        </View>
      </View>
      )
    }

  return (
    <SafeAreaView style={{flex:1}}>
      <Component.Header 
       title={user?.data?.user?.usr_fname}/>
      <FlatList
      data={eventList}
      renderItem={renderItem}
      keyExtractor={(item,index) => index.toString()}
      />
    </SafeAreaView>
  )
}

export default Event