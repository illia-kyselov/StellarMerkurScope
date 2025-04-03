import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArrowRightSVG from '../assets/settings/ArrowRightSVG';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
    const [isBackupEnabled, setIsBackupEnabled] = useState(true);
    const navigation = useNavigation();
    const handleToggleBackup = () => {
        setIsBackupEnabled(prev => !prev);
    };

    const handlePress = (label) => {
        console.log(`${label} clicked`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Settings</Text>
                </View>

                <Image
                    source={require('../assets/settings/manImage.png')}
                    style={styles.image}
                    resizeMode="contain"
                />

                <View style={styles.card}>
                    <View style={styles.row}>
                        <Text style={styles.label}>
                            Saving and backing up the observation log
                        </Text>
                        <Switch
                            value={isBackupEnabled}
                            onValueChange={handleToggleBackup}
                        />
                    </View>

                    <View style={styles.separator} />

                    <TouchableOpacity onPress={() => handlePress('Privacy Policy')}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Privacy Policy</Text>
                            <ArrowRightSVG />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    <TouchableOpacity onPress={() => navigation.navigate('AddLocation')}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Location</Text>
                            <Text style={styles.addText}>Add</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    <TouchableOpacity onPress={() => navigation.navigate('UnitsOfMeasurement')}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Units of measurement</Text>
                            <ArrowRightSVG />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    <TouchableOpacity onPress={() => handlePress('Terms of use')}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Terms of use</Text>
                            <ArrowRightSVG />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    <TouchableOpacity onPress={() => handlePress('About developer')}>
                        <View style={styles.row}>
                            <Text style={styles.label}>About developer</Text>
                            <ArrowRightSVG />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#03284F',
    },
    container: {
        flex: 1,
        backgroundColor: '#03284F',
    },
    header: {
        marginTop: 30,
        alignItems: 'center',
        marginBottom: 26,
    },
    headerTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#F1CE13',
    },
    image: {
        alignSelf: 'center',
        marginBottom: 26,
        width: 295,
        height: 205,
    },
    card: {
        height: 324,
        borderRadius: 18,
        backgroundColor: '#01366D',
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    row: {
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    separator: {
        height: 0.5,
        backgroundColor: '#DBDBDB',
        marginVertical: 4,
    },
    label: {
        fontFamily: 'TT Travels',
        fontWeight: '600',
        fontSize: 17,
        color: '#FFFFFF',
        maxWidth: 268,
    },
    addText: {
        fontFamily: 'TT Travels',
        fontWeight: '600',
        fontSize: 17,
        color: '#FFFFFF',
    },
});
