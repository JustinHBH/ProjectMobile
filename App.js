import React from 'react';
import { View } from 'react-native';
import TicTacToe from './TicTacToe';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TicTacToe />
    </View>
  );
};

export default App;
