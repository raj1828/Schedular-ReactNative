import AsyncStorage from "@react-native-async-storage/async-storage";

// Save data to AsyncStorage
export const saveUserToLocalStorage = async (userData) => {
    try {
        await AsyncStorage.setItem('userInfo', JSON.stringify(userData));
    } catch (error) {
        console.log('Error in save user to local storage', error);
    }
}

// Get data from AsyncStorage
export const getUserFromLocalStorage = async () => {
    try {
        const userData = await AsyncStorage.getItem('userInfo');
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.log('Error in get user from local storage', error);
        return null;
    }
};

// Remove data from AsyncStorage
export const clearUserFromLocalStorage = async () => {
    try {
        await AsyncStorage.removeItem('userInfo');
    } catch (error) {
        console.log('Error in clear user from local storage', error);
    }
};

