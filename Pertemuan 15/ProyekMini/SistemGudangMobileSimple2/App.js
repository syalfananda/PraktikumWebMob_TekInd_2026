import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screen Utama Gudang & Latihan 1-2
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import TambahScreen from './screens/TambahScreen';

// Import Screen Baru Fitur Proyek Mini QC
import InspectionHomeScreen from './screens/InspectionHomeScreen';
import InspectionDetailScreen from './screens/InspectionDetailScreen';

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
        {/* Route Bawaan Gudang */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Gudang Ind. v1.0' }} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Detail Logistik' }} />
        <Stack.Screen name="TambahScreen" component={TambahScreen} options={{ title: 'Tambah Barang' }} />

        {/* ============================================================ */}
        {/* REGISTRASI ROUTE PROYEK MINI QC                              */}
        {/* ============================================================ */}
        <Stack.Screen name="InspectionHomeScreen" component={InspectionHomeScreen} options={{ title: 'Modul QC - Home' }} />
        <Stack.Screen name="InspectionDetailScreen" component={InspectionDetailScreen} options={{ title: 'Modul QC - Detail Pengecekan' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}