import { Text, StyleSheet } from "react-native";

export default function AppText(props) {
  return (
    <AppText>
      <Text style={[styles.text, props.style]}>{props.children}</Text>
    </AppText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
