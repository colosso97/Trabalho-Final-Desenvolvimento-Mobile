import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "../Detalhe/styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import api from "../../services/api";
import React, { useEffect, useState } from "react";

interface Pet {
  id: number;
  nome: string;
  raca: string;
  genero: string;
  foto: string;
  comentario: string;
}

type TabParamList = {
  Detalhe: { id: number };
};

export default function Detalhe() {
  const [detalhes, setDetalhes] = useState<Pet | null>(null);
  const route = useRoute<RouteProp<TabParamList, "Detalhe">>();
  const { id } = route.params;

  useEffect(() => {
    async function buscarPetPoId() {
      try {
        const response = await api.get(`/pets/${id}`);

        setDetalhes(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do pet:", error);

        setDetalhes(null);
      }
    }

    buscarPetPoId();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      {detalhes && (
        <>
          <Image
            source={{ uri: detalhes.foto }}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.card}>
            <Text style={styles.nome}>🐾 {detalhes.nome}</Text>

            <View style={styles.tags}>
              <Text style={styles.tag}>{detalhes.raca}</Text>
              <Text style={styles.tag}>{detalhes.genero}</Text>
            </View>

            <View>
              <Text style={styles.comentarioPet}>{detalhes.comentario}</Text>
            </View>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>Quer ser meu dono?</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
