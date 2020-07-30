import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>Image Score = {props.score}</Text>
      <Image source={props.imagePath} />
    </View>
  );
};

export default ImageDetail;
