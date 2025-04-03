import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { BlurView } from 'expo-blur';
import { useDispatch, useSelector } from 'react-redux';
import { nextLevel, starSelected, wrongStarSelected, resetLevel, resetAll } from '../store/slices/levelsSlice';

export default function GameLevelScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {
        currentLevelIndex,
        levels,
        status,
        currentLineIndex,
        lineProgress,
        frontChain,
        backChain
    } = useSelector(state => state.levels);

    const currentLevelData = levels[currentLevelIndex];
    const stars = currentLevelData.stars;
    const correctSequence = currentLevelData.correctSequence;
    const isMultiLine = Array.isArray(correctSequence[0]);
    const isGameOver = currentLevelIndex === levels.length - 1 && status === 'passed';

    const [showPassedOverlay, setShowPassedOverlay] = useState(false);

    useEffect(() => {
        if (status === 'passed') {
            setShowPassedOverlay(true);
            const timer = setTimeout(() => setShowPassedOverlay(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const allowedIndices = (() => {
        const cs = currentLevelData.correctSequence;

        if (isMultiLine) return [];

        if (frontChain.length === 0 && backChain.length === 0) {
            return [cs[0], cs[cs.length - 1]];
        }

        if (frontChain.length > 0 && backChain.length === 0) {
            let frontPos = frontChain[frontChain.length - 1];
            return frontPos < cs.length - 1 ? [cs[frontPos + 1]] : [];
        }

        if (backChain.length > 0 && frontChain.length === 0) {
            let backPos = backChain[backChain.length - 1];
            return backPos > 0 ? [cs[backPos - 1]] : [];
        }

        if (frontChain.length > 0 && backChain.length > 0) {
            let frontPos = frontChain[frontChain.length - 1];
            let backPos = backChain[backChain.length - 1];
            return [cs[frontPos + 1], cs[backPos - 1]];
        }

        return [];
    })();

    const onStarPress = (index) => {
        if (isMultiLine) {
            dispatch(starSelected(index));
        }
        else {
            if (allowedIndices.includes(index)) {
                dispatch(starSelected(index));
            } else {
                dispatch(wrongStarSelected());
            }
        }
    };

    const lines = [];
    if (isMultiLine && Array.isArray(currentLevelData.correctSequence[0])) {
        const progress = useSelector(state => state.levels.multiProgress);

        if (progress) {
            correctSequence.forEach((line, i) => {
                const { front, back } = progress[i];

                const visitedIndices = [
                    ...front,
                    ...back.filter(index => !front.includes(index))
                ].sort((a, b) => a - b);

                for (let j = 1; j < visitedIndices.length; j++) {
                    const start = stars[line[visitedIndices[j - 1]]];
                    const end = stars[line[visitedIndices[j]]];
                    lines.push({
                        startX: start.left + 6,
                        startY: start.top + 6,
                        endX: end.left + 6,
                        endY: end.top + 6,
                        key: `line-${i}-${j}`
                    });
                }
            });
        }
    }
    else {
        const effective = [...frontChain, ...[...backChain].reverse()];
        for (let i = 1; i < effective.length; i++) {
            const start = stars[effective[i - 1]];
            const end = stars[effective[i]];
            lines.push({
                startX: start.left + 6,
                startY: start.top + 6,
                endX: end.left + 6,
                endY: end.top + 6,
                key: `line-${i}`
            });
        }
    }

    if (isGameOver) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.gameOverContainer}>
                    <Image
                        source={require('../assets/settings/manImage.png')}
                        style={styles.gameOverImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.gameOverTitle}>Game over</Text>
                    <Text style={styles.gameOverSubtitle}>{`${levels.length}/${levels.length}`}</Text>
                    <View style={styles.gameOverButtons}>
                        <TouchableOpacity onPress={() => dispatch(resetAll())}>
                            <Image
                                source={require('../assets/game/again.png')}
                                style={styles.iconButton}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('GameMain')}>
                            <Image
                                source={require('../assets/game/home.png')}
                                style={styles.iconButton}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerRow}>
                <View style={styles.levelContainer}>
                    <Text style={styles.levelText}>{`${currentLevelIndex + 1}/${levels.length}`}</Text>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/game/close.png')}
                        style={styles.closeIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.spaceBlock}>
                <Svg style={StyleSheet.absoluteFill}>
                    {lines.map(line => (
                        <Line
                            key={line.key}
                            x1={line.startX}
                            y1={line.startY}
                            x2={line.endX}
                            y2={line.endY}
                            stroke="#FFFFFF80"
                            strokeWidth="2"
                        />
                    ))}
                </Svg>
                {stars.map((star, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.star, { top: star.top, left: star.left }]}
                        onPress={() => onStarPress(index)}
                        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                    >
                        <BlurView
                            style={StyleSheet.absoluteFill}
                            blurType="light"
                            blurAmount={9.9}
                            pointerEvents="none"
                        />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>
                    {currentLevelData.constellation.toUpperCase()}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.checkButton}
                disabled={status !== 'passed'}
                onPress={() => {
                    if (status === 'passed') {
                        dispatch(nextLevel());
                    }
                }}
            >
                <Image
                    source={
                        status === 'passed'
                            ? require('../assets/game/activeButton.png')
                            : require('../assets/game/disableButton.png')
                    }
                    style={styles.checkIcon}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            {(status === 'error' || (status === 'passed' && showPassedOverlay)) && (
                <TouchableOpacity
                    style={[
                        styles.overlay,
                        { backgroundColor: status === 'error' ? '#9E000099' : '#379E0099' }
                    ]}
                    activeOpacity={1}
                    onPress={() => {
                        if (status === 'error') dispatch(resetLevel());
                    }}
                    pointerEvents={status === 'error' ? 'auto' : 'none'}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03284F',
        paddingHorizontal: 20,
        paddingTop: 30
    },
    headerRow: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    levelContainer: {},
    levelText: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    closeButton: {
        position: 'absolute',
        right: 0
    },
    closeIcon: {
        width: 46,
        height: 46
    },
    spaceBlock: {
        width: 351,
        height: 467,
        borderRadius: 22,
        backgroundColor: '#010010',
        marginBottom: 8,
        alignSelf: 'center',
        position: 'relative'
    },
    star: {
        position: 'absolute',
        width: 12,
        height: 12,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        overflow: 'hidden'
    },
    nameContainer: {
        width: 299,
        height: 74,
        padding: 10,
        borderRadius: 368,
        backgroundColor: '#01366D',
        alignSelf: 'center',
        marginBottom: 32,
        justifyContent: 'center'
    },
    nameText: {
        fontFamily: 'TT Travels',
        fontWeight: '600',
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    checkButton: {
        alignSelf: 'center'
    },
    checkIcon: {
        width: 90,
        height: 90
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10
    },
    gameOverContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    gameOverImage: {
        width: 296,
        height: 205,
        marginBottom: 14
    },
    gameOverTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 45,
        color: '#F1CE13',
        marginBottom: 14
    },
    gameOverSubtitle: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#FFFFFF',
        marginBottom: 14
    },
    gameOverButtons: {
        flexDirection: 'row',
        gap: 12
    },
    iconButton: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    }
});
