import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* ScrollView agar seluruh halaman (termasuk header) bisa di-scroll */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Bagian Header */}
        <View style={styles.header}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
          <Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
          <Text style={styles.headerSubtitle}>Sistem Monitoring Produksi</Text>
        </View>

        <View style={styles.content}>

          {/* ================= TUGAS PROYEK MINI: PROFIL MESIN ================= */}
          <Text style={styles.sectionTitle}>Profil Mesin Produksi</Text>

          <View style={styles.machineProfileCard}>
            {/* Sisi Kiri: Foto Mesin dari file mesin.png */}
            <Image
              source={require('./assets/mesin.png')}
              style={styles.machineImage}
            />

            {/* Sisi Kanan: Detail Teks Mesin (Menggunakan Flexbox Row) */}
            <View style={styles.machineDetails}>
              <Text style={styles.machineName}>Beverage Filling Machine Line 1</Text>
              <Text style={styles.machineInfo}>Tahun Pembuatan: 2021</Text>

              {/* Status Mesin */}
              <View style={styles.statusBadge}>
                <Text style={styles.statusBadgeText}>AKTIF / NORMAL</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />
          {/* =================================================================== */}

          {/* LATIHAN 2: MONITORING GUDANG (LENGKAP A SAMPAI J) */}
          <Text style={styles.sectionTitle}>Status Monitor Gudang</Text>

          {/* Status Gudang A */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang A...")}
          >
            <Text style={styles.cardTitle}>Status Gudang A</Text>
            <Text style={styles.cardValue}>Kapasitas: 85%</Text>
            <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
          </TouchableOpacity>

          {/* Status Gudang B */}
          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>Status Gudang B</Text>
            <Text style={styles.cardValue}>Kapasitas: 95%</Text>
            <Text style={styles.cardStatus}>PENUH</Text>
          </View>

          {/* Status Gudang C */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Status Gudang C</Text>
            <Text style={styles.cardValue}>Kapasitas: 40%</Text>
            <Text style={[styles.cardStatus, { color: '#3498db' }]}>AMAN</Text>
          </View>

          {/* Status Gudang D */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Status Gudang D</Text>
            <Text style={styles.cardValue}>Kapasitas: 60%</Text>
            <Text style={[styles.cardStatus, { color: '#3498db' }]}>AMAN</Text>
          </View>

          {/* Status Gudang E */}
          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>Status Gudang E</Text>
            <Text style={styles.cardValue}>Kapasitas: 92%</Text>
            <Text style={styles.cardStatus}>HAMPIR PENUH</Text>
          </View>

          {/* Status Gudang F */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Status Gudang F</Text>
            <Text style={styles.cardValue}>Kapasitas: 15%</Text>
            <Text style={[styles.cardStatus, { color: '#3498db' }]}>KOSONG / AMAN</Text>
          </View>

          {/* Status Gudang G */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Status Gudang G</Text>
            <Text style={styles.cardValue}>Kapasitas: 70%</Text>
            <Text style={[styles.cardStatus, { color: '#27ae60' }]}>OPTIMAL</Text>
          </View>

          {/* Status Gudang H */}
          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>Status Gudang H</Text>
            <Text style={styles.cardValue}>Kapasitas: 98%</Text>
            <Text style={styles.cardStatus}>KRITIS / PENUH</Text>
          </View>

          {/* Status Gudang I */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Status Gudang I</Text>
            <Text style={styles.cardValue}>Kapasitas: 55%</Text>
            <Text style={[styles.cardStatus, { color: '#3498db' }]}>AMAN</Text>
          </View>

          {/* Status Gudang J */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Status Gudang J</Text>
            <Text style={styles.cardValue}>Kapasitas: 30%</Text>
            <Text style={[styles.cardStatus, { color: '#3498db' }]}>AMAN</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 5,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 13,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },

  // STYLE KHUSUS PROYEK MINI (FLEXBOX ROW)
  machineProfileCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  machineImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  machineDetails: {
    flex: 1,
    marginLeft: 15,
  },
  machineName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  machineInfo: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: '#2ecc71',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  statusBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#dcdde1',
    marginVertical: 25,
  },

  // STYLE CARD GUDANG
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  cardWarning: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 13,
    color: '#7f8c8d',
  },
  cardStatus: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 5,
    textAlign: 'right'
  }
});