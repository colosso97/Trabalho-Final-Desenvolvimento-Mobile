import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: '#ededed'
    },
    conteudoLogo: {
        flex: 1,
        backgroundColor: '#ededed',
        alignContent: "center",
        justifyContent: "center",
        margin: 20
    },
    conteudoForm: {
        flex: 2,
        backgroundColor: '#7abfcf',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 20
    },
    img: {
        width: "100%"
    },
    titulo: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: "bold",
        marginVertical: 10,
        marginHorizontal: 10,

    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 10,
        boxShadow: '5px 5px 10px rgb(67, 67, 67)',
        
    },
    inputSenha: {
        flex: 1
    },
    senha: {
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        alignItems: "center",
        position: "relative"
    },
    visualizarSenha:{
        position: "absolute",
        marginRight: 20
    },
    conteudoCheckBox:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    caixa:{
        margin: 10
    },
    textoCheckBox: {
        color: '#ffffff',
        fontWeight: "bold"
    },
    botao: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
        padding: 10,
        marginHorizontal: 10,
        boxShadow: '5px 5px 10px rgb(67, 67, 67)'
    },
    texto: {
        color: '#517d86',
        fontWeight: "bold"
    }

});