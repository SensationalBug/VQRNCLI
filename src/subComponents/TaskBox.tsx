import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { UserContext } from "../context/UserContext";

const TaskBox = ({ item, organizationId, navigation }) => {
  const { id, description, sectionDescription } = item;
  const { ticketReserve } = useContext(UserContext);
  const styles = StyleSheet.create({
    boxContainer: {
      margin: 10,
      marginBottom: 0,
      padding: 20,
      borderRadius: 10,
      backgroundColor: "#3DAE2B",
    },
    descriptionText: {
      fontSize: 18,
      color: "#fff",
    },
  });

  return (
    <TouchableOpacity
      style={styles.boxContainer}
      onPress={() => ticketReserve(organizationId, id, navigation, "Ticket")}
    >
      <Text style={{ color: "#fff", fontSize: 15 }}>Tramite:</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </TouchableOpacity>
  );
};

export default TaskBox;
