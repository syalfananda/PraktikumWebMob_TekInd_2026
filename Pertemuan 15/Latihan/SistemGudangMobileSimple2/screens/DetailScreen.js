import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function DetailScreen({ route, navigation }) {
    // Mengambil parameter logistik yang dikirim dari HomeScreen
    const { namaBarang, stok } = route.params || { namaBarang: 'Barang Kosong', stok: 0 };

    const handleRequestStok = () => {
        Alert.alert(
            "🚀 Request Berhasil",
            `Permintaan pengiriman stok darurat "${namaBarang}" berhasil diajukan ke Gudang Pusat.`
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>Nama Barang :</Text>
                <Text style={styles.value}>{namaBarang}</Text>

                <Text style={styles.label}>Sisa Stok Gudang :</Text>
                <Text style={[styles.value, stok === 0 ? styles.stokHabis : styles.stokTersedia]}>
                    {stok} Pcs
                </Text>
            </View>

            {/* ============================================================ */}
            {/* LATIHAN CONDITIONAL RENDERING                                */}
            {/* Tombol di bawah ini HANYA akan muncul jika stok sama dengan 0 */}
            {/* ============================================================ */}
            {stok === 0 && (
                <View style={styles.btnDaruratContainer}>
                    <Button
                        title="⚠ Request Stok Darurat"
                        color="#dc3545" // Warna merah tanda bahaya
                        onPress={handleRequestStok}
                    />
                </View>
            )}

            {/* Tombol navigasi standar untuk kembali */}
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Kembali"
                    color="#6c757d"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 20,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 25,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginBottom: 20,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        color: '#6c757d',
        marginBottom: 4,
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#212529',
    },
    stokTersedia: {
        color: '#28a745',
    },
    stokHabis: {
        color: '#dc3545',
    },
    btnDaruratContainer: {
        marginBottom: 10,
        borderRadius: 6,
        overflow: 'hidden',
    }
});