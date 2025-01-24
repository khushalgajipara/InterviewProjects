import { View, Text, Alert, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Images from '../../config/image'
import styles from './style';
import Component from '../../component';

type Props = {}

const Favourite = (props: Props) => {
  const favoriteEvents = useSelector((state: any) => state?.favourite?.favoriteEvents);
  const user  = useSelector((state: any) => state?.user?.user);

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
            item?.danceStyles.map((item:any) => {
              return(
              <Text style={styles.tag}>{item?.ds_name}</Text>

            )})}
          </View>
          <View style={styles.actionsContainer}>
          <TouchableOpacity>
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
    <View style={{flex:1}}>
       <Component.Header 
             title={user?.data?.user?.usr_fname}/>
      {favoriteEvents.length > 0 ?
       <FlatList
            data={favoriteEvents}
            renderItem={renderItem}/>
            :
            <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{textAlign:'center',fontSize:20,}}>No record found</Text>
            </View>
       }
    </View>
  )
}

export default Favourite