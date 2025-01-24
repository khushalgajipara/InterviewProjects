import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from './style'
import Config from '../../config'
import Component from '../../component'
import { useDispatch } from 'react-redux'
import { loadUserData, saveUserData } from '../../utils'
import { setUser } from '../../store/userslice'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { apiRequest } from '../../service'


type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
const Login = ({navigation} :any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeUser = async () => {
      const userData = await loadUserData('user_data');
      console.log("userData",userData);
      
      if (userData) {
        dispatch(setUser(userData)); // Populate Redux with persisted user data
        navigation.navigate('BottomSheet');
        
      }
    };

    initializeUser();
  }, [dispatch]);

  const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      }),
      onSubmit: async (values) => {
        console.log(values);
        
        try {
          const newUser:any = await apiRequest(
            Config.Constant.Api.LOGIN.url,
            Config.Constant.Api.LOGIN.type as HttpMethod,
            values
          );
          if(newUser?.success){
            console.log('Created user:', newUser);
            await saveUserData('user_data',newUser)
            dispatch(setUser(newUser));
            navigation.navigate('BottomSheet');

          }else{
            Alert.alert(newUser?.message)
          }
        } catch (error) {
          console.error('Error creating user:', error);
        }
      },
    });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>Plié</Text>
      </View>
      <View style={styles.form}>

       <Component.InputText
        label="Email" 
        value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
        style={{
          marginHorizontal:20
        }}/>
         <Component.InputText
        label="Email" 
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry
        error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
        style={{
          marginHorizontal:20
        }}/>
      
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => formik.handleSubmit()}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[styles.link, {marginTop: 15}]}>
          <Text style={styles.linkText}>Not a member? Sign Up Here</Text>
        </TouchableOpacity>


        <View style={{flexDirection:'row',marginHorizontal:36,alignItems:'center',marginTop:40}}>
          <View style={{flex:1,backgroundColor:'#000',height:1,marginEnd:5}}></View>
          <Text>or Sign In With: </Text>
          <View style={{flex:1,backgroundColor:'#000',height:1,marginStart:5}}></View>
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={Config.Image.GOOGLE_IMG} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
          <Image source={Config.Image.APPLE_IMG} style={styles.icon} />

          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
          <Image source={Config.Image.FACEBOOK_IMG} style={styles.icon} />
            
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.guestButton}>
          <Text style={styles.guestButtonText}>Sign In as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login
