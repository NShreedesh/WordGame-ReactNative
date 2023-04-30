import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {AnswerState} from '../../../App';

interface IWordView {
  guessWord: string;
  answerState: AnswerState;
}

export default function WordView({guessWord, answerState}: IWordView) {
  function getCheckString(): string {
    switch (answerState) {
      case AnswerState.Correct:
        return 'Correct';
      case AnswerState.Wrong:
        return 'Wrong';
      case AnswerState.None:
        return '';
    }
  }

  return (
    <View style={styles.wordView}>
      <Text
        style={[
          styles.check,
          answerState === AnswerState.Correct && styles.correctCheck,
          answerState === AnswerState.Wrong && styles.wrongCheck,
        ]}>
        {getCheckString()}
      </Text>
      <Text style={styles.viewText}>{guessWord}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wordView: {
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  viewText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  check: {
    fontSize: 22,
    color: 'white',
  },
  correctCheck: {
    color: 'green',
  },
  wrongCheck: {
    color: 'red',
  },
});
