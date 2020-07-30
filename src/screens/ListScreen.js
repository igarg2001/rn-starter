import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = (props) => {
    console.log(props)

    const friends = [
        {name: 'Samkit', age:18},
        {name: 'Adi', age: 19},
        {name: 'Yash', age: 19},
        {name: 'Samkit2', age:18},
        {name: 'Adi2', age: 19},
        {name: 'Yash2', age: 19},
        {name: 'Samkit3', age:18},
        {name: 'Adi3', age: 19},
        {name: 'Yash3', age: 19},
        {name: 'Samkit4', age:18},
        {name: 'Adi4', age: 19},
        {name: 'Yash4', age: 19},
    ]

    return <FlatList keyExtractor={(friend) => {
        return friend.name
    }} 
    data={friends} 
    renderItem={({item}) => {
    return <Text style={styles.textStyles}>{item.name} - {item.age}</Text>
    }}
    showsVerticalScrollIndicator={false}></FlatList>
}

const styles = StyleSheet.create({
    textStyles: {
        marginVertical: 50
    }
})

export default ListScreen