import { SafeAreaView, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import { Colors } from './constants/Colors';
import Icon from "react-native-vector-icons/Ionicons";
import store from './store';
import { Provider } from 'react-redux';
import { getUserFromLocalStorage } from './store/storage';
import { login } from './store/authSlice';
import LoadingScreen from './screens/LoadingScreen';




const Stack = createStackNavigator();

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Register')

  useEffect(() => {
    const checkLoggedInUser = async () => {
      const user = await getUserFromLocalStorage();
      if(user){
        store.dispatch(login(user));
        setInitialRoute('Dashboard');
      }else{
        setInitialRoute('Register');
      }
      setIsLoading(false);
    }
    checkLoggedInUser();
  }, [])

  if(isLoading) {
    return <LoadingScreen/>
  }
  
  return (
    <Provider store={store}>

      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
