import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeObservation } from '../store/slices/observationsSlice';

import ArrowBack from '../assets/home/ArrowBack.png';
import DeleteIcon from '../assets/home/Delete.png';
import EditIcon from '../assets/home/Edit.png';
import ManImage from '../assets/settings/manImage.png';

const WEATHER_OPTIONS = [
    { label: 'Clearly ☀️', key: 'clearly' },
    { label: 'Cloudy ☁️', key: 'cloudy' },
    { label: 'Rain 🌧️', key: 'rain' },
    { label: 'Snow ❄️', key: 'snow' },
    { label: 'Fog 🌫️', key: 'fog' },
    { label: 'Thunderstorm ⛈️', key: 'thunderstorm' }
];

export default function ObservationDetailScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const { obsId } = route.params;

    const observation = useSelector(state =>
        state.observations.observations.find(o => o.id === obsId)
    );

    if (!observation) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#03284F' }}>
                <View style={{ padding: 20 }}>
                    <Text style={{ color: '#fff' }}>Observation not found.</Text>
                </View>
            </SafeAreaView>
        );
    }

    const handleDelete = () => {
        dispatch(removeObservation(observation.id));
        navigation.goBack();
    };

    const handleEdit = () => {
        navigation.navigate('AddObservation', {
            observation,
            isEditing: true
        });
    };

    const {
        classification,
        objectOfObservation,
        date,
        coordinates,
        notes,
        weather,
        images = []
    } = observation;

    const selectedWeatherKey = Object.keys(weather).find(k => weather[k]);

    const renderWeatherButton = () => {
        if (!selectedWeatherKey) return null;
        const item = WEATHER_OPTIONS.find(i => i.key === selectedWeatherKey);
        if (!item) return null;
        return (
            <View style={styles.weatherButton}>
                <Text style={styles.weatherButtonText}>{item.label}</Text>
            </View>
        );
    };

    const renderImages = () => {
        if (images.length === 0) return null;
        return (
            <View style={styles.imagesContainer}>
                {images.map((imgUri, idx) => {
                    if (!imgUri) return null;
                    return (
                        <Image
                            key={idx}
                            source={{ uri: imgUri }}
                            style={styles.observationImage}
                        />
                    );
                })}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={ArrowBack} style={styles.headerIcon} />
                </TouchableOpacity>
                <View style={styles.headerActions}>
                    <TouchableOpacity onPress={handleDelete}>
                        <Image source={DeleteIcon} style={[styles.headerIcon, { marginRight: 8 }]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleEdit}>
                        <Image source={EditIcon} style={styles.headerIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image source={ManImage} style={styles.topImage} />
                <Text style={styles.objectTitle}>{objectOfObservation}</Text>
                <View style={styles.buttonsRow}>
                    {renderWeatherButton()}
                    <View style={styles.classificationButton}>
                        <Text style={styles.classificationButtonText}>{classification}</Text>
                    </View>
                </View>
                <Text style={styles.label}>Object of observation</Text>
                <Text style={styles.value}>{objectOfObservation}</Text>
                <Text style={styles.label}>Date of observation</Text>
                <Text style={styles.value}>
                    {date.day < 10 ? '0' + date.day : date.day}.{date.month}.{date.year}
                </Text>
                <Text style={styles.label}>Coordinates</Text>
                <Text style={styles.value}>{coordinates}</Text>
                <Text style={styles.label}>Notes</Text>
                <Text style={[styles.value, { marginBottom: 16 }]}>{notes}</Text>
                {renderImages()}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03284F'
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    headerIcon: {
        width: 44,
        height: 44,
        resizeMode: 'contain',
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    topImage: {
        width: 295,
        height: 168,
        alignSelf: 'center',
        marginTop: 12,
        marginBottom: 24,
        resizeMode: 'contain'
    },
    objectTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#F1CE13',
        marginBottom: 14
    },
    buttonsRow: {
        flexDirection: 'row',
        marginBottom: 14
    },
    weatherButton: {
        backgroundColor: '#01366D',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 21,
        marginRight: 8
    },
    weatherButtonText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 14,
        color: '#FFFFFF'
    },
    classificationButton: {
        backgroundColor: '#01366D',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 21
    },
    classificationButtonText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 14,
        color: '#FFFFFF'
    },
    label: {
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontSize: 15,
        color: '#EBEBF599',
        marginBottom: 2
    },
    value: {
        fontFamily: 'TT Travels',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 16
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 2
    },
    observationImage: {
        width: 106,
        height: 106,
        borderRadius: 15,
        marginRight: 2,
        marginBottom: 2,
        resizeMode: 'cover'
    }
});
