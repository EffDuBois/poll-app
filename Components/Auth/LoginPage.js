import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, View } from "react-native";

import Background from "../Util/Background";
import HeroWithoutBack from "../Util/HeroWithoutBack";
import InputField from "../Util/InputField";
import Menu from "../Util/Menu";
import RegularButton from "../Util/RegularButton";
import SelectSignin from "./SelectSignin";

import { useSelector, useDispatch } from "react-redux";
import { setEmail, setLoginPassword } from "../Redux/Actions/Complaint";

export default function LoginPage() {
  // const [Email, setEmail] = useState("");

  // const [LoginPassword, setLoginPassword] = useState("");
  const { email, loginPassword } = useSelector(
    (state) => state.userLoginReducer
  );

  const dispatch = useDispatch();

  const [SigninPassword, setSigninPassword] = useState("");
  const [ReEnterSigninPassword, setReEnterSigninPassword] = useState("");

  const PasswordHandler = (password, setFunction) => {
    setFunction(password);
  };

  const validateData = () => {
    if (!email) {
      console.log("invalid email", email);
      Alert.alert("Email Mandatory", "Email field can't be empty");
      return false;
    }
    return true;
  };

  const singinHandler = () => {
    if (validateData()) {
      console.log(email);
      navigation.replace("HomePage");
    }
  };

  const signUpHandler = () => {
    if (validateData) {
      navigation.replace("HomePage");
    }
  };

  //navigation
  const navigation = useNavigation();
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
              value={email}
              onChangeText={(value) => dispatch(setEmail(value))}
            />
            <InputField
              name={"Password"}
              placeholder={"Password"}
              value={loginPassword}
              onChangeText={(value) => dispatch(setLoginPassword(value))}
              secureTextEntry={true}
            />
            <RegularButton buttonName={"Sign In"} onPress={singinHandler} />
          </View>
        ) : screen == 1 ? (
          <View>
            <InputField
              name={"Email"}
              placeholder={"Email"}
              value={email}
              onChangeText={(value) => dispatch(setEmail(value))}
            />
            <InputField
              name={"Password"}
              placeholder={"Password"}
              value={SigninPassword}
              onChangeText={(value) =>
                PasswordHandler(value, setSigninPassword)
              }
              secureTextEntry={true}
            />
            <InputField
              name={"Verify-Password"}
              placeholder={"Verify-Password"}
              value={ReEnterSigninPassword}
              onChangeText={(value) =>
                PasswordHandler(value, setReEnterSigninPassword)
              }
              secureTextEntry={true}
            />
            <RegularButton buttonName={"Sign Up"} onPress={signUpHandler} />
          </View>
        ) : (
          console.log("out of bound login menu selection")
        )}
      </Menu>
    </Background>
  );
}
