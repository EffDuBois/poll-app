import { View } from "react-native";
import InputField from "../Util/InputField";
import RegularButton from "../Util/RegularButton";



export default function SigninMenu({Email, setEmail, Password, setPassword, signUpHandler}) {
    return(
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
          <RegularButton buttonName={"Sign In"} onPress={() => {signUpHandler}} />
        </View>
    )
}