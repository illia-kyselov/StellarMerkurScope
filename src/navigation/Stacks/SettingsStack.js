import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../../screens/SettingsScreen';
import AddLocationScreen from '../../screens/AddLocationScreen';
import UnitsOfMeasurementScreen from '../../screens/UnitsOfMeasurementScreen';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SettingsMain" component={SettingsScreen} />
            <Stack.Screen name="AddLocation" component={AddLocationScreen} />
            <Stack.Screen name="UnitsOfMeasurement" component={UnitsOfMeasurementScreen} /> 
        </Stack.Navigator>
    );
}
