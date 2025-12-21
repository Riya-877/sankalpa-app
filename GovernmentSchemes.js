import { View, Text, StyleSheet } from "react-native";

export default function GovernmentSchemes() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Government Health Schemes</Text>

      <View style={styles.schemeCard}>
        <Text style={styles.schemeTitle}>Ayushman Bharat</Text>
        <Text style={styles.schemeText}>Free treatment up to ₹5 lakh per family.</Text>
      </View>

      <View style={styles.schemeCard}>
        <Text style={styles.schemeTitle}>PM-JAY</Text>
        <Text style={styles.schemeText}>Cashless hospitalization services.</Text>
      </View>

      <View style={styles.schemeCard}>
        <Text style={styles.schemeTitle}>Jan Aushadhi Kendra</Text>
        <Text style={styles.schemeText}>Affordable medicines at low prices.</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4F0",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2E5077",
    marginBottom: 20,
  },
  schemeCard: {
    backgroundColor: "#79D7BE",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },
  schemeTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E5077",
  },
  schemeText: {
    fontSize: 14,
    color: "#2E5077",
    marginTop: 5,
  },
});
