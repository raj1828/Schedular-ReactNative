import { AuthStyleheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import AuthStyle from './AuthStyle';
import { useDispatch } from 'react-redux';
import { saveUserToLocalStorage } from '../store/storage';
import { register } from '../store/authSlice';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

const handleRegister = () => {
       const userData = {email, password};
       dispatch(register(userData));
       saveUserToLocalStorage(userData);
       navigation.navigate('Login');
}

  return (
    <View style={AuthStyle.container}>
                     <Text style={AuthStyle.title}>Register</Text>
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
                                   {/* <Text style={AuthStyle.showPasswordText}>{showPassword ? 'Hide' : 'Show'}</Text> */}
                            </TouchableOpacity>
                     </View>
                     {/* {passwordError ? <Text style={AuthStyle.errorText}>{passwordError}</Text> : null} */}
                     <TouchableOpacity style={AuthStyle.button} onPress={handleRegister}>
                            <Text style={AuthStyle.buttonText}>Register</Text>
                     </TouchableOpacity>
                     <Text style={AuthStyle.registerText}>
                            Already have an account?{' '}
                            <Text style={AuthStyle.registerLink} onPress={() => navigation.navigate('Login')}>
                                   Login
                            </Text>
                     </Text>
              </View>
  )
}

export default Register
