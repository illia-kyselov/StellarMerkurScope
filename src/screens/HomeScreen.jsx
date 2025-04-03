import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../store/slices/eventsSlice';
import { useNavigation } from '@react-navigation/native';
import EventCard from '../components/EventCard';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const events = useSelector(state => state.events.events);
    const observations = useSelector(state => state.observations.observations);
    const [currentYear, setCurrentYear] = useState(2025);

    const handleNextYear = () => {
        if (currentYear < 2027) {
            setCurrentYear(prev => prev + 1);
        }
    };

    const handlePreviousYear = () => {
        if (currentYear > 2025) {
            setCurrentYear(prev => prev - 1);
        }
    };

    const hasLeftArrow = currentYear > 2025;
    const hasRightArrow = currentYear < 2027;

    const eventsForYear = events.filter(e => {
        const yearFromDate = parseInt(e.date.split(', ')[1], 10);
        return yearFromDate === currentYear;
    });

    const monthsOrder = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const parseMonthName = (dateString) => {
        const cleanString = dateString.replace(',', '');
        const parts = cleanString.split(' ');
        return parts[1];
    };

    const groupedByMonth = {};
    eventsForYear.forEach(event => {
        const month = parseMonthName(event.date);
        if (!groupedByMonth[month]) {
            groupedByMonth[month] = [];
        }
        groupedByMonth[month].push(event);
    });

    const sortedMonths = monthsOrder.filter(month => groupedByMonth[month]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Home</Text>
                    <TouchableOpacity
                        style={styles.headerLikeWrapper}
                        onPress={() => navigation.navigate('Favorites')}
                    >
                        <Image
                            source={require('../assets/home/like.png')}
                            style={styles.headerLikeIcon}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.astronomicalCalendar}>Astronomical calendar</Text>

                {hasLeftArrow && hasRightArrow ? (
                    <View style={styles.yearContainer}>
                        <TouchableOpacity onPress={handlePreviousYear}>
                            <Image
                                source={require('../assets/home/ArrowBack.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                        <Text style={styles.yearText}>{currentYear}</Text>
                        <TouchableOpacity onPress={handleNextYear}>
                            <Image
                                source={require('../assets/home/ArrowButton.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                    </View>
                ) : hasRightArrow ? (
                    <View style={styles.yearContainerSingle}>
                        <Text style={styles.yearText}>{currentYear}</Text>
                        <TouchableOpacity onPress={handleNextYear}>
                            <Image
                                source={require('../assets/home/ArrowButton.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.yearContainerSingle}>
                        <TouchableOpacity onPress={handlePreviousYear}>
                            <Image
                                source={require('../assets/home/ArrowBack.png')}
                                style={styles.arrowIcon}
                            />
                        </TouchableOpacity>
                        <Text style={styles.yearText}>{currentYear}</Text>
                    </View>
                )}

                {sortedMonths.map((month, index) => (
                    <View key={month}>
                        <Text style={styles.monthText}>{month}</Text>
                        {groupedByMonth[month].map(event => (
                            <EventCard
                                key={event.id}
                                event={event}
                                onToggleLike={() => dispatch(toggleLike({ id: event.id }))}
                            />
                        ))}
                        {index !== sortedMonths.length - 1 && <View style={{ marginBottom: 16 }} />}
                    </View>
                ))}

                <View style={{ marginBottom: 24 }} />

                <Text style={styles.observationLogTitle}>Personal observation log</Text>

                {observations.length === 0 ? (
                    <View style={styles.observationLogContainer}>
                        <Text style={styles.observationLogText}>
                            You don't have any observations here yet
                        </Text>
                        <TouchableOpacity style={styles.addObservationButton} onPress={() => navigation.navigate('AddObservation')}>
                            <Image
                                source={require('../assets/home/add.png')}
                                style={styles.addIcon}
                            />
                            <Text style={styles.addObservationText}>Add observation</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        <View style={styles.observationsList}>
                            {observations.map((obs, index) => (
                                <TouchableOpacity
                                    key={obs.id}
                                    style={[styles.observationCard, index !== observations.length - 1 && { marginBottom: 4 }]}
                                    onPress={() => navigation.navigate('ObservationDetail', { obsId: obs.id })}
                                >
                                    <View style={styles.classificationContainer}>
                                        <Text style={styles.classificationText}>{obs.classification}</Text>
                                    </View>
                                    <View style={styles.observationHeader}>
                                        <Text style={styles.observationObject}>{obs.objectOfObservation}</Text>
                                        <Text style={styles.observationDate}>
                                            {obs.date.day} {obs.date.month}, {obs.date.year}
                                        </Text>
                                    </View>
                                    <Text style={styles.label}>Coordinates</Text>
                                    <Text style={styles.coordinatesValue}>{obs.coordinates}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.observationLogContainerWithButton}>
                            <TouchableOpacity style={styles.addObservationButton} onPress={() => navigation.navigate('AddObservation')} >
                                <Image
                                    source={require('../assets/home/add.png')}
                                    style={styles.addIcon}
                                />
                                <Text style={styles.addObservationText}>Add observation</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </ScrollView>
        </SafeAreaView >
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03284F',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 18,
        justifyContent: 'center',
    },
    headerTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#F1CE13',
        textAlign: 'center',
    },
    headerLikeWrapper: {
        position: 'absolute',
        right: 0,
    },
    headerLikeIcon: {
        width: 46,
        height: 46,
    },
    astronomicalCalendar: {
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 12,
    },
    yearContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        width: '100%',
    },
    yearContainerSingle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        width: '100%',
    },
    arrowIcon: {
        width: 44,
        height: 44,
    },
    yearText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 35,
        color: '#FFFFFF',
        marginHorizontal: 10,
    },
    monthText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 18,
        color: '#F1CE13',
        marginBottom: 2,
    },
    observationLogTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 2,
    },
    observationLogContainer: {
        height: 88,
        borderRadius: 30,
        backgroundColor: '#01366D',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    observationLogText: {
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontSize: 12,
        color: '#FFFFFF',
        maxWidth: 206,
        textAlign: 'center',
        marginBottom: 4,
    },
    addObservationButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addIcon: {
        width: 30,
        height: 30,
        marginRight: 4,
    },
    addObservationText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 14,
        color: '#FFFFFF',
    },
    observationsList: {
        marginBottom: 12,
    },
    observationLogContainerWithButton: {
        borderRadius: 30,
        backgroundColor: '#01366D',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    observationCard: {
        height: 136,
        backgroundColor: '#01366D',
        borderRadius: 20,
        padding: 10,
    },
    classificationContainer: {
        backgroundColor: '#F1CE13',
        borderRadius: 17.24,
        paddingVertical: 8.62,
        paddingHorizontal: 18.1,
        marginBottom: 8,
        width: 116,
        color: '#FFFFFF',
    },
    classificationText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    observationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    observationObject: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 16,
        color: '#FFFFFF',
    },
    observationDate: {
        fontFamily: 'TT Travels',
        fontWeight: '500',
        fontStyle: 'italic',
        fontSize: 11,
        color: '#F1CE13',
    },
    label: {
        fontFamily: 'TT Travels',
        fontWeight: '500',
        fontSize: 11,
        color: '#FFFFFF99',
        marginBottom: 2,
    },
    coordinatesValue: {
        fontFamily: 'TT Travels',
        fontWeight: '500',
        fontSize: 14,
        color: '#FFFFFF',
    },
});
