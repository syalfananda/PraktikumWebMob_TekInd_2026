import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function InspectionHomeScreen({ navigation, route }) {
    // Inisialisasi data awal item yang perlu diinspeksi
    const [items, setItems] = useState([
        { id: '1', name: 'Mainboard Panel V2', status: 'Pending', standar: 'Solder komponen harus rapi & tidak short' },
        { id: '2', name: 'Kabel Flexi LCD', status: 'Pending', standar: 'Kabel tidak tekuk/patah, pin emas utuh' },
        { id: '3', name: 'Adaptor Power 12V', status: 'Pending', standar: 'Output tegangan stabil di angka 12V' },
    ]);

    // TUGAS C (Simulasi State Management):
    // Menangkap data balik dari InspectionDetailScreen saat status diubah
    useEffect(() => {
        if (route.params?.itemId && route.params?.newStatus) {
            const updatedItems = items.map(item =>
                item.id === route.params.itemId
                    ? { ...item, status: route.params.newStatus }
                    : item
            );
            setItems(updatedItems);
        }
    }, [route.params?.itemId, route.params?.newStatus]);

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Daftar Item Inspeksi QC</Text>

            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('InspectionDetailScreen', { item })}
                    >
                        <View>
                            {/* TUGAS C: Jika status Gagal, warna teks item ini otomatis berubah MERAH */}
                            <Text style={[
                                styles.itemName,
                                item.status === 'Gagal' ? styles.teksGagal : styles.teksNormal
                            ]}>
                                {item.name}
                            </Text>
                            <Text style={styles.itemSub}>Kriteria: {item.standar.substring(0, 30)}...</Text>
                        </View>

                        {/* Badge Status */}
                        <View style={[
                            styles.badge,
                            item.status === 'Lolos' ? styles.bgLolos : item.status === 'Gagal' ? styles.bgGagal : styles.bgPending
                        ]}>
                            <Text style={styles.badgeText}>{item.status}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffffff', padding: 20 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 20 },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 18,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemName: { fontSize: 16, fontWeight: 'bold' },
    itemSub: { fontSize: 12, color: '#888', marginTop: 4 },
    teksNormal: { color: '#333' },
    teksGagal: { color: '#dc3545' }, // Warna merah khusus tugas C
    badge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
    badgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
    bgPending: { backgroundColor: '#6c757d' },
    bgLolos: { backgroundColor: '#28a745' },
    bgGagal: { backgroundColor: '#dc3545' }
});