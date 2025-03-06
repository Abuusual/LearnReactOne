import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    Alert,
    Pressable,
    SafeAreaView
} from 'react-native'
import React from 'react'

const App = () => {

    // const style = {
    //     container: {
    //         width: "100%",
    //         height: "100%",
    //         backgroundColor: "black"
    //     }
    // }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Home Page</Text>

            <Image
                style={{ width: 200, height: 300 }}
                source={{ uri: "https://images.unsplash.com/photo-1733044271325-3017e877218b?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            />

            {/* <Button title='Press Me'></Button>

            <TouchableOpacity style={{ padding: 10, backgroundColor: "lightgreen" }} onPress={() => Alert.alert("Pressed!")}>
                <Text>Button By TouchableOpacity</Text>
            </TouchableOpacity> */}

            <Pressable style={styles.button}>
                <Text style={styles.btntext}>Press Me</Text>
            </Pressable>

        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        padding:20,
        gap:10
    },

    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },

    button: {
        width:120,
        padding: 10,
        backgroundColor: "grey",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        marginTop:10,
    },

    btntext: {
        color: "white",
        fontWeight:"400",
        fontSize:16,
    }

})