import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Фиксированный Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Icon name="arrow-back-outline" size={30} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerName}>Profile</Text>
                <Icon name="ellipsis-horizontal" size={40} color="white" />
            </View>

            {/* Прокручиваемая область контента */}
            <ScrollView style={styles.content}>
                <View style={styles.mainPart}>
                    <View style={styles.avatar}>
                        <Image source={require("../assets/user.png")} style={{width: 80, height: 80}}/>
                    </View>


                    <View style={styles.inputs}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.inputText}>Full Name</Text>
                            <Text >Jojon Suehendra</Text>
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.inputText}>Birthday</Text>
                            <Text>01.01.1970</Text>
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.inputText}>Email</Text>
                            <Text>telemedicine@medicine.med</Text>
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.inputText}>Phone Number</Text>
                            <Text>078777555</Text>
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.inputText}>Location/Address</Text>
                            <Text>st. Brooklyn 212</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Фиксированный Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Home")}>
                    <Icon name="home-outline" size={25} color="#919191" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name="notifications-outline" size={25} color="#919191" />
                    <Text style={styles.footerText}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Request")}>
                    <Icon name="add" size={35} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Schedule")}>
                    <Icon name="calendar-outline" size={25} color="#919191" />
                    <Text style={styles.footerText}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Profile")}>
                    <Icon name="person-outline" size={25} color="#08da5f" />
                    <Text style={{ color: "#08da5f", fontSize: 10 }}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#08da5f",
        paddingTop: 40,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 10,
        paddingHorizontal: 10,
        position: "absolute", // Фиксируем в верхней части экрана
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10, // Обеспечиваем, чтобы header был поверх контента
    },
    headerName: {
        fontSize: 20,
        color: "#fff",
    },
    content: {
        marginTop: 80, // Отступ, чтобы content начинался ниже header
        paddingBottom: 20, // Отступ внизу контента для предотвращения наложения на footer
        backgroundColor: "#fff",
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

    // Стиль для Footer
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        position: "absolute", // Фиксируем внизу экрана
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10, // Обеспечиваем, чтобы footer был поверх контента
    },
    footerButton: {
        alignItems: "center",
    },
    footerText: {
        color: "#919191",
        fontSize: 10,
    },
    addButton: {
        backgroundColor: "#08da5f",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ translateY: -10 }]
    },


});

export default Profile;
