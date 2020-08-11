import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TicTacToe from './tictactoe';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TicTacToe"
          component={TicTacToe}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;