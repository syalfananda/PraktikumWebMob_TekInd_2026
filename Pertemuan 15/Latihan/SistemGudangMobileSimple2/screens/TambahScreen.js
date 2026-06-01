import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function TambahScreen({ navigation }) {
    // State untuk menampung input form kosong
    const [namaBarang, setNamaBarang] = useState('');
    const [stok, setStok] = useState('');
    const [lokasi, setLokasi] = useState('');

    const handleSimpan = () => {
        if (!namaBarang || !stok || !lokasi) {
            Alert.alert("Peringatan", "Semua kolom form wajib diisi!");
            return;
        }

        Alert.alert(
            "Sukses",
            `Barang "${namaBarang}" berhasil ditambahkan (Simulasi)!`
        );
        navigation.goBack(); // Kembali ke halaman utama setelah simpan
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Form Tambah Barang Baru</Text>

            <Text style={styles.label}>Nama Barang</Text>
            <TextInput
                style={styles.input}
                placeholder="Contoh: Semen Padang"
                value={namaBarang}
                onChangeText={setNamaBarang}
            />

            <Text style={styles.label}>Jumlah Stok</Text>
            <TextInput
                style={styles.input}
                placeholder="Contoh: 150"
                keyboardType="numeric"
                value={stok}
                onChangeText={setStok}
            />

            <Text style={styles.label}>Lokasi Rak / Gudang</Text>
            <TextInput
                style={styles.input}
                placeholder="Contoh: Rak C-3"
                value={lokasi}
                onChangeText={setLokasi}
            />

            <View style={styles.btnSimpan}>
                <Button title="Simpan Barang" color="#28a745" onPress={handleSimpan} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#333',
        textAlign: 'center'
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#555',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
    },
    btnSimpan: {
        marginTop: 10,
        borderRadius: 8,
        overflow: 'hidden'
    }
});