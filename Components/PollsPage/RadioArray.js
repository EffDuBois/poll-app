import { useState } from "react";
import { StyleSheet, View } from "react-native";
import RadioButton from "../Util/RadioButton";

export default function RadioArray({ option_1, option_2, option_3, option_4, selectOptionFunction }) {
  const [SelectionMode, setSelectionMode] = useState();

  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    selectOptionFunction(val);
  };
  return (
    <View style={styles.array}>
        { option_1 &&
            <RadioButton
            option={option_1}
            onPress={() => updatedSwitchData(0)}
            selected={SelectionMode==1}
        />}
        { option_2 &&
            <RadioButton
            option={option_2}
            onPress={() => updatedSwitchData(1)}
            selected={SelectionMode==2}
        />}{ option_3 &&
            <RadioButton
            option={option_3}
            onPress={() => updatedSwitchData(2)}
            selected={SelectionMode==3}
        />}{ option_4 &&
            <RadioButton
            option={option_4}
            onPress={() => updatedSwitchData(3)}
            selected={SelectionMode==4}
        />}
    </View>
  );
}

const styles = StyleSheet.create({
    array: {
        flex: 1,
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: 'flex-start',
    }
})