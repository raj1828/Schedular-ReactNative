import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
    <Text>Loading...</Text>
  </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})