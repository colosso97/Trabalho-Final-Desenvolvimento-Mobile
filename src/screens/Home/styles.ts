import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

  nomeUsuario: {
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

  ///testando outro card

  container: {
    flex: 1,
    backgroundColor: "#fef6f2",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  petCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
    elevation: 2,
  },
  petNome: {
    fontSize: 18,
    color: "#333",
    marginLeft: 50,
    fontFamily: "LeagueSpartan_400Regular",
  },
  petRaca: {
    fontSize: 13,
    color: "#666",
    marginLeft: 50,
    fontFamily: "LeagueSpartan_400Regular",
  },
  btnDetalhes: {
    backgroundColor: "#7abfcf",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  petCardWrapper: {
    marginBottom: 30,
    position: "relative",
    alignItems: "center",
  },

  petCard2: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 90, //  espaço para a imagem sobrepor
    elevation: 2,
  },

  /// efeito de overlap da imagem
  petImagem: {
    width: 110,
    height: 110,
    borderRadius: 50,
    position: "absolute",
    top: -35,
    left: 10,
    zIndex: 10,
    borderWidth: 4,
    borderColor: "#fff",
  },

  petInfo: {
    flex: 1,
    paddingRight: 20,
  },
});
