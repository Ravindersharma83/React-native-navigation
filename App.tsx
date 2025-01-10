// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/Screens/HomeScreen';
// import AboutScreen from './src/Screens/AboutScreen';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{ 
//             title: 'Home Page',
//             headerStyle: {
//               backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }} 
//         />
//         <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About Page' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

import * as React from 'react';
import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}