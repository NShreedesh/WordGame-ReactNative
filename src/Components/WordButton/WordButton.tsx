import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import React from 'react';

export interface IWordButton {
  word: string;
}

export default function WordButton({word}: IWordButton) {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor="#606364"
      onPress={() => {}}>
      <Text style={styles.buttonText}>{word}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#818384',
    width: 40,
    height: 50,
    display: 'flex',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
