import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Notification = ({ navigation }) => {

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
                <Text style={styles.headerName}>Notification</Text>
                <Icon name="ellipsis-horizontal" size={40} color="white" />
            </View>

            {/* Прокручиваемая область контента */}
            <ScrollView style={styles.content}>
                <View style={styles.topInfo}>
                    <Image style={styles.topImg} source={require("../assets/accept.png")}></Image>
                    <Text style={styles.request}>Your Request Has Been Approved</Text>
                    <Text style={styles.requestText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia delectus exercitationem consequatur pariatur vitae ipsum iure harum quod odit atque blanditiis, quidem omnis labore deleniti quis nesciunt vero velit quae.</Text>
                </View>

                <View style={styles.requestDetails}>
                    <Text style={styles.detailsText}>Request Details</Text>
                    <View style={styles.requestInfo}>
                        <Text style={styles.info}>Name</Text>
                        <Text style={styles.infoText}>Jojon Suehendra</Text>
                    </View>
                    <View style={styles.requestInfo}>
                        <Text style={styles.info}>Deseases</Text>
                        <Text style={styles.infoText}>Sore Eyes</Text>
                    </View>
                    <View style={styles.requestInfo}>
                        <Text style={styles.info}>Location</Text>
                        <Text style={styles.infoText}>St. Brooklyn 212</Text>
                    </View>
                    <View style={styles.requestInfo}>
                        <Text style={styles.info}>Description</Text>
                        <Text style={styles.infoText}>Aku ingin menjadi setitik awan kecil di langint bersama mentari yaga hah</Text>
                    </View>
                </View>

                <View style={styles.doctor}>
                    <Text style={styles.doctorText}>Doctor</Text>
                    <View style={styles.doctorName}>
                        <Image style={styles.doctorImg} source={require("../assets/doctor.png")}></Image>
                        <View style={styles.doctorInfo}>
                            <Text style={styles.name}>Dudung Sokmati</Text>
                            <Text style={styles.doctorSpec}>Eye Specialist</Text>
                            <View style={styles.star}>
                                {Array(5)
                                    .fill(null)
                                    .map((_, index) => (
                                        <Icon key={index} name="star" size={20} color="gold" />
                                    ))}
                                <Text style={styles.starText}>4.9</Text>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.buttonsBottom}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCancel}>
                        <Text style={styles.cancelText}>Cancel Request</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Фиксированный Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Home")}>
                    <Icon name="home-outline" size={25} color="#919191" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Notification")}>
                    <Icon name="notifications-outline" size={25} color="#08da5f" />
                    <Text style={{ color: "#08da5f", fontSize: 10 }}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Request")}>
                    <Icon name="add" size={35} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Schedule")}>
                    <Icon name="calendar-outline" size={25} color="#919191" />
                    <Text style={styles.footerText}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Profile")}>
                    <Icon name="person-outline" size={25} color="#919191" />
                    <Text style={styles.footerText}>Profile</Text>
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
        paddingBottom: 100, // Отступ внизу контента для предотвращения наложения на footer
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },

    topInfo: {
        marginTop: 50,
        alignItems: "center",
        gap: 30
    },

    topImg: {
        width: 150,
        height: 150,
    },

    request: {
        width: 250,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },

    requestText: {
        textAlign: "center",
        color: "#686c6c"
    },

    requestDetails: {
        marginVertical: 50,
        gap: 15
    },

    detailsText: {
        color: "#08da5f",
        fontWeight: "bold"
    },

    requestInfo: {
        gap: 5
    },

    info: {
        fontWeight: "bold",
    },

    infoText: {
        color: "#686c6c"
    },

    doctorText: {
        color: "#08da5f",
        fontWeight: "bold"
    },

    doctorName: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#d3d3d3",
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
    },

    doctorImg: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 20,
    },

    doctorInfo: {
        flexDirection: "column",
        height: 90,
        justifyContent: "space-between"
    },

    name: {
        fontWeight: "bold"
    },

    doctorSpec: {
        color: "#08da5f"
    },

    star: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 6,
        alignItems: "center",
    },
    starText: {
        color: "#919191",
        marginLeft: 10,
        fontSize: 18,
    },

    buttonsBottom: {
        marginTop: 40,
        marginBottom: 100,
        gap: 30,
    },

    button: {
        paddingVertical: 20,
        backgroundColor: "#08da5f",
        borderRadius: 50,
    },

    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    },

    buttonCancel: {
        borderWidth: 2,
        borderColor: "#d3d3d3",
        paddingVertical: 20,
        borderRadius: 50,
    },

    cancelText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#b7b6b6"
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

export default Notification;
