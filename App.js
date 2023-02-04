import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SafeAreaWrap from "./Components/Util/SafeAreaWrap";

import ComplaintsPage from "./Components/ComplaintsPage/ComplaintsPage";
import ComplaintsForm from "./Components/ComplaintsForm/ComplaintsForm";
import HomePage from "./Components/HomePage/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaWrap>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{header: () => null}} name="HomePage" component={HomePage} />
          <Stack.Screen options={{header: () => null}} name="ComplaintsPage" component={ComplaintsPage} />
          {/* <Stack.Screen name="ComplaintsForm" component={ComplaintsForm} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaWrap>
  );
}
