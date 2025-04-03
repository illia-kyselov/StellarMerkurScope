import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';
import AddObservationScreen from '../../screens/AddObservationScreen';
import ObservationDetailScreen from '../../screens/ObservationDetailScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
            <Stack.Screen name="AddObservation" component={AddObservationScreen} />
            <Stack.Screen name="ObservationDetail" component={ObservationDetailScreen} />
        </Stack.Navigator>
    );
}
