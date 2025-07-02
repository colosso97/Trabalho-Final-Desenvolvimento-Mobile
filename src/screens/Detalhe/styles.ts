import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F5FA",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    marginTop: -40,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5F4B8B",
    marginBottom: 10,
  },
  tags: {
    flexDirection: "row",
    marginBottom: 15,
  },
  tag: {
    backgroundColor: "#D0EDF5",
    color: "#337C87",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 14,
    marginHorizontal: 4,
  },

  comentarioPet: {
    color: "#000",
    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#80C8D0",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#80C8D0",
    width: "100%",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
  },
  navItem: {
    fontSize: 24,
    color: "#fff",
  },
});
