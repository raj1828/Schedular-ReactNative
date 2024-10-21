import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Icon from "react-native-vector-icons/Ionicons";


const CheckBox = () => {
    const [reportTypes, setReportTypes] = useState({
        Fleetwise: false,
        Vehiclewise: false,
        Tripwise: false,
        DrivingScoredcard: false,
      });
    
      const handleCheckboxChange = (key) => {
        setReportTypes({...reportTypes, [key]:!reportTypes[key] });
        
      };
  return (
    <View style={styles.checkboxContainer}>
                  <Text style={styles.checkboxHeading}>Select Reoprts Types:</Text>
                  {Object.entries(reportTypes).map(([key, value]) => (
                    <TouchableOpacity key={key} onPress={() => handleCheckboxChange(key)} style={styles.checkboxItem}>
                      <Icon
                        name={value ? 'checkbox' : 'square-outline'}
                        size={24}
                        color="#0e156c"
                      />
                      <Text style={styles.checkboxText}>{key}</Text>
                    </TouchableOpacity>
                  ))}
    </View>

  )
}

export default CheckBox

const styles = StyleSheet.create({
   
      checkboxContainer:{
        
      },
      checkboxHeading:{
        fontSize: 18,
        marginBottom: 10,
        color: "#0e156c",
        fontWeight: "600",
      },
      checkboxItem:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        paddingLeft: 20,
      },
      checkboxText:{
        fontSize: 16,
        marginLeft: 10,
        color: "#000",
        fontWeight: "500",
      }
})