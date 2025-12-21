import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Chatbot() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sankalpa Chatbot</Text>

      <View style={styles.chatBox}>
        <Text style={styles.bot}>👋 Hello! How can I assist you today?</Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Type your message..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendBtn}>
          <Text style={{ color: "#F6F4F0", fontWeight: "600" }}>Send</Text>
        </TouchableOpacity>
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
  chatBox: {
    flex: 1,
    padding: 15,
    backgroundColor: "#79D7BE",
    borderRadius: 15,
  },
  bot: {
    color: "#2E5077",
    fontSize: 15,
  },
  inputRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#4DA1A9",
  },
  sendBtn: {
    backgroundColor: "#4DA1A9",
    paddingHorizontal: 20,
    marginLeft: 10,
    justifyContent: "center",
    borderRadius: 12,
  },
});
