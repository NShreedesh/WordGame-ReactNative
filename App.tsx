import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import WordButton from './src/Components/WordButton/WordButton';
import {wordList} from './src/Data/WordListData';
import WordView from './src/Components/WordView/WordView';

export enum KeyboardButton {
  Word,
  Backspace,
  Enter,
}

export enum AnswerState {
  None,
  Correct,
  Wrong,
}

function App() {
  const [guessWord, setGuessWord] = useState<string>('');
  const [usedButtons, setUsedButtons] = useState<number[]>([]);
  const [levelNumber, setLevelNumber] = useState<number>(0);
  const [answerState, setAnswerState] = useState<AnswerState>(AnswerState.None);

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
    if (levelNumber >= wordList.length - 1) return;
    setTimeout(() => {
      setGuessWord('');
      setUsedButtons([]);
      setLevelNumber(prev => prev + 1);
      setAnswerState(AnswerState.None);
    }, 1000);
  }

  function checkAnswer() {
    if (guessWord === wordList[levelNumber].answer) {
      setAnswerState(AnswerState.Correct);
      changeLevel();
    } else {
      setAnswerState(AnswerState.Wrong);
      console.log('Wrong');
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <WordView guessWord={guessWord} answerState={answerState} />
      <Image
        style={styles.image}
        source={{
          uri: wordList[levelNumber].uri,
        }}
      />
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
        <View style={styles.bottomButtonView}>
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
            checkAnswer={checkAnswer}
          />
        </View>
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
    display: 'flex',
    gap: 20,
  },
  wordButtonParent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    marginHorizontal: 30,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  bottomButtonView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
