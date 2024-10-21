import { StyleSheet, Text, View, Modal, Button, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';


const CustomModal = ({isModal, onClose}) => {
 
  const [reportTypes, setReportTypes] = useState({
    Fleetwise: false,
    Vehiclewise: false,
    Tripwise: false,
    DrivingScoredcard: false,
  });

  const handleCheckboxChange = (key) => {
    setReportTypes({...reportTypes, [key]:!reportTypes[key] });
  };

  const closeModal = () => {
    onClose(false);
  };
  return (
    <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View>
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 5, height: "100%", marginTop:"30%" , borderRadius: 30}}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Edit Schedul Report</Text>
              <TouchableOpacity onPress={closeModal}>
                <Icon name="close-circle-outline" size={28} color="#0e156c" />
              </TouchableOpacity>
            </View>

            {/* Components Start Herers */}
            <ScrollView>

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


            </ScrollView>
            
          </View>
        </View>
        
      </Modal>
    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //height: 50,
    //backgroundColor: "#F8F8F8",
    //paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6"
  },
  headerText:{
    fontSize: 20,
    fontWeight: "600",
    color: "#0e156c"
  },
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