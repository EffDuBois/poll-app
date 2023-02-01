import { Pressable, Text, View } from "react-native";
import AppText from "./Elements/AppText";
import styles from "./StyleComponents/styles";

export default function MainPage() {
  return (
    <View style={styles.background}>
      <View style={styles.hero}>
        <AppText>Welcome</AppText>
      </View>
      <View style={styles.main}>
        <Pressable>
          <AppText>Complaints</AppText>
        </Pressable>
      </View>
    </View>
  );
}

