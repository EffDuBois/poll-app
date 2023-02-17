import { useState } from "react";
import { StyleSheet, View } from "react-native";
import RadioButton from "../Util/RadioButton";

export default function RadioArray({ option_1, option_2, option_3, option_4, option_5, selectOptionFunction, style }) {
  const [SelectionMode, setSelectionMode] = useState();

  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    selectOptionFunction(val);
  };
  return (
    <View style={[styles.array, style]}>
        { option_1 &&
            <RadioButton
            option={option_1}
            onPress={() => updatedSwitchData(1)}
            selected={SelectionMode==1}
        />}
        { option_2 &&
            <RadioButton
            option={option_2}
            onPress={() => updatedSwitchData(2)}
            selected={SelectionMode==2}
        />}{ option_3 &&
            <RadioButton
            option={option_3}
            onPress={() => updatedSwitchData(3)}
            selected={SelectionMode==3}
        />}{ option_4 &&
            <RadioButton
            option={option_4}
            onPress={() => updatedSwitchData(4)}
            selected={SelectionMode==4}
        />}{ option_5 &&
            <RadioButton
            option={option_5}
            onPress={() => updatedSwitchData(5)}
            selected={SelectionMode==5}
        />}
    </View>
  );
}

const styles = StyleSheet.create({
    array: {
        margin: 5,
        flex: 1,
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'flex-start',
        
    }
})