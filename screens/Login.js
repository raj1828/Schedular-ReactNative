import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import AuthStyle from './AuthStyle';
import { useDispatch } from 'react-redux';
import { getUserFromLocalStorage } from '../store/storage';
import { login } from '../store/authSlice';
const Login = () => {

       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [users, setUsers] = useState([]);
       const [emailError, setEmailError] = useState('');
       const [passwordError, setPasswordError] = useState('');
       const [showPassword, setShowPassword] = useState(false);
       const navigation = useNavigation();
       const dispatch = useDispatch();

       const handleLogin = async () => {
              try {
                     const storedUser = await getUserFromLocalStorage();
                     console.log(storedUser)
                     const foundUser = storedUser.find(user => user.email === email && user.password === password);
                     
                     if(foundUser) {
                            dispatch(login(foundUser));
                            navigation.navigate('Dashboard');
                     }else{
                            Alert.alert('Error', 'Invalid Email or Password');
                     }
              } catch (error) {
                     console.log('Error:', error);
                     Alert.alert('Error', 'Something went wrong');
              }
       }

  return (

       <View style={AuthStyle.container}>
       <Text style={AuthStyle.title}>Login</Text>
       <TextInput
              style={AuthStyle.input}
              placeholder="Enter Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
       />
       {/* {emailError ? <Text style={AuthStyle.errorText}>{emailError}</Text> : null} */}
       <View style={AuthStyle.passwordContainer}>
              <TextInput
                     style={AuthStyle.passwordInput}
                     placeholder="Enter Password"
                     value={password}
                     onChangeText={setPassword}
                     secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                     <Icon name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={25} color="#bdc3c7" />
              </TouchableOpacity>
       </View>
       {/* {passwordError ? <Text style={AuthStyle.errorText}>{passwordError}</Text> : null} */}
       <TouchableOpacity style={AuthStyle.button} onPress={handleLogin}>
              <Text style={AuthStyle.buttonText}>Login</Text>
       </TouchableOpacity>
       <Text style={AuthStyle.registerText}>
              Don't have an account?{' '}
              <Text style={AuthStyle.registerLink} onPress={() => navigation.navigate('Register')}>
                     Register
              </Text>
       </Text>
</View>
  )
}

export default Login
