import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={{ width: 40, height: 40, borderRadius: 50 }}
                    source={{ uri: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
                <Text>Name</Text>
                <Text>Email</Text>
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#dadada",
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})