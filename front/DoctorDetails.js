import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const DoctorDetails = ({ navigation }) => {
    //   // Массив данных о врачах
    //   const doctorsData = new Array(7).fill({
    //     name: "Dudung Sokmati",
    //     specialty: "Eye Specialist",
    //     rating: 4.9,
    //     location: "St.Brooklyn 212",
    //     imageSource: require("../assets/doctor.png")
    //   });

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
                <Text style={styles.headerName}>Doctor Details</Text>
                <Icon name="ellipsis-horizontal" size={40} color="white" />
            </View>

            {/* Прокручиваемая область контента */}
            <ScrollView style={styles.content}>
                <View style={styles.doctor}>
                    <View style={styles.doctorInfo}>
                        <Image source={require("../assets/doctor.png")} style={styles.doctorImg} />
                        <View style={styles.doctorName}>
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

                    <View style={styles.line}></View>


                    <View style={styles.doctorDesc}>
                        <Text style={styles.doctorDesc1}>Short Description</Text>
                        <Text style={styles.doctorDesc2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi libero maiores laboriosam quas natus adipisci dolores iste vitae assumenda repellat facilis error, qui laborum harum eos impedit minima ducimus repellendus!</Text>
                    </View>


                    <View style={styles.doctorLocation}>
                        <Text style={styles.locationn}>Location</Text>
                        <View style={styles.point}>
                            <Icon name="location-outline" size={30} color="gray" />
                            <Text style={styles.location}>St.Brooklyn 212</Text>
                        </View>
                    </View>

                    <View>
                        <Image style={styles.map} source={require("../assets/map.jpg")} />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Request")}>
                        <Text style={styles.buttonText}>Request</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Фиксированный Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Home")}>
                    <Icon name="home-outline" size={25} color="#08da5f" />
                    <Text style={{ color: "#08da5f", fontSize: 10 }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Icon name="notifications-outline" size={25} color="#919191" />
                    <Text style={styles.footerText}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Add")}>
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
        paddingBottom: 20, // Отступ внизу контента для предотвращения наложения на footer
        backgroundColor: "#fff",
    },
    doctor: {
        justifyContent: "space-between",
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "center",
        // marginBottom: 15,
    },
    doctorImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
    doctorInfo: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    doctorName: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: 90
    },
    name: {
        fontWeight: "bold",
        color: "#4c4c4d",
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
    doctorSpec: {
        color: "lightgreen",
    },
    doctorLocation: {
        flexDirection: "column",
        marginTop: 8,
        marginLeft: -170,
        alignItems: "flex-start",
        gap: 10,
    },
    location: {
        color: "#686c6c",
        marginLeft: 6,
    },

    map: {
        width: 340,
        height: 220,
        marginTop: 20,
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
    line: {
        height: 1, // Толщина черты
        backgroundColor: "#d3d3d3", // Светло-серый цвет
        alignSelf: "stretch", // Занимает всю ширину контейнера
        marginBottom: 30, // Отступы сверху и снизу
    },
    doctorDesc: {
        gap: 12,
    },
    doctorDesc1: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    },
    doctorDesc2: {
        color: "#686c6c"
    },
    locationn: {
        fontSize: 18,
        fontWeight: "bold"
    },

    point: {
        flexDirection: "row",
        alignItems: "center"
    },

    button: {
        marginTop: 20,
        backgroundColor: "#08da5f",
        paddingVertical: 20,
        width: "100%",
        marginBottom: 70,
        borderRadius: 50,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    }

});

export default DoctorDetails;
