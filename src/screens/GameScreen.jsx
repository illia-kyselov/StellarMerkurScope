import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GameScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Find a constellation</Text>

                <Image
                    source={require('../assets/settings/manImage.png')}
                    style={styles.manImage}
                    resizeMode="contain"
                />

                <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('GameLevel')}>
                    <Image
                        source={require('../assets/game/play.png')}
                        style={styles.playIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03284F',
    },
    content: {
        marginTop: 30,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 45,
        color: '#F1CE13',
        textAlign: 'center',
        marginBottom: 42,
    },
    manImage: {
        width: 350,
        height: 243,
        marginBottom: 70,
    },
    playIcon: {
        width: 168,
        height: 168,
    },
});
