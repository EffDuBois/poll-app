import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SelectButton from "../Util/SelectButton";

export default function SelectSignin({ selectScreenFunction }) {
  const [SelectionMode, setSelectionMode] = useState(1);

  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    selectScreenFunction(val);
  };
  return (
    <View style={styles.array}>
      <SelectButton
        buttonName={"Sign-in"}
        onPress={() => updatedSwitchData(0)}
        style={{
          backgroundColor:
            SelectionMode == 0
              ? "rgba(255, 137, 59, 1)"
              : "rgba(255, 137, 59, 0.3)",
        }}
      />
      <SelectButton
        buttonName={"Sign-up"}
        onPress={() => updatedSwitchData(1)}
        style={{
          backgroundColor:
            SelectionMode == 1
              ? "rgba(255, 137, 59, 1)"
              : "rgba(255, 137, 59, 0.3)",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  array: {
    flexDirection: "row",
    height: "20%",
  },
});
