import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const WelcomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem quibusdam facilis cupiditate fuga harum quia eum omnis porro perferendis quod excepturi vel quos suscipit dolore, id nemo, at ipsam!
                </Text>
            </View>

            <View style={styles.buttonBottom}>
                <TouchableOpacity
                    style={styles.buttonSignUp}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={styles.buttonTextSign}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#08da5f",
        justifyContent: "center",
        alignItems: "center",
        gap: 0,
        padding: 24,
    },
    content: {
        marginTop: 134,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff", 
        marginBottom: 16,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#fff", 
        textAlign: "center",
        marginBottom: 32,
    },
    buttonBottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        padding: 24,
    },
    button: {
        backgroundColor: "transparent",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 999, // Круглые края
        width: 330,
        borderWidth: 1,
        borderColor: "#fff",
        paddingTop: 16,
        paddingBottom: 16,
    },
    buttonSignUp: {
        backgroundColor: "#fff", // Синий фон кнопки
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 999, // Круглые края
        width: 330,
        paddingTop: 16,
        paddingBottom: 16,
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff", // Белый текст
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonTextSign: {
        textAlign: "center",
        color: "#08da5f", // Белый текст
        fontSize: 16,
        fontWeight: "bold",
    }
});

export default WelcomePage;
