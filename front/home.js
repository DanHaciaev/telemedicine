import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
  // Массив данных о врачах
  const doctorsData = new Array(7).fill({
    name: "Dudung Sokmati",
    specialty: "Eye Specialist",
    rating: 4.9,
    location: "St.Brooklyn 212",
    imageSource: require("../assets/doctor.png")
  });

  return (
    <View style={styles.container}>
      {/* Фиксированный Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Icon name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerName}>Doctor List</Text>
        <Icon name="ellipsis-horizontal" size={40} color="white" />
      </View>

      {/* Прокручиваемая область контента */}
      <ScrollView style={styles.content}>
        <View style={styles.doctors}>
          {/* Использование .map() для отрисовки врачей */}
          {doctorsData.map((doctor, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("DoctorDetails")}>
              <View style={styles.doctor}>
                <Image source={doctor.imageSource} style={styles.doctorImg} />
                <View style={styles.doctorInfo}>
                  <View style={styles.doctorName}>
                    <Text style={styles.name}>{doctor.name}</Text>
                    <View style={styles.star}>
                      <Icon name="star" size={20} color="gold" />
                      <Text style={styles.starText}>{doctor.rating}</Text>
                    </View>
                  </View>
                  <Text style={styles.doctorSpec}>{doctor.specialty}</Text>
                  <View style={styles.doctorLocation}>
                    <Icon name="location-outline" size={30} color="gray" />
                    <Text style={styles.location}>{doctor.location}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Фиксированный Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home-outline" size={25} color="#08da5f" />
          <Text style={{color: "#08da5f", fontSize: 10}}>Home</Text>
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
    backgroundColor: "#edf0ee",
  },
  doctors: {
    marginVertical: 20,
    marginHorizontal: 15,
    marginBottom: 60
  },
  doctor: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 15,
  },
  doctorImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  doctorInfo: {
    width: 210,
  },
  doctorName: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    color: "#4c4c4d",
  },
  star: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 55,
    alignItems: "center",
  },
  starText: {
    color: "#919191",
    fontSize: 18,
  },
  doctorSpec: {
    color: "lightgreen",
  },
  doctorLocation: {
    flexDirection: "row",
    marginTop: 8,
    marginLeft: -5,
    alignItems: "center",
  },
  location: {
    color: "#686c6c",
    marginLeft: 6,
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
    transform: [{translateY: -10}]
  },
});

export default Home;
