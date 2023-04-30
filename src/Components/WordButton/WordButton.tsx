import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export interface IWordButton {
  word: string;
  setGuessWord: (word: string) => void;
}

export default function WordButton({word, setGuessWord}: IWordButton) {
  function onWordButtonPressed(word: string) {
    setGuessWord(word);
  }

  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor="#606364"
      onPress={() => {
        onWordButtonPressed(word);
      }}>
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
