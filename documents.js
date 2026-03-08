import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { uploadDocument } from "../api"; // make sure api.js has this function

export default function Documents() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/*"],
      });

      if (res.type === "cancel") return;

      setLoading(true);

      // Send file to backend
      const formData = new FormData();
      formData.append("file", {
        uri: res.uri,
        name: res.name,
        type: res.mimeType || "application/pdf",
      });

      const response = await uploadDocument(formData);

      setResult(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert("Error", "Failed to upload document.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Health Documents</Text>

      <View style={styles.box}>
        {loading ? (
          <ActivityIndicator size="large" color="#2E5077" />
        ) : result ? (
          <>
            <Text style={styles.boxText}>Prediction Result:</Text>
            <Text style={styles.boxText}>
              Risk Level: {result.prediction?.risk_level || "N/A"}
            </Text>
            <Text style={styles.boxText}>
              Glucose: {result.prediction?.Glucose || "N/A"}
            </Text>
            <Text style={styles.boxText}>
              BMI: {result.prediction?.BMI || "N/A"}
            </Text>
            <Text style={styles.boxText}>
              Age: {result.prediction?.Age || "N/A"}
            </Text>
          </>
        ) : (
          <Text style={styles.boxText}>No documents uploaded</Text>
        )}
      </View>

      <TouchableOpacity style={styles.uploadBtn} onPress={pickDocument}>
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
    padding: 20,
  },
  boxText: {
    color: "#2E5077",
    fontSize: 16,
    marginVertical: 2,
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
