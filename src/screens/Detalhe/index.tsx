import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../Detalhe/styles';


export default function Detalhe() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/ShihTzu.jpg')} 
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.card}>
        <Text style={styles.nome}>🐾 Florzinha</Text>

        <View style={styles.tags}>
          <Text style={styles.tag}>Shih Tzu</Text>
          <Text style={styles.tag}>4 anos</Text>
        </View>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Quer ser meu dono?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navbar}>
        <Text style={styles.navItem}>🏠</Text>
        <Text style={styles.navItem}>🐶</Text>
        <Text style={styles.navItem}>📝</Text>
        <Text style={styles.navItem}>👤</Text>
      </View>
    </View>
  );
}
