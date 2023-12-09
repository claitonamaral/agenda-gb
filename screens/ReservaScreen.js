import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import MaskedInput from 'react-native-masked-text';

const ReservaScreen = () => {
    const [quadraTipo, setQuadraTipo] = useState('');
    const [quadraNumero, setQuadraNumero] = useState('1');
    const [horario, setHorario] = useState('');
    const [duracao, setDuracao] = useState('1');
    const [dataReserva, setDataReserva] = useState('');
  
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);

    const tiposDeQuadra = ['futebol', 'tenis']; // Adicione mais tipos conforme necessário
    const horariosQuadra = {
        futebol: ['10:00', '11:00', '14:00', '15:00'],
        tenis: ['09:00', '10:00', '13:00', '14:00'],
    };

    useEffect(() => {
        setHorariosDisponiveis(horariosQuadra[quadraTipo.toLowerCase()] || []);
    }, [quadraTipo]);

    const handleReserva = async (message) => {
        try {
            // Validar entrada
            if (!quadraTipo || !quadraNumero || !horario || !duracao || !dataReserva) {
                alert('Todos os campos são obrigatórios.');
                return;
            }

            // Fetch horários disponíveis
            //fetchHorariosDisponiveis();

            // Validar a quantidade de horas
            const duracaoInt = parseInt(duracao);
            if (duracaoInt <= 0 || duracaoInt > 4) {
                alert('A duração da reserva deve estar entre 1 e 4 horas.');
                return;
            }

            const response = await axios.post('https://api-backend-users.onrender.com/reservas', {
                quadraTipo,
                quadraNumero,
                horario,
                duracao,
                dataReserva,
            });

            if (response.data.success) {
                alert('Reserva realizada com sucesso!');
            } else{
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Erro ao fazer reserva:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reserva de Quadras</Text>
            <Text style={styles.label}>Data da Reserva:</Text>
            <TextInput
                style={styles.input}
                value={dataReserva}
                onChangeText={setDataReserva}
                placeholder="DD/MM/YYYY"
            />

            <Text style={styles.label}>Tipo de Quadra:</Text>
            <TextInput
                style={styles.input}
                value={quadraTipo}
                onChangeText={setQuadraTipo}
                placeholder="Digite o tipo de quadra"
            />

            <Text style={styles.label}>Número da Quadra:</Text>
            <TextInput
                style={styles.input}
                value={quadraNumero}
                onChangeText={setQuadraNumero}
                placeholder="Digite o número da quadra"
            />

            <Text style={styles.label}>Horário:</Text>
            <TextInput
                style={styles.input}
                value={horario}
                onChangeText={setHorario}
                placeholder="Digite o horário da reserva (hh:mm)"
            />

            <Text style={styles.label}>Duração (em horas):</Text>
            <TextInput
                style={styles.input}
                value={duracao}
                onChangeText={setDuracao}
                keyboardType="numeric"
                placeholder="Digite a duração da reserva"
            />

            <Button title="Reservar" onPress={handleReserva} />
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default ReservaScreen;
