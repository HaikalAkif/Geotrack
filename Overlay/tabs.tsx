import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../screens/explore';
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';

import Home from '../screens/home';
import Map from '../screens/map';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />
            }} />
            <Tab.Screen name="Explore" component={Explore} options={{
                tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />
            }} />
            <Tab.Screen name="Map" component={Map} options={{
                tabBarIcon: ({ color }) => <FontAwesome name="compass" size={24} color={color} />
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={24} color={color} />
            }} />
        </Tab.Navigator>
    )
}

export default Tabs