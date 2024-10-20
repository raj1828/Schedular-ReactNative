import { StyleSheet } from "react-native";


const AuthStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        padding: 20,
 },
 title: {
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 30,
        color: '#2c3e50',
 },
 input: {
        width: '100%',
        height: 50,
        borderColor: '#bdc3c7',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#ecf0f1',
        fontSize: 16,
 },
 passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderColor: '#bdc3c7',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#ecf0f1',
 },
 passwordInput: {
        flex: 1,
        fontSize: 16,
 },
 showPasswordText: {
        color: '#3498db',
        fontWeight: '600',
 },
 button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
 },
 buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
 },
 registerText: {
        fontSize: 14,
        color: '#34495e',
 },
 registerLink: {
        color: '#3498db',
        fontWeight: '700',
 },
 errorText: {
        color: 'red',
        marginBottom: 10,
        fontSize: 14,
 },
})

export default AuthStyle;
