import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SafeAreaWrap from "./Components/Util/SafeAreaWrap";

import ComplaintsPage from "./Components/Complaints/ComplaintsPage";
import HomePage from "./Components/HomePage/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaWrap>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{header: () => null}} name="HomePage" component={HomePage} />
          <Stack.Screen options={{header: () => null}} name="ComplaintsPage" component={ComplaintsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaWrap>
  );
}
