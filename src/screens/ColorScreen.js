import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";


const ColorScreen = (props) => {
const [colors, setColors] = useState([])
//Dont do the below... Use FlatList
//const views = colors.map(color => <View key={color} style={{height: 100, width: 100, backgroundColor: color}}></View>)
  return (
    <View>
      <Button title="Add A Color" onPress={() => {
          setColors([...colors, randomRgb()])
      }}></Button>
      <FlatList
      keyExtractor={item => item}
      data = {colors}
      renderItem = {({item}) => {
          return <View style={{height: 100, width: 100, backgroundColor: item}}></View>
      }}
      />
    </View>
  );
};

const randomRgb = () => {
    const red = Math.floor(Math.random()* 256)
    const green = Math.floor(Math.random()* 256)
    const blue = Math.floor(Math.random()* 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;
