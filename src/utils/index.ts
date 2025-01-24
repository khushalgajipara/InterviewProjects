import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'user_data';

export const saveUserData = async (key:any,user : any) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Failed to save user data:', error);
  }
};

export const loadUserData = async (key : any) => {
  try {
    const userData = await AsyncStorage.getItem(key);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Failed to load user data:', error);
    return null;
  }
};

export const clearUserData = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error('Failed to clear user data:', error);
  }
};
