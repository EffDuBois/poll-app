import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import { Store } from "./Components/Redux/Store";

import SafeAreaWrap from "./Components/Util/SafeAreaWrap";

import ComplaintsPage from "./Components/ComplaintsPage/ComplaintsPage";
import ComplaintsForm from "./Components/ComplaintsForm/ComplaintsForm";
import HomePage from "./Components/HomePage/HomePage";
import EventsPage from "./Components/EventsPage/EventsPage";
import LoginPage from "./Components/Auth/LoginPage";
import PollsPage from "./Components/PollsPage/PollsPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaWrap>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: () => null,
            }}
          >
            {/* <Stack.Screen name="LoginPage" component={LoginPage} /> */}
            {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
            <Stack.Screen name="ComplaintsPage" component={ComplaintsPage} />
            <Stack.Screen name="ComplaintsForm" component={ComplaintsForm} />
            <Stack.Screen name="EventsPage" component={EventsPage} />
            <Stack.Screen name="PollsPage" component={PollsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaWrap>
    </Provider>
  );
}
