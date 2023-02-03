import { Text, StyleSheet } from "react-native";

export default function AppText(props) {
  return (
      <Text style={[styles.text, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
