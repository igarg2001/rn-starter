import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";



const ImageScreen = (props) => {
  return (
    <View>
      <Text>THE IMAGES DEMO</Text>
      <ImageDetail title = "Forest" score="9" imagePath = {require("../../assets/images/forest.jpg")}/>
      <ImageDetail title = "Mountain" score="7" imagePath= {require("../../assets/images/mountain.jpg")}/>
      <ImageDetail title = "Beach" score="4" imagePath={require("../../assets/images/beach.jpg")}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
