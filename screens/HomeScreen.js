// HomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const value = await AsyncStorage.getItem('isLoggedIn');
            setIsLoggedIn(value === 'true');
        };

        checkLoginStatus();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        // Redireciona para a tela de login
        navigation.navigate('Login');
    };

    const redirectToLogin = () => {
        // Redireciona para a tela de login
        navigation.navigate('Login');
    };

    return (

        <View style={styles.container}>
            {isLoggedIn ? (
                <>
                    <Text style={styles.welcomeText}>Bem-vindo à Tela Inicial!</Text>
                </>
            ) : (
                navigation.navigate('Login')
            )}
        </View>

    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Sobreposição escura para melhorar a legibilidade do texto
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    messageText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 20,
    },
});

export default HomeScreen;
