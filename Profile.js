import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      
      {/* Profile Header */}
      <Text style={styles.header}>My Profile</Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarLetter}>U</Text>
        </View>

        <Text style={styles.name}>User Name</Text>
        <Text style={styles.email}>user@email.com</Text>
      </View>

      {/* Options */}
      <View style={styles.options}>
        
        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionText}>Medical History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionText}>Saved Doctors</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>

      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Logout</Text>
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
    fontSize: 26,
    fontWeight: "700",
    color: "#2E5077",
    marginBottom: 25,
  },
  profileCard: {
    backgroundColor: "#79D7BE",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginBottom: 30,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    backgroundColor: "#4DA1A9",
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarLetter: {
    color: "#F6F4F0",
    fontSize: 45,
    fontWeight: "700",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2E5077",
  },
  email: {
    fontSize: 14,
    color: "#2E5077",
    opacity: 0.7,
    marginTop: 4,
  },
  options: {
    marginBottom: 20,
  },
  optionCard: {
    backgroundColor: "#79D7BE",
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    color: "#2E5077",
    fontWeight: "600",
  },
  logoutBtn: {
    backgroundColor: "#4DA1A9",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    color: "#F6F4F0",
    fontWeight: "700",
  },
});
