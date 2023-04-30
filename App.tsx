import React, {useEffect, useState} from 'react';
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
  const [shuffeledAnswer, setShuffeledAnswer] = useState<string[]>([]);
  const [levelNumber, setLevelNumber] = useState<number>(0);
  const [answerState, setAnswerState] = useState<AnswerState>(AnswerState.None);
  const [isLevelOver, setIsLevelOver] = useState<boolean>(false);

  useEffect(() => {
    shuffleWord();
  }, [levelNumber]);

  function updateGuessWord(word: string, keyboardButton: KeyboardButton) {
    if (isLevelOver) return;
    if (keyboardButton === KeyboardButton.Backspace) {
      setGuessWord(prev => prev.slice(0, prev.length - 1));
    } else if (keyboardButton === KeyboardButton.Enter) {
    } else {
      setGuessWord(prev => prev + word);
    }
  }

  function addButonToUsed(buttonIndex: number) {
    if (isLevelOver) return;
    setUsedButtons(prev => [...prev, buttonIndex]);
  }

  function removeButtonFromUsed() {
    if (isLevelOver) return;
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
    setIsLevelOver(true);
    setTimeout(() => {
      setGuessWord('');
      setUsedButtons([]);
      setLevelNumber(prev => prev + 1);
      setAnswerState(AnswerState.None);
      setIsLevelOver(false);
    }, 1000);
  }

  function checkAnswer() {
    if (isLevelOver) return;
    if (guessWord === wordList[levelNumber].answer) {
      setAnswerState(AnswerState.Correct);
      changeLevel();
    } else {
      setAnswerState(AnswerState.Wrong);
      console.log('Wrong');
    }
  }

  function shuffleWord() {
    const letters = [...Array(26)].map((_, i) =>
      String.fromCharCode('a'.charCodeAt(0) + i),
    );
    const words: string[] = wordList[levelNumber].answer
      .toLowerCase()
      .split('');
    const shuffeledWords: string[] = [];

    while (words.length > 0) {
      const random = Math.floor(Math.random() * words.length);

      shuffeledWords.push(words[random]);
      letters.splice(letters.indexOf(words[random]), 1);
      words.splice(random, 1);
    }

    const shuffeledWordLength = shuffeledWords.length;

    for (let i = 0; i < 21 - shuffeledWordLength; i++) {
      const randomInShuffeledWords = Math.floor(
        Math.random() * shuffeledWords.length,
      );
      const randomInLetters = Math.floor(Math.random() * letters.length);
      shuffeledWords.splice(
        randomInShuffeledWords,
        0,
        letters[randomInLetters],
      );
      letters.splice(letters.indexOf(letters[randomInLetters]), 1);
    }

    setShuffeledAnswer(shuffeledWords);
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
        {shuffeledAnswer.map((word, index) => {
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
            word="Backspace"
            updateGuessWord={updateGuessWord}
            removeButtonFromUsed={removeButtonFromUsed}
          />
          <WordButton
            isButtonUsed={false}
            keboardButton={KeyboardButton.Enter}
            word="ENTER"
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
    marginHorizontal: 10,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  bottomButtonView: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
