import { StyleSheet } from "react-native";

const ModalStyle = StyleSheet.create({
    header:{
        padding:20,
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
        padding:20
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
      },
      vehicleSelectionContainer:{
        // backgroundColor:"red",
        paddingTop: 20,
        paddingBottom: 20,
      },
      label:{
        paddingLeft:20,
        fontSize: 20,
        marginBottom: 10,
       // color: "#0e156c",
        fontWeight: "600",
      },
      
      mainVechicle:{
        height: 400,
        marginBottom: 20,
        padding: 20,
        backgroundColor: "#e8ecf8",
        //borderWidth: 1,
        //borderColor: "#ddd",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
        branchButton: {
            backgroundColor:'#fff',
            flexDirection: 'row',
            width:'100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            //borderWidth: 1,
            //borderColor: '#ddd',
            borderRadius: 25,
            //marginBottom: 10,
            padding:8
          },
      
          branchText: {
            fontSize: 16,
            color: '#666',
          },
          modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          },
          branchModalContent: {
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 20,
            width: '80%',
            maxHeight: '80%',
            color: '#0e156c',
         
          },
          branchModalTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#FF5722',
          },
          branchItem: {
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            color: '#0e156c',
            fontSize: 18,
            fontWeight: 'bold',
          },
         
          branchItemText: {
            fontSize: 16,
            color: '#0e156c',
          },
          closeBranchModalButton: {
            marginTop: 20,
            padding: 10,
            backgroundColor: '#0e156c',
            borderRadius: 5,
            alignItems: 'center',
          },
          closeBranchModalButtonText: {
            color: '#fff',
            fontWeight: 'bold',
          },
          searchInput:{
            marginTop: 10,
            marginBottom: 20,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 25,
            fontSize: 16,
            color: '#0e156c',
            backgroundColor: '#f8f8f8',
          },
          vehicleItem:{
            flexDirection: 'row',
            //justifyContent:'space-between',
            alignItems: 'center',
            //marginBottom: 10,
            //paddingHorizontal: 10,
            backgroundColor: '#f8f8f8',
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            color: '#0e156c',
            fontSize: 18,
            fontWeight: 'bold',
          },
          vehicleInfo:{
            marginLeft: 20,
            fontSize: 16,
            color: '#0e156c',
           },
           vehicleText:{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#0e156c',
           },

           // EMial container
           emailContainer:{
            padding:20,
            paddingBottom: 0,
            marginBottom: 20,
           // borderBottomWidth: 1,
            borderBottomColor: "#E6E6E6"
           },
           emailContainerTitle:{
            fontSize: 20,
            fontWeight: "600",
            color: "#0e156c"
           },
           emailInput:{
            marginTop:10,
            marginBottom: 20,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 5,
            fontSize: 16,
            color: '#0e156c',
            backgroundColor: '#f8f8f8',
           },
           emailAddButtonView:{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 20,
           },
           emailAddIcon:{
            fontSize: 24,
            color: '#3498db',
            marginLeft: 10,
           },
           emailSendButtonText:{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#3498db',
            marginLeft: 10,
           },


          // FotterButtons
          footerButtons:{
           // padding: 20,
            
            flexDirection: 'row',
            justifyContent:'space-around',
            alignItems: 'center',
            //marginBottom: 10,
            //paddingHorizontal: 10,
            backgroundColor: '#f8f8f8',
            //padding: 15,
            borderTopWidth: 1,
            borderTopColor: '#ddd',
            color: '#0e156c',
            fontSize: 18,
            fontWeight: 'bold',
            width: "100%"
          },
          cancelButton:{
            width: '40%',
            padding: 20,
            fontSize: 20,
            fontWeight: 'bold',
            //color: '#fff',
            alignItems: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            //color: '#fff',
            marginLeft: 10,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#0e156c',
            marginBottom: 10,
          },
          cancelButtonText:{
            fontSize: 20,
            color: '#0e156c',
            fontWeight: '600'
          },
          proceedButton:{
            marginBottom: 10,
            width: '40%',
            padding: 20,
            fontSize: 20,
            fontWeight: 'bold',
            //color: '#fff',
            alignItems: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            //color: '#fff',
            marginLeft: 10,
            backgroundColor: '#0e156c'
          },
          saveButtonText:{
            fontSize: 20,
            color: '#fff',
            fontWeight: '600'
          }
})

export default ModalStyle;