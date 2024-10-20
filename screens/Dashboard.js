import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Icon from "react-native-vector-icons/Ionicons";
import { clearUserFromLocalStorage } from '../store/storage';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../store/authSlice';


const Dashboard = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log(userInfo);
  const  dispatch = useDispatch();
  const navigation = useNavigation();

  const handelLogout = async () => {
    // handel logout
    dispatch(logout());
    navigation.navigate('Login');
  } 

  return (
    <View>
      <TouchableOpacity onPress={handelLogout}>
                     <Icon name={'log-out-outline' } size={25} color="#bdc3c7" />
              </TouchableOpacity>
      <Text>Dashboard</Text>
      {userInfo ? (
        <View>
          <Text>Welcome</Text>
          <Text>Email: {userInfo.email}</Text>
        </View>
      ):
      (
        <Text>Please log in</Text>
      )}
      
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})