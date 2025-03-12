import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.box1}/>
      <View style = {styles.box2}/>
      <View style = {styles.box3}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    box1: {
        width:80,
        height:80,
        // alignSelf:"flex-start",
        backgroundColor: "red"
    },
    box2: {
        width:80,
        height:80,
        backgroundColor: "yellow"
    },
    box3: {
        width:80,
        height:80,
        backgroundColor: "green"
    }
})