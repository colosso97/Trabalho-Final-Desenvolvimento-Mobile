import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:'#ededed'
    },
    titulo: {
        fontSize: 18,
        color: '#555555',
        fontWeight: "bold",
        marginVertical: 10,
        marginHorizontal: 10 
    },
    input: {
        borderColor: '#555555',
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 10 
    },
    botao:{
        backgroundColor: '#7abfcf',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        padding: 10,
        marginHorizontal: 10 
    },
    texto: {
        fontSize: 18,
        color: '#fff',
        fontWeight: "bold",
        
    }
    
});