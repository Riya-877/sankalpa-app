import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Documents() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Health Documents</Text>

      <View style={styles.box}>
        <Text style={styles.boxText}>No documents uploaded</Text>
      </View>

      <TouchableOpacity style={styles.uploadBtn}>
        <Text style={styles.uploadText}>Upload / Scan Document</Text>
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
  box: {
    flex: 1,
    backgroundColor: "#79D7BE",
    marginTop: 25,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "#2E5077",
    fontSize: 16,
  },
  uploadBtn: {
    backgroundColor: "#4DA1A9",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  uploadText: {
    color: "#F6F4F0",
    fontWeight: "700",
  },
});
