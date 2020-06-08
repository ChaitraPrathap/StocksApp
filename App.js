import * as React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  lightTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { StocksProvider } from "./contexts/StocksContext";

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <View style={styles.container}>
      <StocksProvider>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer theme={lightTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </StocksProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
