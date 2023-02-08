import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { auth } from "../../firebase";
import Background from "../Util/Background";
import HeroWithoutBack from "../Util/HeroWithoutBack";
import InputField from "../Util/InputField";
import Menu from "../Util/Menu";
import RegularButton from "../Util/RegularButton";
import SelectButton from "../Util/SelectButton";

export default function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.Email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Background>
      <HeroWithoutBack>Welcome</HeroWithoutBack>
      <Menu>
        <View style={styles.buttonArray}>
          <SelectButton buttonName={"Sign-in"} />
          <SelectButton
            buttonName={"Sign-up"}
            onPress={() => {
              
            }}
          />
        </View>

        <View>
          <InputField
            name={"Email"}
            placeholder={"Email"}
            value={Email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputField
            name={"Password"}
            placeholder={"Password"}
            value={Password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <RegularButton buttonName={"Sign Up"} onPress={() => {
              handleSignUp;
            }} />
      </Menu>
    </Background>
  );
}

const styles = StyleSheet.create({
  buttonArray: {
    flexDirection: "row",
    height: '20%',
  }
})