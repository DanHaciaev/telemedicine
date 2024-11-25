import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "./front/welcomePage"; // Замените на правильный путь
import FirstPage from "./front/firstPage"; // Замените на правильный путь
import Login from "./front/login";
import Home from "./front/home";
import SignUp from "./front/signUp";
import DoctorDetails from "./front/DoctorDetails"
import Profile from "./front/profile";
import Notification from "./front/notification";
import Request from "./front/request";
import Schedule from "./front/schedule";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="DoctorDetails" component={DoctorDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Request" component={Request} options={{ headerShown: false }}/>
        <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
