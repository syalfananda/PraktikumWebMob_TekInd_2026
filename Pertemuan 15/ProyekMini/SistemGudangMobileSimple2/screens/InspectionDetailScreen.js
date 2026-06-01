import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function InspectionDetailScreen({ route, navigation }) {
    const { item } = route.params;

    // Fungsi saat tombol status ditekan
    const handlePilihStatus = (pilihanStatus) => {
        Alert.alert("QC Selesai", `Item ini ditandai sebagai: ${pilihanStatus}`);

        // TUGAS C: Mengirim data kembali ke halaman list QC untuk mengubah state warna teks
        navigation.navigate('InspectionHomeScreen', {
            itemId: item.id,
            newStatus: pilihanStatus
        });
    };

    return (
        <View style={styles.container}>
            {/* TUGAS B: Foto Item */}
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1517055729445-fa7d27394b48?w=500' }}
                style={styles.imageItem}
            />

            <View style={styles.boxDetail}>
                <Text style={styles.label}>Nama Komponen:</Text>
                <Text style={styles.value}>{item.name}</Text>

                {/* TUGAS B: Standar Kualitas */}
                <Text style={styles.label}>Standar Kualitas QC:</Text>
                <Text style={styles.boxStandar}>✓ {item.standar}</Text>
            </View>

            {/* TUGAS B: Dropdown / Tombol Status Aksi */}
            <Text style={styles.labelAksi}>Tentukan Kelayakan Item:</Text>
            <View style={styles.buttonGroup}>
                <View style={styles.btnFlex}>
                    <Button title="🟢 Lolos QC" color="#28a745" onPress={() => handlePilihStatus('Lolos')} />
                </View>
                <View style={styles.btnFlex}>
                    <Button title="🔴 Gagal QC" color="#dc3545" onPress={() => handlePilihStatus('Gagal')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffffff', padding: 20 },
    imageItem: { width: '100%', height: 200, borderRadius: 12, marginBottom: 20 },
    boxDetail: { backgroundColor: '#f8f9fa', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#eee', marginBottom: 25 },
    label: { fontSize: 13, color: '#6c757d', marginBottom: 2 },
    value: { fontSize: 18, fontWeight: 'bold', color: '#212529', marginBottom: 15 },
    boxStandar: { fontSize: 14, color: '#155724', backgroundColor: '#d4edda', padding: 10, borderRadius: 6, marginTop: 5, fontWeight: '500' },
    labelAksi: { fontSize: 15, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#333' },
    buttonGroup: { flexDirection: 'row', gap: 10 },
    btnFlex: { flex: 1 }
});