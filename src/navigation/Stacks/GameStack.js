import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from '../../screens/GameScreen';
import GameLevelScreen from '../../screens/GameLevelScreen';

const Stack = createNativeStackNavigator();

export default function GameStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="GameMain" component={GameScreen} />
            <Stack.Screen name="GameLevel" component={GameLevelScreen} />
        </Stack.Navigator>
    );
}
