import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import React from 'react';
import {KeyboardButton} from '../../../App';

export interface IWordButton {
  word: string;
  keboardButton: KeyboardButton;
  isButtonUsed: boolean;
  wordIndex?: number;
  updateGuessWord: (word: string, keyboardButton: KeyboardButton) => void;
  addButonToUsed?: (usedButtonIndex: number) => void;
  removeButtonFromUsed?: () => void;
  checkAnswer?: () => void;
}

export default function WordButton({
  word,
  keboardButton,
  updateGuessWord,
  addButonToUsed,
  removeButtonFromUsed,
  isButtonUsed,
  wordIndex,
  checkAnswer,
}: IWordButton) {
  function onWordButtonPressed(word: string) {
    addButonToUsed &&
      wordIndex !== undefined &&
      !isButtonUsed &&
      addButonToUsed(wordIndex);

    updateGuessWord(word, keboardButton);

    keboardButton === KeyboardButton.Backspace &&
      removeButtonFromUsed &&
      removeButtonFromUsed();

    keboardButton === KeyboardButton.Enter && checkAnswer && checkAnswer();
  }

  return (
    <TouchableHighlight
      disabled={isButtonUsed}
      style={[
        styles.button,
        isButtonUsed && styles.disableButtonStyle,
        (keboardButton == KeyboardButton.Enter ||
          keboardButton == KeyboardButton.Backspace) && {flex: 1},
      ]}
      activeOpacity={0}
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
    width: 35,
    height: 45,
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
  disableButtonStyle: {
    opacity: 0.2,
  },
});
