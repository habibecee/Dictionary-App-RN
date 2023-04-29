import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Button from './Button';
import Box from './Box';
import theme from '../utils/theme';
import {SearchIcon} from './icons';
import {AnchorIcon} from './icons';
import {BookmarkIcon} from './icons';

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return label === 'Search' ? (
          <Box p={15} mt={-15} bg="white" borderRadius="full">
            <Button
              key={label}
              size={56}
              height={56}
              bg="red"
              borderRadius="full"
              onPress={onPress}>
              <SearchIcon stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            onPress={onPress}
            flex={1}>
            {label === 'History' && <AnchorIcon stroke={theme.colors.gray} />}
            {label === 'Favorite' && (
              <BookmarkIcon stroke={theme.colors.gray} />
            )}
            <Box size={3} bg={isFocused ? 'red' : '#ffffff00'} mt={6} />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
