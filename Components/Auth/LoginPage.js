import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import AppText from "../Util/AppText";
import Background from "../Util/Background";
import HeroWithoutBack from "../Util/HeroWithoutBack";
import InputField from "../Util/InputField";
import Menu from "../Util/Menu";
import RegularButton from "../Util/RegularButton";
import SelectSignin from "./SelectSignin";

export default function LoginPage() {
  const [Email, setEmail] = useState("");

  const [LoginPassword, setLoginPassword] = useState("");

  const [SigninPassword, setSigninPassword] = useState("");
  const [ReEnterSigninPassword, setReEnterSigninPassword] = useState("");

  const [isPasswordSame, setisPasswordSame] = useState(true);

  const PasswordHandler = (text, setPassword) => {
    setPassword(text);
    SigninPassword == ReEnterSigninPassword
      ? setisPasswordSame(True)
      : setisPasswordSame(false);
    WarningPrinter;
  };

  const WarningPrinter = () => {
    return isPasswordSame ? null : <AppText>Passwords are not same</AppText>;
  };

  const navigation = useNavigation();

  const singinHandler = () => {
    navigation.navigate("HomePage");
  };

  const signUpHandler = () => {
    navigation.navigate("HomePage");
  };

  const [screen, setScreen] = useState(0);

  const selectScreen = (screen) => {
    setScreen(screen);
  };

  return (
    <Background>
      <HeroWithoutBack>Welcome</HeroWithoutBack>
      <Menu>
        <SelectSignin selectScreenFunction={selectScreen} />

        {screen == 0 ? (
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
              value={LoginPassword}
              onChangeText={(text) => setLoginPassword(text)}
              secureTextEntry={true}
            />
            <RegularButton
              buttonName={"Sign In"}
              onPress={() => {
                singinHandler;
              }}
            />
          </View>
        ) : screen == 1 ? (
          <View>
            <WarningPrinter />
            <InputField
              name={"Email"}
              placeholder={"Email"}
              value={Email}
              onChangeText={(text) => setEmail(text)}
            />
            <InputField
              name={"Password"}
              placeholder={"Password"}
              value={SigninPassword}
              onChangeText={(text) => PasswordHandler(text, setSigninPassword)}
              secureTextEntry={true}
            />
            <InputField
              name={"Verify-Password"}
              placeholder={"Verify-Password"}
              value={ReEnterSigninPassword}
              onChangeText={(text) =>
                PasswordHandler(text, setReEnterSigninPassword)
              }
              secureTextEntry={true}
            />
            <RegularButton
              buttonName={"Sign Up"}
              onPress={() => {
                signUpHandler;
              }}
            />
          </View>
        ) : (
          console.log("out of bound login menu selection")
        )}
      </Menu>
    </Background>
  );
}
