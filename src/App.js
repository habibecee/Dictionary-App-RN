import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import History from './views/history/history';
import Favorite from './views/favorite/favorite';
import Search from './views/search/search';
import Details from './views/search/companents/details';

const Tab = createBottomTabNavigator();

const SearchStack = createNativeStackNavigator();

function SearchStackView() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name=" " component={Search} />
      <SearchStack.Screen name="Details" component={Details} />
    </SearchStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator headerMode="none" mode="model">
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Search" component={SearchStackView} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
