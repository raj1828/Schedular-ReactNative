import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';
//import data from '../screens/VehicleData.json';

import ModalStyle from './CustomModalStyle';

const vehicleData = [
  {
    branch: 'Thane',
    vin: 'PYV096001N5A01064',
    registration_number: 'KM10HT4629',
    lob_name: 'HCV Cargo'
  },
  {
    branch: 'Thane',
    vin: 'PYV096001N5A01068',
    registration_number: 'KM10HT4630',
    lob_name: 'HCV Cargo'
  },
  {
    branch: 'Mumbai',
    vin: 'PYV096001N5A01070',
    registration_number: 'MH12TY7896',
    lob_name: 'LCV Cargo'
  }
];

const CustomModal = ({isModal, onClose}) => {
 // const [vehicleData, setVehicleData] = useState(data);
  //console.log(vehicleData)
  const branches = ['ALL', ...new Set(vehicleData.map(vehicle => vehicle.branch))];

  const [reportTypes, setReportTypes] = useState({
    Fleetwise: false,
    Vehiclewise: false,
    Tripwise: false,
    DrivingScoredcard: false,
  });
  const [showBranchModal, setShowBranchModal] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState(vehicleData);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [emailIds, setEmailIds] = useState([]);
  const [emailInput, setEmailInput] = useState('');

  const handleCheckboxChange = key => {
    setReportTypes({...reportTypes, [key]: !reportTypes[key]});
  };

  const closeModal = () => {
    onClose(false);
  };

  const handleVehicleSelect = (id) => {
    console.log("Selected Id",id);
  }

  const handelAddMail =() => {
    setEmailIds([...emailIds, emailInput]);
    setEmailInput('');
    console.log("Email Ids",emailIds);
  };

  const handelProcced = () => {
    console.log("Handel Procced ");
  }

  const renderVehicleItem = ({item}) => (
    <TouchableOpacity
      style={ModalStyle.vehicleItem}
      onPress={() => handleVehicleSelect(item.vin)}>
      <Icon
        name={
          selectedVehicles.includes(item.vin) ? 'checkbox' : 'square-outline'
        }
        size={24}
        color="#FF5722"
      />
      <View style={ModalStyle.vehicleInfo}>
        <Text style={ModalStyle.vehicleText}>{item.registration_number}</Text>
        <Text style={ModalStyle.vehicleSubText}>{item.vin}</Text>
        <Text style={ModalStyle.vehicleSubText}>{item.lob_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 5,
              height: '100%',
              marginTop: '30%',
              borderRadius: 30,
            }}>
              <ScrollView>
            <View style={ModalStyle.header}>
              <Text style={ModalStyle.headerText}>Edit Schedul Report</Text>
              <TouchableOpacity onPress={closeModal}>
                <Icon name="close-circle-outline" size={28} color="#0e156c" />
              </TouchableOpacity>
            </View>

            {/* Components Start Herers */}
            <ScrollView>
              <View style={ModalStyle.checkboxContainer}>
                <Text style={ModalStyle.checkboxHeading}>
                  Select Reoprts Types:
                </Text>
                {Object.entries(reportTypes).map(([key, value]) => (
                  <TouchableOpacity
                    key={key}
                    onPress={() => handleCheckboxChange(key)}
                    style={ModalStyle.checkboxItem}>
                    <Icon
                      name={value ? 'checkbox' : 'square-outline'}
                      size={24}
                      color="#0e156c"
                    />
                    <Text style={ModalStyle.checkboxText}>{key}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {(reportTypes.Vehiclewise || reportTypes.DrivingScoredcard) && (
                <View style={ModalStyle.vehicleSelectionContainer}>
                  <Text style={ModalStyle.label}>Select Vehicles:</Text>
                  <View style={ModalStyle.mainVechicle}>
                    <TouchableOpacity
                      style={ModalStyle.branchButton}
                      onPress={() => setShowBranchModal(true)}>
                      <View style={ModalStyle}>
                        <TouchableOpacity
                          style={ModalStyle.branchButton}
                          onPress={() => setShowBranchModal(true)}>
                          <Text style={ModalStyle.branchText}>
                            {selectedBranch}
                          </Text>
                          <Icon
                            name="chevron-down"
                            size={24}
                            color="#0e156c"
                          />
                        </TouchableOpacity>
                      </View>
                      
                    </TouchableOpacity>

                    <TextInput
                        style={ModalStyle.searchInput}
                        placeholder="Search vehicles"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <FlatList 
                      data={vehicleData}
                      renderItem={renderVehicleItem}
                    />

                  </View>
                </View>
              )}

            </ScrollView>

            <View style={ModalStyle.emailContainer}>
                <Text style={ModalStyle.emailContainerTitle}>Enter Email Ids: </Text>

                {/* View Emials in container */}
                {
                  emailIds.length > 0 && (
                      <View>
                        <View style={ModalStyle.emailInput}>
                          {emailIds.map((email, index) => (
                            <View key={index} style={ModalStyle.emailItemContainer}>
                              <Text style={ModalStyle.emailItem}>{email}</Text>
                              <TouchableOpacity onPress={() => emailIds.splice(index, 1)}>
                                  <Icon 
                                    style={ModalStyle.emailRemoveIcon}
                                    name='trash-outline'
                                  />
                              </TouchableOpacity>
                            </View>
                          ))}
                        </View>
                      </View>
                  )
                  
                 
                }


                <TextInput 
                  style={ModalStyle.emailInput}
                  placeholder="Enter email id"
                  keyboardType="email-address"
                  onChange={setEmailInput}
                />

                <TouchableOpacity
                  
                  onPress={handelAddMail}>
                    <View style={ModalStyle.emailAddButtonView}>
                        <Icon 
                        style={ModalStyle.emailAddIcon}
                          name='add-circle-outline'
                        />
                        <Text style={ModalStyle.emailSendButtonText}>Add More</Text>
                    </View>
                </TouchableOpacity>
              </View>

                 {/* Footer Button */}
                 <View style={ModalStyle.footerButtons}>
                <TouchableOpacity
                  style={ModalStyle.cancelButton}
                  onPress={closeModal}>
                  <Text style={ModalStyle.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={ModalStyle.proceedButton}
                  onPress={handelProcced}>
                  <Text style={ModalStyle.saveButtonText}>Procced</Text>
                </TouchableOpacity>
  
        </View>

              </ScrollView>

            <Modal
              visible={showBranchModal}
              transparent={true}
              animationType="slide"
              onRequestClose={() => setShowBranchModal(false)}>
              <View style={[ModalStyle.modalOverlay]} >
                <View style={ModalStyle.branchModalContent}>
                  <Text style={ModalStyle.branchModalTitle}>Select Branch</Text>
                  <FlatList
                    data={branches}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={ModalStyle.branchItem}
                        onPress={() => {
                          setSelectedBranch(item);
                          setShowBranchModal(false);
                        }}>
                        <Text style={ModalStyle.branchItemText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                  />
                  <TouchableOpacity
                    style={ModalStyle.closeBranchModalButton}
                    onPress={() => setShowBranchModal(false)}>
                    <Text style={ModalStyle.closeBranchModalButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>


                 

        </View>

        
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({});
