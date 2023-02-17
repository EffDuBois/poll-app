import { TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

export default function RadioButton({ style, selected, onPress, option }) {
  return (
    <TouchableOpacity onPress={onPress} style={{display:"flex", flexDirection: 'row', alignItems: 'center',}}>
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#000",
            alignItems: "center",
            justifyContent: "center",
          },
          style,
        ]}
      >
        {selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: "#000",
            }}
          />
        ) : null}
      </View>
      <AppText style={{margin: 10}}>{option}</AppText>
    </TouchableOpacity>
  );
}
