import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeSVG from '../assets/navbar/HomeSVG';
import GlossarySVG from '../assets/navbar/GlossarySVG';
import GameSVG from '../assets/navbar/GameSVG';
import SettingsSVG from '../assets/navbar/SettingsSVG';

const screenWidth = Dimensions.get('window').width;

const TABS = {
    HomeTab: { label: 'Home', Icon: HomeSVG },
    GlossaryTab: { label: 'Glossary', Icon: GlossarySVG },
    GameTab: { label: 'Game', Icon: GameSVG },
    SettingsTab: { label: 'Settings', Icon: SettingsSVG },
};

const TAB_WIDTH = (screenWidth - 40 - 2 * 14.93) / 4;

export default function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.wrapper}>
            <SafeAreaView edges={['bottom']} style={{ backgroundColor: 'transparent' }}>
                <View style={styles.tabBar}>
                    {state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        const { Icon, label } = TABS[route.name] || {};

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });
                            if (!event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TouchableOpacity
                                key={route.key}
                                onPress={onPress}
                                style={styles.tabItem}
                            >
                                {isFocused && <View style={styles.activeBar} />}

                                {isFocused ? (
                                    <Icon fill="#FFFFFF" />
                                ) : (
                                    <Icon fill="#FFFFFF99" />
                                )}
                                <Text
                                    style={[
                                        styles.label,
                                        { color: isFocused ? '#FFFFFF' : '#FFFFFF99' },
                                    ]}
                                >
                                    {label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 24,
        left: 20,
        right: 20,
        borderRadius: 54,
    },
    tabBar: {
        height: 62,
        paddingHorizontal: 14.93,
        borderRadius: 54,
        backgroundColor: '#01366D',
        borderTopWidth: 0,
        elevation: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tabItem: {
        width: TAB_WIDTH,
        alignItems: 'center',
    },
    activeBar: {
        position: 'absolute',
        top: -10,
        width: 52,
        height: 1.87,
        borderRadius: 1.87,
        backgroundColor: '#FFFFFF',
    },
    label: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 11.2,
        lineHeight: 14,
        marginTop: 4,
        textAlign: 'center',
    },
});
