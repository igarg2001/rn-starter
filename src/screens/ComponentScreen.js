import React from 'react'
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = (props) => {
    console.log(props)
    const myName = "Ishan"
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
    <Text style={styles.nameStyle}>My name is {myName}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentScreen