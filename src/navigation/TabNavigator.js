import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeStack from './Stacks/HomeStack';
import SettingsStack from './Stacks/SettingsStack';
import TabBar from './TabBar';
import GlossaryScreen from '../screens/GlossaryScreen';
import GameScreen from '../screens/GameScreen';
import GameStack from './Stacks/GameStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{ headerShown: false }}
            tabBar={(props) => {
                const routeName =
                    getFocusedRouteNameFromRoute(props.state.routes[props.state.index]) ?? '';

                if (routeName === 'AddLocation' || routeName === 'UnitsOfMeasurement' || routeName === 'GameLevel' || routeName === 'Favorites' || routeName === 'AddObservation') {
                    return null;
                }
                return <TabBar {...props} />;
            }}
        >
            <Tab.Screen name="HomeTab" component={HomeStack} />
            <Tab.Screen name="GlossaryTab" component={GlossaryScreen} />
            <Tab.Screen name="GameTab" component={GameStack} />
            <Tab.Screen name="SettingsTab" component={SettingsStack} />
        </Tab.Navigator>
    );
}
