import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function TelaSplash({ navigation }: any) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('AppTabs');
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Animatable.Text
                animation="fadeInDown"
                duration={1400}
                style={styles.logo}
            >
                SerraPet
            </Animatable.Text>
            <Animatable.Text
                animation="fadeInUp"
                delay={600}
                duration={1200}
                style={styles.loading}
            >
                Carregando...
            </Animatable.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7abfcf',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    loading: {
        fontSize: 16,
        color: '#eeeeee',
        marginTop: 20,
    },
});
