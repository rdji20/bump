
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ExploreScreen, CommunityScreen, ProfileScreen } from './screens';
import { StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='Profile'
                tabBarPosition='bottom'
                backBehavior='order'
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name == 'Explore') {
                            iconName = focused ? 'map' : 'map-outline';
                        } else if (route.name == 'Community') {
                            iconName = focused ? 'people' : 'people-outline';
                        } else {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }
                        return <Ionicons name={iconName} size={26} color={color} />
                    },
                    tabBarActiveTintColor: 'purple',
                    tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                    tabBarIndicatorStyle: styles.tabBarIndicator
                })}>
                    <Tab.Screen
                        name='Explore' 
                        component={ExploreScreen} />
                    <Tab.Screen 
                        name='Community' 
                        component={CommunityScreen} />
                    <Tab.Screen 
                        name='Profile' 
                        component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        paddingBottom: 15
    },
    tabBarIndicator: {
        backgroundColor: 'white'
    }
})