import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SafeAreaWrap from "./Components/Util/SafeAreaWrap";

import ComplaintsPage from "./Components/ComplaintsPage/ComplaintsPage";
import ComplaintsForm from "./Components/ComplaintsForm/ComplaintsForm";
import HomePage from "./Components/HomePage/HomePage";
import EventsPage from "./Components/EventsPage/EventsPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaWrap>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen options={{header: () => null}} name="HomePage" component={HomePage} /> */}
          {/* <Stack.Screen options={{header: () => null}} name="ComplaintsPage" component={ComplaintsPage} /> */}
          {/* <Stack.Screen options={{header: () => null}} name="ComplaintsForm" component={ComplaintsForm} /> */}
          <Stack.Screen options={{header: () => null}} name="EventsPage" component={EventsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaWrap>
  );
}
