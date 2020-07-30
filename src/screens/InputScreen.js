import React, { useReducer } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const InputScreen = (props) => {
  const initialState = {
    name: "",
    valid: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "change":
        return action.payload.value.length > 5
          ? { ...state, name: action.payload.value, valid: true }
          : { ...state, name: action.payload.value, valid: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const validationMessage = state.valid ? null : (
    <Text>Password length must be more than 5 characters</Text>
  );

  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none" //For later Android and iOS
        autoCorrect={false} //For later Android and iOS
        value={state.name}
        onChangeText={(newName) =>
          dispatch({ type: "change", payload: { value: newName } })
        }
      />
      {validationMessage}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    margin: 15,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
});

export default InputScreen;
