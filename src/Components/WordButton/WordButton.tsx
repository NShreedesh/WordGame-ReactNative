import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {KeyboardButton} from '../../../App';

export interface IWordButton {
  word: string;
  keboardButton: KeyboardButton;
  setGuessWord: (word: string, keyboardButton: KeyboardButton) => void;
}

export default function WordButton({
  word,
  keboardButton,
  setGuessWord,
}: IWordButton) {
  function onWordButtonPressed(word: string) {
    setGuessWord(word, keboardButton);
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
