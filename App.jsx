import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync({
                    'TT Travels': require('./src/assets/fonts/TTTravels-Light.ttf'),
                });
            } catch (e) {
                console.warn('Error loading fonts:', e);
            } finally {
                setAppIsReady(true);
            }
        }

        loadFonts();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <Provider store={store}>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </View>
        </Provider>
    );
}
