import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const FirstPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Welcome")}
            >
                <Text style={styles.buttonText}>Telemedicine</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#08da5f",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff", // Белый текст
        fontSize: 40,
        fontWeight: "bold",
        letterSpacing: 1,
    }
});

export default FirstPage;
