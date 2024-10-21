import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { logout } from '../store/authSlice';
import CustomModal from '../components/CustomModal';

const Dashboard = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isModal, setIsModal] = useState(false);

  const handleLogout = async () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  const handleModalOpen = () => {
    console.log('Modal opened');
    setIsModal(true);
    
  };

  return (
    <View style={styles.container}>
      {/* Custom Modal */}
      <CustomModal isModal={isModal} onClose={() => setIsModal(false) } />

      {/* Top-left corner: Welcome message and user's email */}
      {userInfo && (
        <View style={styles.userInfoContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text>{userInfo.email}</Text>
        </View>
      )}

      {/* Top-right corner: Logout button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name={'log-out-outline'} size={25} color="#bdc3c7" />
      </TouchableOpacity>

      {/* Middle of the screen: Scheduler button */}
      <View style={styles.middleButtonContainer}>
        <TouchableOpacity style={styles.schedulerButton} onPress={()=>setIsModal(true)}>
          <Text style={styles.buttonText}>Scheduler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  userInfoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  logoutButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  middleButtonContainer: {
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  schedulerButton: {
    zIndex: 1,
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
