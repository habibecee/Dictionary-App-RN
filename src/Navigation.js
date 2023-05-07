import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import History from './views/history/history';
import Favorite from './views/favorite/favorite';
import Search from './views/search/search';
import Details from './views/search/companents/details';
import TabBar from './companents/TabBar';
import theme from './utils/theme';
import {fonts} from './utils/constants';
import {ChevronLeft, MoreHorizontal} from './companents/icons';
import Button from './companents/Button';

const Tab = createBottomTabNavigator();

const SearchStack = createNativeStackNavigator();

function SearchStackView() {
  return (
    <SearchStack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Details"
        component={Details}
        options={({route, navigation}) => {
          return {
            title: route.params?.keyword,
            headerStyle: {
              backgroundColor: theme.colors.logoBg,
              shadowColor: theme.colors.transparentColor,
            },
            headerTitleStyle: {
              color: theme.colors.subWord,
              fontFamily: fonts.bold,
              fontSize: 20,
            },
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate('Search')}
                px={10}
                height="100%">
                <ChevronLeft color={theme.colors.logoColor} />
              </Button>
            ),
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Search')}
                px={10}
                height="100%">
                <MoreHorizontal color={theme.colors.logoColor} />
              </Button>
            ),
          };
          // {headerShown: true}
        }}
      />
    </SearchStack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Search"
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="History" component={History} />
        <Tab.Screen
          name="Search"
          component={SearchStackView}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
