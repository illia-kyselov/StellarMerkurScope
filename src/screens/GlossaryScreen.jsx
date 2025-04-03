import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function GlossaryScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{ paddingBottom: 100 }} 
            >
                <Text style={[styles.pageTitle, styles.mb16]}>Glossary &amp; handbook</Text>

                <Text style={[styles.sectionTitle, styles.mb2]}>🌟 Object of the Day</Text>
                <View style={[styles.card, styles.mb16]}>
                    <Text style={[styles.objectTitle, styles.mb4]}>
                        Andromeda Galaxy (M31)
                    </Text>
                    <Text style={styles.listItem}>• Type: Spiral galaxy.</Text>
                    <Text style={styles.listItem}>• Distance: 2.5 million light-years.</Text>
                    <Text style={styles.listItem}>
                        • Fact: The farthest object visible to the naked eye. Will collide with the Milky Way in 4.5 billion years!
                    </Text>
                </View>

                <View style={[styles.card, styles.mb6]}>
                    <Text style={[styles.bigSectionTitle, styles.mb8]}>Celestial Mechanics</Text>
                    <Text style={[styles.subTextItalic, styles.mb16]}>
                        The science of how celestial bodies move under the influence of gravity.
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Orbital Resonance 🔄
                    </Text>
                    <Text style={[styles.itemDescription, styles.mb8]}>
                        Pluto and Neptune share a 3:2 resonance — for every three orbits of Neptune, Pluto completes two.
                    </Text>
                    <Text style={[styles.applicationLabel, styles.mb2]}>Application</Text>
                    <Text style={[styles.itemDescription, styles.mb16]}>
                        Explains the stability of the Kuiper Belt and planetary satellite systems.
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Barycenter ⚖️
                    </Text>
                    <Text style={[styles.itemDescription, styles.mb8]}>
                        The common center of mass around which two or more bodies orbit.
                    </Text>
                    <Text style={[styles.applicationLabel, styles.mb2]}>Application</Text>
                    <Text style={[styles.itemDescription]}>
                        The barycenter of the Sun and Jupiter lies outside the Sun’s surface, about 7% of the Sun’s radius away.
                    </Text>
                </View>

                <View style={[styles.card, styles.mb6]}>
                    <Text style={[styles.bigSectionTitle, styles.mb8]}>Types of Telescopes</Text>
                    <Text style={[styles.subTextItalic, styles.mb16]}>
                        From Galileo’s lenses to radio waves: revealing the invisible.
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Refractor (Lens-Based) 🔭
                    </Text>
                    <Text style={[styles.itemDescription, styles.mb16]}>
                        History: Galileo’s first telescope (1609) had 20x magnification.
                        Pros: Sharp images for planets, low maintenance.
                        Cons: Chromatic aberration (rainbow halos), heavy weight.
                        Best For: Beginners, lunar craters, Saturn’s rings.
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Reflector (Mirror-Based) 🌠
                    </Text>
                    <Text style={[styles.itemDescription, styles.mb16]}>
                        Inventor: Isaac Newton (1668).
                        Pros: No chromatic distortion, ideal for galaxies and nebulae.
                        Cons: Requires mirror alignment, bulky for large models.
                        Famous Models: Hubble Space Telescope, Dobsonian telescopes.
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Radio Telescope 📡
                    </Text>
                    <Text style={[styles.itemDescription, styles.mb16]}>
                        Principle: Detects radio waves from pulsars, quasars, and cosmic microwave background.
                        Example: Chile’s ALMA studies star formation in gas clouds.
                        Fact: The first pulsar was discovered via radio waves (1967).
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Space Telescope 🛰️
                    </Text>
                    <Text style={[styles.itemDescription]}>
                        Advantage: No atmospheric interference.
                        Legends:
                        Hubble (1990–present): Captured the "Pillars of Creation."
                        James Webb (2021–present): Observes infrared light from early galaxies.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={[styles.bigSectionTitle, styles.mb8]}>Observational Methods</Text>
                    <Text style={[styles.subTextItalic, styles.mb16]}>
                        How astronomers "see" the invisible.
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Astrometry 📏
                    </Text>
                    <Text style={[styles.itemDescription, styles.mb16]}>
                        Purpose: Precise measurement of stellar positions.
                        Discovery: Detected Sirius’s companion white dwarf via its motion (19th century).
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Photometry 💡
                    </Text>
                    <Text style={[styles.itemDescription, styles.mb16]}>
                        How it works: Tracks changes in an object’s brightness.
                        Example: Transit method for finding exoplanets (e.g., TRAPPIST-1 system).
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Spectroscopy 🌈
                    </Text>
                    <Text style={[styles.itemDescription, styles.mb16]}>
                        Spectrum Types:
                        Emission (bright lines): Nebulae.
                        Absorption (dark lines): Stars.
                        Application: Analyzing exoplanet atmospheres.
                    </Text>

                    <Text style={[styles.itemTitle, styles.mb6]}>
                        • Interferometry 🔄
                    </Text>
                    <Text style={styles.itemDescription}>
                        Example: Chile’s Very Large Telescope (VLT) combines four telescopes
                        for 0.001-arcsecond resolution.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03284F',
    },
    scrollContainer: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    mb2: { marginBottom: 2 },
    mb4: { marginBottom: 4 },
    mb6: { marginBottom: 6 },
    mb8: { marginBottom: 8 },
    mb16: { marginBottom: 16 },
    pageTitle: {
        textAlign: 'center',
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 25,
        color: '#F1CE13'
    },
    sectionTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF'
    },
    card: {
        backgroundColor: '#01366D',
        borderRadius: 15,
        padding: 10
    },
    objectTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontStyle: 'italic',
        fontSize: 16,
        color: '#FFFFFF'
    },
    listItem: {
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontSize: 12,
        color: '#FFFFFF',
        marginBottom: 2
    },
    bigSectionTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '900',
        fontSize: 18,
        color: '#F1CE13'
    },
    subTextItalic: {
        fontFamily: 'TT Travels',
        fontWeight: '300',
        fontStyle: 'italic',
        fontSize: 11,
        color: '#FFFFFF'
    },
    itemTitle: {
        fontFamily: 'TT Travels',
        fontWeight: '400',
        fontStyle: 'italic',
        fontSize: 16,
        color: '#FFFFFF'
    },
    itemDescription: {
        fontFamily: 'TT Travels',
        fontWeight: '300',
        fontSize: 12,
        color: '#FFFFFF'
    },
    applicationLabel: {
        fontFamily: 'TT Travels',
        fontWeight: '300',
        fontSize: 11,
        color: '#FFFFFF99'
    }
});
