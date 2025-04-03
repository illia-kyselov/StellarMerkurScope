import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Platform
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import BackButtonSVG from '../assets/settings/BackButtonSVG';
import PlusSVG from '../assets/game/PlusSVG';
import PictureSVG from '../assets/game/PictureSVG';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { addObservation } from '../store/slices/observationsSlice';
import { updateObservation } from '../store/slices/observationsSlice';
import { useRoute } from '@react-navigation/native';

const CLASSIFICATION_OPTIONS = ['Planets 🪐', 'Stars ✨', 'Galaxies 🌌'];
const WEATHER_OPTIONS = [
    { label: 'Clearly ☀️', key: 'clearly' },
    { label: 'Cloudy ☁️', key: 'cloudy' },
    { label: 'Rain 🌧️', key: 'rain' },
    { label: 'Snow ❄️', key: 'snow' },
    { label: 'Fog 🌫️', key: 'fog' },
    { label: 'Thunderstorm ⛈️', key: 'thunderstorm' }
];

export default function AddObservationScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [observationDate, setObservationDate] = useState(new Date());
    const [classification, setClassification] = useState('');
    const [objectOfObservation, setObjectOfObservation] = useState('');
    const [coordinates, setCoordinates] = useState('');
    const [notes, setNotes] = useState('');
    const [images, setImages] = useState([null]);
    const [weather, setWeather] = useState({
        clearly: false,
        cloudy: false,
        rain: false,
        snow: false,
        fog: false,
        thunderstorm: false
    });
    const route = useRoute();
    const { observation, isEditing } = route.params || {};


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    useEffect(() => {
        if (isEditing && observation) {
            const { date, classification, objectOfObservation, coordinates, notes, weather, images } = observation;

            setObservationDate(new Date(`${date.month} ${date.day}, ${date.year}`));
            setClassification(classification);
            setObjectOfObservation(objectOfObservation);
            setCoordinates(coordinates);
            setNotes(notes);
            setWeather(weather);
            setImages(images ?? []);
        }
    }, [isEditing, observation]);

    const handleDateChange = (event, selectedDate) => {
        if (selectedDate) {
            setObservationDate(selectedDate);
        }
    };

    const handleSelectClassification = (value) => {
        setClassification(value);
    };

    const handleToggleWeather = (key) => {
        setWeather({
            clearly: false,
            cloudy: false,
            rain: false,
            snow: false,
            fog: false,
            thunderstorm: false,
            [key]: true
        });
    };

    const handlePickImage = async (index) => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 0.8
            });
            if (!result.canceled && result.assets && result.assets.length > 0) {
                const { uri } = result.assets[0];
                setImages(prev => {
                    const newArr = [...prev];
                    newArr[index] = uri;
                    return newArr;
                });
            }
        } catch (err) {
            console.log('Image pick error:', err);
        }
    };

    const handleAddImageBlock = () => {
        if (images.length < 3) {
            setImages(prev => [...prev, null]);
        }
    };

    const allRequiredFilled = Boolean(
        classification &&
        objectOfObservation.trim() &&
        coordinates.trim() &&
        notes.trim()
    );

    const handleSave = () => {
        if (!allRequiredFilled) return;

        const day = observationDate.getDate();
        const monthIndex = observationDate.getMonth();
        const year = observationDate.getFullYear();
        const MONTHS = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const newObservation = {
            id: isEditing && observation ? observation.id : Date.now(),
            date: {
                day,
                month: MONTHS[monthIndex],
                year
            },
            classification,
            objectOfObservation,
            coordinates,
            notes,
            weather,
            images
        };

        if (isEditing) {
            dispatch(updateObservation(newObservation));
        } else {
            dispatch(addObservation(newObservation));
        }

        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <BackButtonSVG />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add observation</Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image
                    source={require('../assets/settings/manImage.png')}
                    style={styles.topImage}
                />
                <Text style={styles.label}>Date of observation</Text>
                <View style={styles.dateWheel}>
                    <DateTimePicker
                        value={observationDate}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={handleDateChange}
                        style={styles.inlinePicker}
                        textColor="#FFF"
                    />
                </View>
                <Text style={styles.label}>Classification of objects</Text>
                <View style={styles.classificationRow}>
                    {CLASSIFICATION_OPTIONS.map(opt => {
                        const isActive = classification === opt;
                        return (
                            <TouchableOpacity
                                key={opt}
                                style={[styles.classButton, isActive && styles.classButtonActive]}
                                onPress={() => handleSelectClassification(opt)}
                            >
                                <Text style={styles.classButtonText}>{opt}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <CustomInput
                    label="Object of observation"
                    placeholder="Object of observation"
                    value={objectOfObservation}
                    onChangeText={setObjectOfObservation}
                    containerStyle={{ marginBottom: 6 }}
                />
                <CustomInput
                    label="Coordinates"
                    placeholder="Coordinates"
                    value={coordinates}
                    onChangeText={setCoordinates}
                    containerStyle={{ marginBottom: 6 }}
                />
                <CustomInput
                    label="Notes"
                    placeholder="Notes"
                    value={notes}
                    onChangeText={setNotes}
                    multiline
                    containerStyle={{ marginBottom: 6, height: 150 }}
                />
                <View style={styles.imagesBlock}>
                    {images.map((uri, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.imageSquare}
                            onPress={() => handlePickImage(index)}
                        >
                            {uri ? (
                                <>
                                    <Image source={{ uri }} style={styles.uploadedImage} />
                                    <View style={styles.pictureOverlay}>
                                        <PictureSVG />
                                    </View>
                                </>
                            ) : (
                                <PlusSVG />
                            )}
                        </TouchableOpacity>
                    ))}
                    {images.length < 3 && (
                        <TouchableOpacity style={styles.addSmallButton} onPress={handleAddImageBlock}>
                            <Image
                                source={require('../assets/home/add.png')}
                                style={styles.addSmallIcon}
                            />
                        </TouchableOpacity>
                    )}
                </View>
                <Text style={styles.label}>Weather conditions</Text>
                <View style={styles.weatherContainer}>
                    {WEATHER_OPTIONS.map(item => {
                        const isActive = weather[item.key];
                        return (
                            <TouchableOpacity
                                key={item.key}
                                onPress={() => handleToggleWeather(item.key)}
                                style={[styles.weatherButton, isActive && styles.weatherButtonActive]}
                            >
                                <Text style={styles.weatherButtonText}>{item.label}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <CustomButton
                    label={isEditing ? "Save changes" : "Add observation"}
                    onPress={handleSave}
                    disabled={!allRequiredFilled}
                    containerStyle={{ marginTop: 18 }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03284F'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        paddingHorizontal: 20
    },
    backButton: {
        marginRight: 18
    },
    headerTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#F1CE13'
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    topImage: {
        width: 295,
        height: 205,
        alignSelf: 'center',
        marginTop: 16,
        marginBottom: 16,
        resizeMode: 'contain'
    },
    label: {
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 6
    },
    dateWheel: {
        height: 178,
        backgroundColor: '#01366D',
        borderRadius: 15,
        marginBottom: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inlinePicker: {
        height: 178
    },
    classificationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    classButton: {
        flex: 1,
        height: 42,
        backgroundColor: '#01366D',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6
    },
    classButtonActive: {
        backgroundColor: '#F1CE13'
    },
    classButtonText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 14,
        color: '#FFFFFF'
    },
    imagesBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6
    },
    imageSquare: {
        width: 86,
        height: 86,
        borderRadius: 15,
        backgroundColor: '#01366D',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
        overflow: 'hidden'
    },
    uploadedImage: {
        width: 86,
        height: 86,
        resizeMode: 'cover'
    },
    pictureOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addSmallButton: {
        width: 24,
        height: 24
    },
    addSmallIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    weatherContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 6
    },
    weatherButton: {
        backgroundColor: '#01366D',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 21
    },
    weatherButtonActive: {
        backgroundColor: '#F1CE13'
    },
    weatherButtonText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 14,
        color: '#FFFFFF'
    }
});
