import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Images from '../../config/image'
import styles from './style'
import { apiRequest } from '../../service'
import Config from '../../config'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'; // Add this line to define HttpMethod type
 
type Props = {}

const Search = (props: Props) => {


  useEffect(() => {
    // Example 1: GET request with FormData


    // Example 2: POST request with JSON payload
    const createUser = async () => {
      const userData = { email: 'testpracticaluser001@mailinator.com', password: 'Test@123' };

      try {
        const newUser = await apiRequest<any>(Config.Constant.Api.LOGIN.url, Config.Constant.Api.LOGIN.type as HttpMethod, userData);
        console.log('Created user:', newUser);
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };

    // Call examples
    createUser();
  }, []);

  

  return (
    <SafeAreaView style={{flex:1}}>
       
         </SafeAreaView>
  )
}

export default Search