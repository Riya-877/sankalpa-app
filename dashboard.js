import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function Dashboard({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      
      {/* Greeting Section */}
      <Text style={styles.title}>Hello, User 👋</Text>
      <Text style={styles.subtitle}>How can we help you today?</Text>

      {/* Main Functional Buttons */}
      <View style={styles.grid}>
        
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Chatbot")}
        >
          <Text style={styles.cardTitle}>Chat with Doctor</Text>
          <Text style={styles.cardText}>Get quick medical help</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Medication")}
        >
          <Text style={styles.cardTitle}>Medication Reminder</Text>
          <Text style={styles.cardText}>Never miss a dose</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Documents")}
        >
          <Text style={styles.cardTitle}>Documents</Text>
          <Text style={styles.cardText}>Upload or scan health docs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("GovernmentSchemes")}
        >
          <Text style={styles.cardTitle}>Gov Schemes</Text>
          <Text style={styles.cardText}>Ayushman Bharat & more</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4F0", // soft warm white
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2E5077" // deep slate blue
  },
  subtitle: {
    fontSize: 16,
    color: "#4DA1A9",
    marginBottom: 25,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#79D7BE",
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E5077",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 12,
    color: "#2E5077",
    opacity: 0.8,
  },
});
