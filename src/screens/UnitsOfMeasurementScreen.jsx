import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButtonSVG from '../assets/settings/BackButtonSVG';

export default function UnitsOfMeasurementScreen({ navigation }) {
    const [selectedUnit, setSelectedUnit] = useState(null);

    const isDoneDisabled = !selectedUnit;

    const handleSelectUnit = (unit) => {
        setSelectedUnit(unit);
    };

    const handleDone = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonWrapper}>
                            <BackButtonSVG />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Units of measurement</Text>
                    </View>

                    <Image
                        source={require('../assets/settings/manImage.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    <TouchableOpacity
                        style={[
                            styles.unitButton,
                            selectedUnit === 'radians' ? styles.unitButtonActive : null
                        ]}
                        onPress={() => handleSelectUnit('radians')}
                    >
                        <Text style={styles.unitButtonText}>Radians</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.unitButton,
                            { marginBottom: 20 },
                            selectedUnit === 'degrees' ? styles.unitButtonActive : null
                        ]}
                        onPress={() => handleSelectUnit('degrees')}
                    >
                        <Text style={styles.unitButtonText}>Degrees</Text>
                    </TouchableOpacity>
                </View>

                <Pressable
                    onPress={handleDone}
                    disabled={isDoneDisabled}
                    style={[
                        styles.doneButton,
                        isDoneDisabled ? styles.doneButtonDisabled : styles.doneButtonEnabled
                    ]}
                >
                    <Text
                        style={[
                            styles.doneButtonText,
                            isDoneDisabled ? styles.doneButtonTextDisabled : styles.doneButtonTextEnabled
                        ]}
                    >
                        Done
                    </Text>
                </Pressable>
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
        flex: 1,
        marginTop: 18,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    backButtonWrapper: {},
    headerTitle: {
        marginLeft: 18,
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#F1CE13',
    },
    image: {
        width: 295,
        height: 205,
        alignSelf: 'center',
        marginBottom: 12,
    },
    unitButton: {
        height: 54,
        borderRadius: 138,
        backgroundColor: '#01366D',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    unitButtonActive: {
        backgroundColor: '#F1CE13',
    },
    unitButtonText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 18,
        color: '#FFFFFF',
    },
    doneButton: {
        height: 54,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    doneButtonDisabled: {
        backgroundColor: '#696969',
    },
    doneButtonEnabled: {
        backgroundColor: '#F1CE13',
    },
    doneButtonText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 18,
    },
    doneButtonTextDisabled: {
        color: '#FFFFFF40',
    },
    doneButtonTextEnabled: {
        color: '#FFFFFF',
    },
});
