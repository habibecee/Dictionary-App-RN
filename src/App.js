import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from 'styled-components';

import History from './views/history/history';
import Favorite from './views/favorite/favorite';
import Search from './views/search/search';
import Details from './views/search/companents/details';
import TabBar from './companents/TabBar';
import Box from './companents/Box';
import theme from './utils/theme';

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
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            headerMode="none"
            mode="model"
            initialRouteName="Search"
            tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Search" component={SearchStackView} />
            <Tab.Screen name="Favorite" component={Favorite} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
}
