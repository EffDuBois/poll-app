import { useState } from "react";
import Background from "../Util/Background";
import HeroWithoutBack from "../Util/HeroWithoutBack";
import Menu from "../Util/Menu";
import SelectSignin from "./SelectSignin";
import SigninMenu from "./SigninMenu";

export default function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signUpHandler = () => {
    //Firebase code
  //   auth
  //     .createUserWithEmailAndPassword(Email, Password)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log(user.Email);
  //     })
  //     .catch((error) => alert(error.message));
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
        <SigninMenu
          Email={Email}
          setEmail={setEmail}
          Password={Password}
          setPassword={setPassword}
          signUpHandler={signUpHandler}
        />

      </Menu>
    </Background>
  );
}

