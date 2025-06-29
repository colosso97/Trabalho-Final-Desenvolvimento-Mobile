import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native'
import { styles } from './styles'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from '@expo/vector-icons/Feather';
import * as Animatable from 'react-native-animatable'

export default function Login() {
    const [input, setInput] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setsenha] = useState("");


    return (
        <SafeAreaView style={styles.conteudo}>
            <View style={styles.conteudoLogo}>
                <Animatable.Image
                    animation='flipInY'
                    style={styles.img}
                    resizeMode='contain'
                    source={require('../../../assets/serrapet-logo.png')}
                />
            </View>
            <Animatable.View delay={500} animation='fadeInUp' style={styles.conteudoForm}>
                <Text style={styles.titulo}>Usuário: </Text>
                <TextInput style={styles.input} value={input} onChangeText={setInput} />
                <Text style={styles.titulo}>Senha: </Text>
                <TextInput style={styles.input} value={senha} onChangeText={setsenha} />
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto}>Acessar</Text>
                    <Feather name="arrow-right" size={24} color="#517d86" />
                </TouchableOpacity>
            </Animatable.View>

        </SafeAreaView>
    )
}