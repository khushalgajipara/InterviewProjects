import React, {memo} from 'react';
import {View, TouchableOpacity, useColorScheme, Text, Image} from 'react-native';

import {Theme, useTheme} from '@react-navigation/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Config from '../../config';
import styles from './style';

interface BottomTabProps extends BottomTabBarProps {}

function BottomTab(props: BottomTabProps) {
  const {state, navigation, descriptors} = props;

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        console.log('route', route.name);
        
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const iconHeightWidth = 24;
        const renderIcon = () => {
          switch (route.name) {
            case 'Search':
              return (
                Config.Image.SEARCH
              );
            case 'Event':
              return (
                Config.Image.EVENT
              );
            case 'Favourites':
              return (
                Config.Image.FAVOURITE
              );
            case 'Profile':
              return (
                Config.Image.PROFILE
              );
            default:
              return (
                Config.Image.SEARCH

              );
          }
        };

        const renderTitle = () => {
          switch (route.name) {
            case 'Search':
              return 'Search';
            case 'Event':
              return 'Event';
            case 'Favourites':
              return 'Favourites';
            case 'Profile':
              return 'Profile';
            default:
              return 'Search';
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
            activeOpacity={1}>
            <Image  source={renderIcon()} style={{height: iconHeightWidth, width: iconHeightWidth}} />
            <Text style={[styles.label]}>{renderTitle()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomTab;
