import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [input, setInput] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setsenha] = useState("");

    
    return (
        <SafeAreaView style= {styles.container}>
            <Text style={styles.titulo}>Usuário: </Text>
            <TextInput style={styles.input} value={input} onChangeText={setInput} />
            <Text style={styles.titulo}>Senha: </Text>
            <TextInput style={styles.input} value={senha} onChangeText={setsenha} />
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.texto}>Acessar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}