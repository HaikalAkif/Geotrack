import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return(
        <Tabs.Navigator>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
        </Tabs.Navigator>
    )
}

export default Tabs