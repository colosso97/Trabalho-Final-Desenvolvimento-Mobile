import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function LoadingScreen({ navigation }: any) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home');
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
                NovaApp
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
        backgroundColor: '#101010',
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
        color: '#bbbbbb',
        marginTop: 20,
    },
});
