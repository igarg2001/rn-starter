import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = (props) => {
//   const [counter, setCounter] = useState(0);
    const initialState = {
        counter: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {...state, counter: state.counter + 1}
                //break;
            case 'DECREMENT' : 
                return {...state, counter: state.counter - 1}
            default:
                return state
                //break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({type: 'INCREMENT', payload: null})} />
      <Button title="Decrease" onPress={() => dispatch({type: 'DECREMENT', payload: null})} />
      <Text>Current Count: {state.counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
