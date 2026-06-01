import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Seluruh Halaman
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import TambahScreen from './screens/TambahScreen'; // Tambahan Latihan 2

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0275d8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Gudang Ind. v1.0' }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ title: 'Detail Logistik' }}
        />
        {/* Registrasi Layar Baru Latihan 2 */}
        <Stack.Screen
          name="TambahScreen"
          component={TambahScreen}
          options={{ title: 'Tambah Barang' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}