import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import WordButton from './src/Components/WordButton/WordButton';
import {wordList} from './src/Data/WordListData';
import WordView from './src/Components/WordView/WordView';

function App() {
  const [guessWord, setGuessWord] = useState<string>('');

  function updateGuessWord(word: string) {
    if (word === '<') {
      setGuessWord(prev => prev.slice(0, prev.length - 1));
    } else if (word === 'EN') {
    } else {
      setGuessWord(prev => prev + word);
    }
  }

  console.log(guessWord);

  return (
    <SafeAreaView style={styles.safeArea}>
      <WordView guessWord={guessWord} />
      <View style={styles.wordButtonParent}>
        {wordList[0].words.map((word, index) => {
          return (
            <WordButton
              key={index}
              word={word}
              setGuessWord={updateGuessWord}
            />
          );
        })}
        <WordButton word="<" setGuessWord={updateGuessWord} />
        <WordButton word="EN" setGuessWord={updateGuessWord} />
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
