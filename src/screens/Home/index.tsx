import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome6";
import api from "../../services/api";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface DadosPet {
  id: number;
  nome: string;
  raca: string;
  foto: string;
}

type TabParamList = {
  Perfil: undefined;
};

export default function Home() {
  const [pets, setPets] = useState<DadosPet[]>([]);
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const [filtroEspecie, setFiltroEspecie] = useState("");

  //const buscarPets = async () => {

  useEffect(() => {
    async function buscarPets() {
      try {
        const response = await api.get("/pets");
        //console.log("Resposta da api:", response.data);

        if (Array.isArray(response.data.content)) {
          // aqui ta verificando se o que tem no content é mesmo um array de pets pra então fazer o .map()
          setPets(response.data.content); // response.data é a resposta inteira da minh api, response.data.content é  o array real dos mmeus pets
        } else {
          console.error("Erro na resposta da API:", response.data); // essa linha ta aqui porque mesmo retornando 200 os dados podem vir em formato "inesperado", tipo content: null
          setPets([]);
        }
      } catch (error) {
        /// esse catch captura erros de execução, por ex API caiu ou deu erro de rede
        console.error("Erro ao buscar pets:", error);
      }
    }

    buscarPets();
  }, []);

  const buscarPorEspecie = async (especie: string) => {
    try {
      const response = await api.get(`pets/especie/${especie}`);
      if (Array.isArray(response.data)) {
        setPets(response.data);
      } else {
        console.error("Erro na resposta da API:", response.data);
        setPets([]);
      }
    } catch (error) {
      console.error("Erro ao buscar pets dessa espécie", error);
      setPets([]);
    }
  };

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
        <View style={styles.cardUsuario}>
          <Image
            style={styles.imgUsuario}
            source={require("../../../assets/usuario-exemplo.png")}
          />
          <Text style={styles.nomeUsuario}>Olá, Marcelo!</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.cardDestaque}>
        <View style={styles.destaqueTextoContainer}>
          <Text style={styles.destaqueTexto}>Encontre seu novo pet</Text>
        </View>
        <Image
          source={require("../../../assets/adocao.png")}
          style={styles.destaqueImagem}
          resizeMode="contain"
        />
      </View>

      <View style={styles.cardCategorias}>
        <Text style={styles.categoriasTitulo}>Categorias</Text>
        <View style={styles.categoriasWrapper}>
          <TouchableOpacity onPress={() => buscarPorEspecie("cachorro")}>
            <View style={styles.categoriaCard}>
              <FontAwesome6 name="dog" size={24} color="#7abfcf" />
              <Text style={styles.categoriaTexto}>Cachorros</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => buscarPorEspecie("gato")}>
            <View style={styles.categoriaCard}>
              <FontAwesome5 name="cat" size={24} color="#7abfcf" />
              <Text style={styles.categoriaTexto}>Gatos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => buscarPorEspecie("passaro")}>
            <View style={styles.categoriaCard}>
              <MaterialCommunityIcons name="bird" size={24} color="#7abfcf" />
              <Text style={styles.categoriaTexto}>Pássaros</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.categoriaCard}>
            <MaterialCommunityIcons name="rabbit" size={24} color="#7abfcf" />
            <Text style={styles.categoriaTexto}>Outros</Text>
          </View>
        </View>
      </View>

      <View style={styles.listaDog}>
        {pets.map((pet) => (
          <View key={pet.id} style={styles.cardDog}>
            <Image style={styles.imgDog} source={{ uri: pet.foto }} />
            <View style={styles.dogInfo}>
              <Text style={styles.dogNome}>{pet.nome}</Text>
              <Text style={styles.dogRaca}>{pet.raca}</Text>
            </View>

            <View style={styles.detalhesContainer}>
              <Image
                source={require("../../../assets/patinhas.png")}
                style={styles.patinha}
              />
              <Text style={styles.verDetalhes}>Ver Detalhes</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
