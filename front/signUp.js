import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Keyboard, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; // Импорт компонента

const SignUp = ({ navigation }) => {
    const [photo, setPhoto] = useState(null);
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    const handleAddPhoto = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Разрешение на доступ к галерее необходимо для выбора фото.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri);
        }
    };

    // Слушатель для событий клавиатуры
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        // Очистка слушателей при размонтировании компонента
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false} // Отключение вертикального индикатора прокрутки
            enableOnAndroid={true} // Включение на Android
            extraScrollHeight={170}
            
        >
            {/* Верхняя панель с кнопкой назад */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Welcome")}
                >
                    <Icon name="arrow-back-outline" size={30} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerName}>Register</Text>
            </View>

            {/* Основной контент */}
            <View style={styles.mainPart}>
                <TouchableOpacity style={styles.avatar} onPress={handleAddPhoto}>
                    {photo ? (
                        <Image source={{ uri: photo }} style={styles.image} />
                    ) : (
                        <>
                            <Icon name="person-outline" size={50} color="gray" />
                            <Text>ADD PHOTOS</Text>
                        </>
                    )}
                </TouchableOpacity>

                <View style={styles.inputs}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.inputText}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Full Name"
                            autoCapitalize="words"
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.inputText}>Birthday</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="dd/mm/yy"
                            keyboardType="default"
                            maxLength={10}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.inputText}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Phone Number"
                            keyboardType="phone-pad"
                            maxLength={15}
                        />
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.inputText}>Location/Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your location"
                            multiline={true}
                            numberOfLines={3}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollView: {
        backgroundColor: "#fff", // Установка фона белым
        paddingBottom: -100,
    },
    header: {
        backgroundColor: "#08da5f",
        paddingTop: 40,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 10,
        paddingLeft: 10,
    },
    headerName: {
        fontSize: 20,
        color: "#fff",
        marginRight: 147,
    },
    mainPart: {
        marginTop: 50,
        alignItems: "center",
    },
    avatar: {
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        borderRadius: 999,
        borderWidth: 1,
        width: 150,
        height: 150,
        borderColor: "gray",
        borderStyle: "dashed",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    inputs: {
        marginTop: 40,
        width: 340,
    },
    inputBlock: {
        marginBottom: 15,
    },
    inputText: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
    },
    button: {
        backgroundColor: "#08da5f",
        width: 280,
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 35,
    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default SignUp;
