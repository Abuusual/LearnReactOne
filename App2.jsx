import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const App = () => {
    const theme = useColorScheme()
    // console.log(theme)

    const isDarkMode = theme === 'dark';

    const backgroundColor = isDarkMode ? "black" : "white";
    const textcolor = isDarkMode ? "white" : "black";

    return (
        <View style = {[styles.container, {backgroundColor: backgroundColor}]}>
        <Text style = {[styles.text, {color: textcolor}]}>App</Text>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    text: {
        fontSize:28,
        fontWeight:"bold",
        color:"white"
    }
})