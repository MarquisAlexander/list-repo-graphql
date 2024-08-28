import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserProfile from './screens/user';
import {Favorite} from './screens/fav';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress, isActive}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: isActive ? '#32C0C6' : 'transparent', // Cor de fundo ativa
      flex: 1,
    }}>
    {children}
  </TouchableOpacity>
);

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false, // Esconde o cabeçalho da tela
          tabBarLabel: () => null,
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'UserProfile') {
              iconName = 'user';
            } else if (route.name === 'Favorite') {
              iconName = 'heart';
            }

            return <Icon name={iconName} size={30} color={color} />;
          },
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#888888',
          tabBarStyle: {
            height: 69,
          },
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              isActive={props.accessibilityState.selected}
            />
          ),
        })}>
        <Tab.Screen name="UserProfile" component={UserProfile} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
