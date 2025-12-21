import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function MedicationReminder({ navigation }) {
  const [reminders, setReminders] = useState([]);

  // Load saved reminders when screen opens
  useEffect(() => {
    const loadData = async () => {
      const data = await AsyncStorage.getItem("medications");
      if (data) setReminders(JSON.parse(data));
    };
    const unsubscribe = navigation.addListener("focus", loadData);
    return unsubscribe;
  }, []);

  // Delete a reminder
  const deleteReminder = async (index) => {
    const updated = reminders.filter((_, i) => i !== index);
    setReminders(updated);
    await AsyncStorage.setItem("medications", JSON.stringify(updated));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Medication Reminders</Text>

      {reminders.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>No reminders added yet</Text>
        </View>
      ) : (
        <FlatList
          data={reminders}
          renderItem={({ item, index }) => (
            <View style={styles.reminderCard}>
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.sub}>{item.dosage}</Text>
                <Text style={styles.sub}>{item.time}</Text>
              </View>

              <TouchableOpacity
                onPress={() => deleteReminder(index)}
                style={styles.deleteBtn}
              >
                <Text style={{ color: "#F6F4F0", fontWeight: "700" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate("AddMedication")}
      >
        <Text style={styles.addTxt}>+ Add Medication</Text>
      </TouchableOpacity>
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
  },
  emptyBox: {
    flex: 1,
    backgroundColor: "#79D7BE",
    marginTop: 25,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "#2E5077",
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: "#4DA1A9",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
  addTxt: {
    color: "#F6F4F0",
    fontWeight: "700",
  },
  reminderCard: {
    backgroundColor: "#79D7BE",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E5077",
  },
  sub: {
    color: "#2E5077",
    opacity: 0.8,
  },
  deleteBtn: {
    backgroundColor: "#4DA1A9",
    padding: 10,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
  },
});
