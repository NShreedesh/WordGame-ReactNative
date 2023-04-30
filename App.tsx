import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import WordButton from './src/Components/WordButton/WordButton';
import {wordList} from './src/Data/WordListData';
import WordView from './src/Components/WordView/WordView';
import {func} from 'prop-types';

export enum KeyboardButton {
  Word,
  Backspace,
  Enter,
}

function App() {
  const [guessWord, setGuessWord] = useState<string>('');
  const [usedButtons, setUsedButtons] = useState<number[]>([]);
  const [levelNumber, setLevelNumber] = useState<number>(0);

  function updateGuessWord(word: string, keyboardButton: KeyboardButton) {
    if (keyboardButton === KeyboardButton.Backspace) {
      setGuessWord(prev => prev.slice(0, prev.length - 1));
    } else if (keyboardButton === KeyboardButton.Enter) {
    } else {
      setGuessWord(prev => prev + word);
    }
  }

  function addButonToUsed(buttonIndex: number) {
    setUsedButtons(prev => [...prev, buttonIndex]);
  }

  function removeButtonFromUsed() {
    setUsedButtons(prev => {
      prev = prev.slice(0, prev.length - 1);
      return prev;
    });
  }

  function isUsedButton(index: number): boolean {
    const indexFound: boolean =
      usedButtons.findIndex(buttonIndex => index === buttonIndex) !== -1;
    return indexFound;
  }

  function changeLevel() {
    setLevelNumber(prev => prev + 1);
  }

  console.log(usedButtons);

  return (
    <SafeAreaView style={styles.safeArea}>
      <WordView guessWord={guessWord} />
      <View style={styles.wordButtonParent}>
        {wordList[levelNumber].words.map((word, index) => {
          return (
            <WordButton
              isButtonUsed={isUsedButton(index)}
              keboardButton={KeyboardButton.Word}
              key={index}
              word={word}
              updateGuessWord={updateGuessWord}
              addButonToUsed={addButonToUsed}
              wordIndex={index}
            />
          );
        })}
        <WordButton
          isButtonUsed={false}
          keboardButton={KeyboardButton.Backspace}
          word="<"
          updateGuessWord={updateGuessWord}
          removeButtonFromUsed={removeButtonFromUsed}
        />
        <WordButton
          isButtonUsed={false}
          keboardButton={KeyboardButton.Enter}
          word="EN"
          updateGuessWord={updateGuessWord}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  wordView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 20,
    paddingVertical: 10,
  },
  safeArea: {
    height: '100%',
    backgroundColor: '#121213',
  },
  wordButtonParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    marginHorizontal: 30,
  },
});
