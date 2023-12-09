import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ListaReservas = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        // Fetch reservas from API
        axios.get('https://api-backend-users.onrender.com/reservas')
            .then(response => {
                setReservas(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar reservas:', error);
            });
    }, []);

    const renderReservaItem = ({ item }) => (
        <View style={styles.reservaItem}>
            <Text>Data da Reserva: {item.dataReserva}</Text>
            <Text>Tipo de Quadra: {item.quadraTipo}</Text>
            <Text>Número da Quadra: {item.quadraNumero}</Text>
            <Text>Horário: {item.horario}</Text>
            <Text>Duração: {item.duracao} horas</Text>
            <Text>Valor: R$ {item.valorTotal}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Reservas</Text>
            <FlatList
                data={reservas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderReservaItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    reservaItem: {
        backgroundColor: '#eee',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
});

export default ListaReservas;
