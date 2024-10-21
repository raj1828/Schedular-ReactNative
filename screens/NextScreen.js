import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const NextScreen = ({route}) => {

    const {reportTypes, emailIds, selectedVehicles} = route.params;
    console.log(reportTypes, emailIds, selectedVehicles);
  return (
    <View>
      <Text>NExt Screen</Text>
    </View>
  )
}

export default NextScreen

const styles = StyleSheet.create({})