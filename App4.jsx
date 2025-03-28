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
        backgroundColor: "black"
    },
    box1: {
        flex:1,
        backgroundColor: "red"
    },
    box2: {
        flex:2,
        backgroundColor: "yellow"
    },
    box3: {
        flex:3,
        backgroundColor: "green"
    }
})