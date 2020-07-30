import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

const DynamicColorButton = props => {
    return (
        <Button title ={props.title} onPress={props.press} />
    )
}

export default DynamicColorButton