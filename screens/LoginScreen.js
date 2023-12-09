import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('t@t.com');
    const [senha, setSenha] = useState('123');

    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post('http://192.168.100.4:5000/login', {
    //             email,
    //             senha,
    //         });

            
    //         if (response.status === 200) {
    //             await AsyncStorage.setItem('isLoggedIn', 'true');
    //             navigation.navigate('Home');
            
    //         } else {
    //             Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
    //         }
    //     } catch (error) {
    //         console.error('Erro ao fazer login:', error);
    //         Alert.alert('Erro', 'Ocorreu um erro ao fazer login. Tente novamente.');
    //     }
    // };

    const handleLogin = () => {
        // Simulando uma lógica de autenticação básica
        if (email === 't@t.com' && senha === '123') {
          // Armazena o estado de login no AsyncStorage
          AsyncStorage.setItem('isLoggedIn', 'true');
    
          // Navega para a tela principal
          navigation.navigate('Home');
        } else {
          Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>E-mail:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        paddingHorizontal: 16,
    },
    label: {
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default LoginScreen;
