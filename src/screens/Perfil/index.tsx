import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { StatusBar } from 'expo-status-bar';
import UsuariosList from '../../components/UsuariosList';

interface Usuario {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}

export default function Perfil() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await api.put('/user'); // ajuste para o endpoint correto
        setUsuarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários", error);
      }
    }

    fetchUsuarios();
  }, []);

  async function handleRegister() {
    const novoUsuario = {
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
      userStatus: 1,
    };

    try {
      const response = await api.post('/usuarios', novoUsuario); // ajuste para o endpoint correto
      console.log("Usuário cadastrado com sucesso", response.data);

      // Atualiza a lista localmente
      setUsuarios((prev) => [...prev, response.data]);

      // Limpa os campos
      setUsername("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar //{barStyle="default"}
      />

      <Text style={styles.label}>Username:</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} />

      <Text style={styles.label}>Primeiro Nome:</Text>
      <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />

      <Text style={styles.label}>Segundo Nome:</Text>
      <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.list}
        data={usuarios}
        renderItem={({ item }) => <UsuariosList dados={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  list: {
    marginTop: 16,
  },
});