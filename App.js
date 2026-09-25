import { StyleSheet, Text, View } from 'react-native';
import { FeatureFlags } from './config/featureFlags';

const OldProfile = () => (
  <View style={styles.card}>
    <Text style={styles.text}>App Base (Versión Estable)</Text>
  </View>
);

const NewProfile = () => (
  <View style={[styles.card, styles.newCard]}>
    <Text style={styles.text}>✨ Interfaz Renovada v2.0 (Prueba Interna)</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Demostrador de Feature Flag</Text>
      {FeatureFlags.ENABLE_NEW_PROFILE_UI ? <NewProfile /> : <OldProfile />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F7' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: { padding: 30, borderRadius: 12, backgroundColor: '#FFF', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 3 },
  newCard: { borderColor: '#007AFF', borderWidth: 2, backgroundColor: '#EBF5FF' },
  text: { fontSize: 16, fontWeight: '500', color: '#1D1D1F' }
});