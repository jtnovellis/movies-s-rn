import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Favorites from '../screens/Favorites'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={size}
                  color={color}
                />
              )
            case 'Settings':
              return (
                <Ionicons
                  name={focused ? 'settings' : 'settings-outline'}
                  size={size}
                  color={color}
                />
              )
            case 'Favorites':
              return (
                <Ionicons
                  name={focused ? 'heart' : 'heart-outline'}
                  size={size}
                  color={color}
                />
              )
            case 'Profile':
              return (
                <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  size={size}
                  color={color}
                />
              )
          }
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name='Profile' component={Profile} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Favorites' component={Favorites} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
}
