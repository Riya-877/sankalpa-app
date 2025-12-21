import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function AddMedication({ navigation }) {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [time, setTime] = useState("");

  const saveReminder = async () => {
    if (!name || !dosage || !time) {
      Alert.alert("Fill all fields");
      return;
    }

    const newReminder = { name, dosage, time };

    const existing = await AsyncStorage.getItem("medications");
    const arr = existing ? JSON.parse(existing) : [];

    arr.push(newReminder);

    await AsyncStorage.setItem("medications", JSON.stringify(arr));

    navigation.goBack(); // return to list screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Medication</Text>

      <TextInput
        placeholder="Medicine Name"
        style={styles.input}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Dosage (e.g., 1 tablet)"
        style={styles.input}
        onChangeText={setDosage}
      />

      <TextInput
        placeholder="Time (9:00 AM)"
        style={styles.input}
        onChangeText={setTime}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={saveReminder}>
        <Text style={styles.saveTxt}>Save Reminder</Text>
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
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#79D7BE",
    padding: 10,
    marginBottom: 15,
  },
  saveBtn: {
    backgroundColor: "#4DA1A9",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  saveTxt: {
    color: "#F6F4F0",
    fontWeight: "700",
  },
});
