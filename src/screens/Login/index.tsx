import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Alert } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from '@expo/vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';

interface FormData {
    username: string;
    password: string;
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);
    const {login} = useContext(AuthContext);


    useEffect(() => {
        async function carregarUsuario() {
            const value = await AsyncStorage.getItem("@usuario");
            if (value) {
                setUsuario(value);
            }
        }



        carregarUsuario();
    }, []);

    async function gravarUsuario() {
        try {
            await AsyncStorage.setItem("@usuario", usuario);
            Alert.alert("Sucesso", "Usuário salvo!");
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o usuário.");
            setUsuario("");
        }
    }

    async function handleLogin() {
        try {
            setCarregando(true);
            if (!email || !senha) {
                Alert.alert("Atenção", "Preencha todos os campos!");
                return;
            }

            const resposta = await axios.post(`http://192.168.1.12:8080/auth/login`, {
                username: email,
                password: senha
            });

            const dados = resposta.data;
            await AsyncStorage.setItem("@token", dados.token);         
            login(dados.token, dados.user);
            gravarUsuario();
        } catch(error) {
            console.error(error);
            
        }
    }

    return (
        <SafeAreaView style={styles.conteudo}>
            <View style={styles.conteudoLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/serrapet-logo.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.conteudoForm}>
                <Text style={styles.titulo}>Usuário:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu usuário"
                    value={email}
                    autoCapitalize="none"
                    // onChangeText={setUsuario}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    accessibilityLabel="Campo para digitar o nome de usuário"
                />

                <Text style={styles.titulo}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    value={senha}
                    onChangeText={setSenha}
                    //secureTextEntry
                    accessibilityLabel="Campo para digitar sua senha"
                />

                <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                    <Text style={styles.texto}>Acessar</Text>
                    <Feather name="arrow-right" size={24} color="#517d86" />
                </TouchableOpacity>
            </Animatable.View>
        </SafeAreaView>
    );
}