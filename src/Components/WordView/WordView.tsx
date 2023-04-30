import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function WordView() {
  return (
    <View style={styles.wordView}>
      <Text style={styles.viewText}>Word View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wordView: {
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
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
});
