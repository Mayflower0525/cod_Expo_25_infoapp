import { Text, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


/// Import local Screens
import  HomeScreen from "./screens/HomeScreen";
// Screens -------------------------------------------------


import  EventsScreen from "./screens/EventsScreen";
import ContactScreen from './screens/ContactScreen';

// Navigator -----------------------------------------------
const Tabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Events: EventsScreen,
    Contact: ContactScreen
  },
});

// Root navigation component -------------------------------
const Navigation = createStaticNavigation(Tabs);

export default function App() {
  return <Navigation />;
}