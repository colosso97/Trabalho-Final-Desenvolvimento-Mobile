import { View, Text, StyleSheet } from "react-native";

interface Usuario {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    userStatus: number;
}

interface Props {
    dados: Usuario;
}

export default function UsuariosList({ dados }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Username: {dados.username}</Text>
            <Text style={styles.text}> Nome: {dados.firstName} {dados.lastName}</Text>
            <Text style={styles.text}> Email: {dados.email}</Text>
            <Text style={styles.text}> Telefone: {dados.phone}</Text>
            <Text style={styles.text}>
                Status: {dados.userStatus === 1 ? "Ativo" : "Inativo"}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 8,
        marginBottom: 14,
        borderRadius: 6,
    },
    text: {
        fontSize: 14,
        color: "#121212",
        marginBottom: 2,
    },
});