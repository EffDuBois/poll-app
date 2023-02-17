import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import Background from "../Util/Background";
import HeroWithoutBack from "../Util/HeroWithoutBack";
import InputField from "../Util/InputField";
import Menu from "../Util/Menu";
import RegularButton from "../Util/RegularButton";
import SelectSignin from "./SelectSignin";

import { useSelector, useDispatch } from "react-redux";
import { setUserId, checkUserLogon } from "../Redux/Actions/Login";
import AppText from "../Util/AppText";

export default function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    Password: "",
  });

  const [siginDetails, setSiginDetails] = useState({
    email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const { user_logon } = useSelector((state) => state.userLoginReducer);

  const dispatch = useDispatch();

  const [passwordSame, setPasswordSame] = useState(true);

  const PasswordChecker = () => {
    if (siginDetails.Password == "" || siginDetails.ConfirmPassword == "") {
      setPasswordSame(true);
      return;
    }
    if (siginDetails.Password == siginDetails.ConfirmPassword) {
      setPasswordSame(true);
      return;
    }
    setPasswordSame(false);
  };

  const validateLogin = () => {
    const alertText = "";
    if (!loginDetails.email) {
      alertText.concat("Email field can't be empty");
    }
    if (!loginDetails.Password) {
      alertText.concat("password required");
    }
    if (alertText) {
      Alert.alert("Empty fields", alertText);
      return false;
    }
    dispatch(checkUserLogon(loginDetails));
    if (!user_logon.logon) {
      Alert.alert("Wrong credentials", "Email or password incorrect");
      return false;
    }
    return true;
  };

  useEffect(PasswordChecker);

  const singinHandler = () => {
    if (validateLogin()) {
      navigation.replace("HomePage");
    }
  };

  const signUpHandler = () => {
    if (validateSigin()) {
      navigation.replace("HomePage");
    }
  };

  //navigation
  const navigation = useNavigation();
  const [screen, setScreen] = useState(0);
  

  return (
    <Background>
      <HeroWithoutBack title={"Welcome"} />
      <Menu>
        <SelectSignin selectScreenFunction={setScreen} />

        {screen == 0 ? (
          <View>
            <InputField
              name={"Email"}
              placeholder={"Email"}
              value={loginDetails.email}
              onChangeText={(value) => {
                setLoginDetails((prevState) => {
                  return { ...prevState, email: value };
                });
              }}
            />
            <InputField
              name={"Password"}
              placeholder={"Password"}
              value={loginDetails.Password}
              onChangeText={(value) => {
                setLoginDetails((prevState) => {
                  return { ...prevState, Password: value };
                });
              }}
              secureTextEntry={true}
            />
            <RegularButton buttonName={"Sign In"} onPress={singinHandler} />
          </View>
        ) : screen == 1 ? (
          <View>
            <InputField
              name={"Email"}
              placeholder={"Email"}
              value={siginDetails.email}
              onChangeText={(value) => {
                setSiginDetails((prevState) => {
                  return { ...prevState, email: value };
                });
              }}
            />
            <InputField
              name={"UserID"}
              placeholder={"UserID"}
              value={user_logon.user_id}
              onChangeText={(value) => dispatch(setUserId(value))}
            />
            <InputField
              name={"Password"}
              placeholder={"Password"}
              value={siginDetails.Password}
              onChangeText={(value) => {
                setSiginDetails((prevState) => {
                  return { ...prevState, Password: value };
                });
              }}
              secureTextEntry={true}
            />
            <InputField
              name={"Verify-Password"}
              placeholder={"Verify-Password"}
              value={siginDetails.ConfirmPassword}
              onChangeText={(value) => {
                setSiginDetails((prevState) => {
                  return { ...prevState, ConfirmPassword: value };
                });
              }}
              secureTextEntry={true}
            />
            {!passwordSame && (
              <AppText
                style={{
                  fontSize: 16,
                  color: "rgba(255, 0, 0, 1)",
                  marginLeft: 30,
                }}
              >
                The passwords don't match
              </AppText>
            )}
            <RegularButton buttonName={"Sign Up"} onPress={signUpHandler} />
          </View>
        ) : (
          console.log("out of bound login menu selection")
        )}
      </Menu>
    </Background>
  );
}
