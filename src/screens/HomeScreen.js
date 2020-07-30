import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentScreen from "./ComponentScreen";

const HomeScreen = ({ navigation }) => {
  //const testEl = <Text style={styles.text}>This is a test element</Text>
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <Button title="Go to Lists Demo" 
      onPress={() => navigation.navigate("Lists")} />
      <Button
      title="Go to Images Demo"
      onPress={() => navigation.navigate('Images')} />
      <Button
      title = "Go to Counter Demo"
      onPress={() => navigation.navigate('Counter')}
      />
      <Button
      title = "Go to Color Demo"
      onPress={() => navigation.navigate('Color')}
      />
      <Button
      title = "Go to Dynamic Demo"
      onPress={() => navigation.navigate('Dynamic')}
      />
       <Button
      title = "Go to Input Demo"
      onPress={() => navigation.navigate('Input')}
      />
      <Button
      title = "Go to Box Demo"
      onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
