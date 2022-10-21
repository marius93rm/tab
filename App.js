import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Settings from './pages/Settings';

const { Screen, Navigator } = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size}/>)
          }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" color={color} size={size}/>)
          }}
        />
      </Navigator>


    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
