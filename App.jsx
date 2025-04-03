import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

// Пакеты Expo
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { store } from './src/store/store';
import { Provider } from 'react-redux';

// Запрещаем SplashScreen скрываться автоматически,
// чтобы мы могли вручную скрыть его после загрузки шрифтов
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                // Загружаем кастомные шрифты
                await Font.loadAsync({
                    'TT Travels': require('./src/assets/fonts/TTTravels-Light.ttf'),
                });
            } catch (e) {
                console.warn('Error loading fonts:', e);
            } finally {
                // Когда шрифты подгружены, обновляем стейт
                setAppIsReady(true);
            }
        }

        loadFonts();
    }, []);

    // Когда шрифты подгружены, скрываем SplashScreen
    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    // Пока шрифты не загрузились, возвращаем null (будет показан SplashScreen)
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
