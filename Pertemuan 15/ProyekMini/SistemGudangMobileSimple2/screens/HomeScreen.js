import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    // Fitur List Inventori bawaan awal tetap utuh tidak tersentuh
    const dataInventori = [
        { id: 1, nama: 'Baut M10', stok: 500, lokasi: 'Rak A-1' },
        { id: 2, nama: 'Oli Mesin 20L', stok: 12, lokasi: 'Rak B-3' },
        { id: 3, nama: 'Packing Kayu', stok: 100, lokasi: 'Gudang Luar' },
        { id: 4, nama: 'Mur Ring 12', stok: 0, lokasi: 'Rak A-2' }, // Tetap memicu tombol darurat Latihan 1
    ];

    return (
        <View style={styles.wrapper}>
            <ScrollView style={styles.container}>

                {/* ============================================================ */}
                {/* TOMBOL MENU AKSES MINI PROYEK QC (Sistem Berdiri Terpisah)   */}
                {/* ============================================================ */}
                <View style={styles.boxMenuQC}>
                    <Button
                        title="🔍 Masuk ke Aplikasi Inspeksi QC"
                        color="#28a745" // Berwarna hijau agar kontras dengan tema biru gudang
                        onPress={() => navigation.navigate('InspectionHomeScreen')}
                    />
                </View>

                <Text style={styles.headerTitle}>Daftar Inventori Gudang</Text>

                {/* Fitur map list data inventori lamamu tetap utuh */}
                {dataInventori.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        onPress={() => navigation.navigate('DetailScreen', {
                            namaBarang: item.nama,
                            stok: item.stok
                        })}
                    >
                        <Text style={styles.itemName}>{item.nama}</Text>
                        <View style={styles.cardDetails}>
                            <Text style={styles.itemStok}>Stok: {item.stok}</Text>
                            <Text style={styles.itemLokasi}>{item.lokasi}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
                <View style={{ height: 80 }} />
            </ScrollView>

            {/* FITUR LATIHAN 2: FAB Tambah Barang Tetap Utuh & Tidak Berubah */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('TambahScreen')}
            >
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#ffffff' },
    container: { flex: 1, padding: 20 },
    boxMenuQC: { marginBottom: 20, borderRadius: 8, overflow: 'hidden', elevation: 2 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 20 },
    card: { backgroundColor: '#f9f9f9', padding: 20, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#e0e0e0' },
    itemName: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
    cardDetails: { flexDirection: 'row', justifyContent: 'space-between' },
    itemStok: { fontSize: 14, color: '#666' },
    itemLokasi: { fontSize: 14, color: '#666' },
    fab: { position: 'absolute', width: 60, height: 60, alignItems: 'center', justifyContent: 'center', right: 25, bottom: 25, backgroundColor: '#0275d8', borderRadius: 30, elevation: 5 },
    fabText: { fontSize: 28, color: 'white', fontWeight: 'bold', lineHeight: 30 }
});