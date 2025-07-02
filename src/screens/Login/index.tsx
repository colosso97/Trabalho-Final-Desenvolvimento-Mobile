import { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from '@expo/vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import Checkbox from 'expo-checkbox';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type TabParamList = {
  Home: undefined;
};

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [isSenha, setIsSenha] = useState(true);
    const navigation = useNavigation<NavigationProp<TabParamList>>();
    const { login } = useContext(AuthContext);

    useEffect(() => {
        async function carregarUsuario() {
            const value = await AsyncStorage.getItem("@email");
            if (value)  setEmail(value);
        }
        carregarUsuario();
    }, []);

    async function gravarUsuario() {
        try {
            await AsyncStorage.setItem("@email", email);
            Alert.alert("Sucesso", "E-mail salvo!");
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o usuário.");
            setEmail("");
        }
    }

    async function handleLogin() {
        try {
            if (!email || !senha) {
                Alert.alert("Atenção", "Preencha todos os campos!");
                return;
            }

            const resposta = await api.post(`/login`, {
                username: email,
                password: senha
            });

            const dados = resposta.data;
            const armazenaToken = resposta.headers.authorization;
            await AsyncStorage.setItem("@token", armazenaToken);
            login(armazenaToken, dados.user);
            if (isChecked) gravarUsuario();
            navigation.navigate("Home");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.conteudo} accessible={true}>

            <View style={styles.conteudoLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/serrapet-logo.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.conteudoForm}>
                <KeyboardAvoidingView>
                    <Text style={styles.titulo}>Usuário:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu usuário"
                        value={email}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        autoCorrect={false}
                        accessibilityLabel="Campo para digitar o nome de usuário"
                    />
                    <Text style={styles.titulo}>Senha:</Text>
                    <View style={styles.senha}>
                        <TextInput
                            style={[styles.input,  styles.inputSenha]}
                            placeholder="Digite sua senha"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={isSenha}
                            accessibilityLabel="Campo para digitar sua senha"
                        />
                        {isSenha ?
                            <TouchableOpacity style={styles.visualizarSenha} onPress={() => {setIsSenha(!isSenha)}}>
                                <Feather name="eye" size={20} color="#517d86" />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.visualizarSenha}onPress={() => {setIsSenha(!isSenha)}}>
                                <Feather name="eye-off" size={20} color="#517d86" />
                            </TouchableOpacity>
                        }
                    </View>


                    <View style={styles.conteudoCheckBox}>
                        <Checkbox style={styles.caixa} color={isChecked ? '#a8a8a8' : undefined} value={isChecked} onValueChange={setChecked} />
                        <Text style={styles.textoCheckBox}>Salvar usuário</Text>
                    </View>

                    <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                        <Text style={styles.texto}>Acessar</Text>
                        <Feather name="arrow-right" size={24} color="#517d86" />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </Animatable.View>
        </SafeAreaView >
    );
}