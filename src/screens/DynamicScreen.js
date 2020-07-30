import React, { useState, useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import DynamicColorButton from "../components/DynamicColorButton";
import { updateState } from "../reducers/index";

const DynamicScreen = (props) => {
  const initialState = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case "red":
        return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };
      case "green":
        return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount };
      case "blue":
        return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>Red</Text>
      <View>
        <DynamicColorButton
          title="More Red"
          press={
            () =>
              dispatch({
                colorToChange: "red",
                amount: 25,
              })
            // changeColor(updateState({red: red, green: green, blue: blue}, {red: red+25}, (red+25<=255)))
          }
        />
        <DynamicColorButton
          title="Less Red"
          press={
            () =>
              dispatch({
                colorToChange: "red",
                amount: -25,
              })
            // changeColor(updateState({red: red, green: green, blue: blue}, {red: red+25}, (red+25<=255)))
          }
        />
      </View>
      <View>
        <DynamicColorButton
          title="More Green"
          press={() =>
            dispatch({
              colorToChange: "green",
              amount: 25,
            })
          }
        />
        <DynamicColorButton
          title="Less Green"
          press={() =>
            dispatch({
              colorToChange: "green",
              amount: -25,
            })
          }
        />
      </View>
      <View>
        <DynamicColorButton
          title="More Blue"
          press={() =>
            dispatch({
              colorToChange: "blue",
              amount: 25,
            })
          }
        />
        <DynamicColorButton
          title="Less Blue"
          press={() =>
            dispatch({
              colorToChange: "blue",
              amount: -25,
            })
          }
        />
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DynamicScreen;
