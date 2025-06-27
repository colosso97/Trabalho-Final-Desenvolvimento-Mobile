import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import {styles  } from "./styles";



interface ActionModalProps {
    handleClose: () => void;
    handleInformacoes: () => void;
    handleContato: () => void;
}

export default function ActionModal({ handleClose, handleInformacoes, handleContato, }: ActionModalProps) {
    return (
        <View style={styles.container}>
            {/* <TextInput value={input} onChangeText={setInput} */}
            <TouchableOpacity
                style={{ flex: 1, zIndex: 9 }}
                onPress={handleClose}
            ></TouchableOpacity>

            <View>
                <TouchableOpacity style={styles.actionButton} onPress={handleInformacoes}>
                    <Text style={styles.actionText}>Informações</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={handleContato}>
                    <Text style={styles.actionText}>Contato</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
