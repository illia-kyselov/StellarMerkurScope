// FavoritesScreen.js

import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { toggleLike } from '../store/slices/eventsSlice';
import BackButtonSVG from '../assets/settings/BackButtonSVG';
import EventCard from '../components/EventCard'; // Используем вынесенную карточку

const FavoritesScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    // Получаем все события из Redux
    const events = useSelector((state) => state.events.events);

    // Фильтруем только лайкнутые события
    const likedEvents = events.filter((event) => event.isLiked);

    // Функция для отмены лайка
    const handleToggleLike = (id) => {
        dispatch(toggleLike({ id }));
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Фиксированная шапка */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <BackButtonSVG />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Favorites</Text>
            </View>

            {/* Контейнер с контентом. Отступ от шапки: 54, если пусто, и 18, если есть данные */}
            <View
                style={[
                    styles.contentContainer,
                    { marginTop: likedEvents.length === 0 ? 54 : 18 },
                ]}
            >
                {likedEvents.length === 0 ? (
                    <View style={styles.emptyStateContainer}>
                        <Image
                            source={require('../assets/settings/manImage.png')}
                            style={styles.emptyImage}
                        />
                        <Text style={styles.emptyText}>There's nothing here yet</Text>
                    </View>
                ) : (
                    <ScrollView contentContainerStyle={styles.cardsContainer}>
                        {likedEvents.map((event, index) => (
                            <View
                                key={event.id}
                                style={{ marginBottom: index !== likedEvents.length - 1 ? 6 : 0 }}
                            >
                                <EventCard
                                    event={event}
                                    onToggleLike={() => handleToggleLike(event.id)}
                                />
                            </View>
                        ))}
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03284F',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 12,
        paddingHorizontal: 20, // Добавлено для отступов по горизонтали
    },
    backButton: {
        marginRight: 18, // Отступ справа от кнопки назад
    },
    headerTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#F1CE13',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20, // Отступы для контента
    },
    emptyStateContainer: {
        alignItems: 'center',
    },
    emptyImage: {
        width: 295,
        height: 205,
        marginBottom: 28,
        resizeMode: 'contain',
    },
    emptyText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 18,
        color: '#FFFFFF',
        maxWidth: 226,
        textAlign: 'center',
    },
    cardsContainer: {
        paddingBottom: 20,
    },
});
