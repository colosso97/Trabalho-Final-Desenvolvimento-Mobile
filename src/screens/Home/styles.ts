import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerNet: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  offlineContainer: {
    flex: 1,
    backgroundColor: "#b52424",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    height: 100,
  },
  offlineText: {
    color: "#fff",
    marginLeft: 30,
    marginRight: 20,
  },

  cardUsuario: {
    backgroundColor: "#7abfcf",
    color: "#fff",
    padding: 10,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  imgUsuario: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  nome: {
    padding: 10,
    fontFamily: "LeagueSpartan_600SemiBold",
    fontSize: 15,
    color: "#fff",
  },

  cardDestaque: {
    flexDirection: "row",
    backgroundColor: "#febf4b",
    width: 350,
    height: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    alignSelf: "center",
    marginBottom: 20,
  },

  destaqueTextoContainer: {
    flex: 1,
    justifyContent: "center",
  },

  destaqueTexto: {
    fontSize: 22,
    fontFamily: "LeagueSpartan_600SemiBold",
    color: "#fff",
  },

  destaqueImagem: {
    width: 140,
    height: 200,
    marginLeft: 10,
  },

  cardCategorias: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  categoriasTitulo: {
    fontSize: 18,
    fontFamily: "LeagueSpartan_600SemiBold",
    marginBottom: 10,
    color: "#333",
  },

  categoriasWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  categoriaCard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 70,
    height: 70,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },

  categoriaTexto: {
    fontSize: 12,
    fontFamily: "LeagueSpartan_400Regular",
    marginTop: 5,
    textAlign: "center",
  },

  listaDog: {
    marginTop: 2,
  },

  cardDog: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },

  imgDog: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },

  dogInfo: {
    flex: 1,
  },

  dogNome: {
    fontFamily: "LeagueSpartan_600SemiBold",
    fontSize: 20,
    fontWeight: "bold",
  },

  dogRaca: {
    fontFamily: "LeagueSpartan_400Regular",
    fontSize: 16,
    color: "#666",
  },

  detalhesContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  patinha: {
    width: 32,
    height: 32,
    marginBottom: 4,
    marginRight: 10,
  },

  verDetalhes: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginRight: 10,
    fontFamily: "LeagueSpartan_400Regular",
  },
});
