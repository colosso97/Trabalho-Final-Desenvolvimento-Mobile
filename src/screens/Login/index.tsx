import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Alert } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from '@expo/vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [usuarioSalvo, setUsuarioSalvo] = useState('');

    useEffect(() => {
        async function carregarUsuario() {
            const value = await AsyncStorage.getItem("@usuario");
            if (value) {
                setUsuarioSalvo(value);
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
        }
    }

    function handleLogin() {
        if (!usuario || !senha) {
            Alert.alert("Atenção", "Preencha todos os campos!");
            return;
        }

        gravarUsuario();
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
                    value={usuario}
                    autoCapitalize= "none"
                    onChangeText={setUsuario}
                    autoCorrect={false}
                    accessibilityLabel="Campo para digitar o nome de usuário"
                />

                <Text style={styles.titulo}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
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
