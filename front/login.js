import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Ошибка", "Пожалуйста, заполните все поля.");
            return;
        }

        // Можно добавить дополнительную логику для аутентификации
        Alert.alert("Успех", `Вы вошли с email: ${email}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Telemedicine</Text>

            <View style={styles.input}>

                <View style={styles.inputBlock}>
                    <Icon name="person-outline" size={20} color="#fff" style={styles.icon} />
                    <TextInput style={styles.inputPlace}
                        placeholder="Email Address"
                        placeholderTextColor="#fff"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail} />

                </View>

                <View style={styles.inputBlock}>
                    <Icon name="lock-closed-outline" size={20} color="#fff" style={styles.icon} />
                    <TextInput style={styles.inputPlace}
                        placeholder="Password"
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                         />

                </View>
            </View>

            <View style={styles.buttonBottom}>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.buttonTextLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={styles.buttonText}>SIGNUP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#08da5f",
        justifyContent: "spacebetween",
        alignItems: "center",
        
    },
    text: {
        textAlign: "center",
        color: "#ffffff", // Белый текст
        fontSize: 40,
        fontWeight: "bold",
        letterSpacing: 1,
        marginTop: 140,
    },
    input: {
        height: 120,
        marginTop: 130,
        gap: 24,
    },
    inputBlock: {
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        width: 310,
        borderWidth: 1,
        borderColor: "#fff",
        paddingRight: 18,
        paddingLeft: 5,
        paddingVertical: 10,
    },
    icon: {
        paddingHorizontal: 14,
    },
    inputPlace: {
        color: "#fff",
    },
    buttonBottom: {
        marginTop: 100,
    },
    buttonLogin: {
        backgroundColor: "#fff", // Синий фон кнопки
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 999, // Круглые края
        width: 330,
        paddingVertical: 20,
    },
    buttonTextLogin: {
        textAlign: "center",
        color: "#08da5f", // Белый текст
        fontSize: 16,
        fontWeight: "bold",
    },
    button: {
        marginTop: 60,
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff", // Белый текст
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default Login;
