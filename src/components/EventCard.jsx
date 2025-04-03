import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const EventCard = ({ event, onToggleLike }) => {
    return (
        <View style={styles.eventCard}>
            <View style={styles.eventHeader}>
                <TouchableOpacity onPress={onToggleLike}>
                    <Image
                        source={
                            event.isLiked
                                ? require('../assets/home/like.png')
                                : require('../assets/home/unlike.png')
                        }
                        style={styles.likeIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.eventInfoRow}>
                <Text style={styles.eventTitle}>{event.name}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
            </View>

            <Text style={styles.label}>Visibility</Text>
            <Text style={styles.value}>{event.visibility}</Text>

            <Text style={styles.label}>Level of observability</Text>
            <Text style={styles.value}>{event.levelOfObservability}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    eventCard: {
        backgroundColor: '#01366D',
        borderRadius: 20,
        padding: 10,
        marginBottom: 8,
    },
    eventHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 8,
    },
    likeIcon: {
        width: 46,
        height: 46,
    },
    eventInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    eventTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 16,
        color: '#FFFFFF',
        maxWidth: 238,
    },
    eventDate: {
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
    value: {
        fontFamily: 'TT Travels',
        fontWeight: '500',
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 8,
    },
});

export default EventCard;
