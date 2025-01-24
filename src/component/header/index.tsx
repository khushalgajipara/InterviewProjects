import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string; // Add a title prop
};

const Header = ({ title }: Props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{`Hello ${title}`}</Text>
      <Text style={styles.desc}>Are you ready to dance?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 76,
    paddingStart:10,
    paddingTop: 20,
    backgroundColor: '#f8f8f8', // Example background color
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Example border color
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Example text color
    marginStart:16
  },
  desc:{
    fontSize: 16,
    marginStart:16,
    color: '#333',
  }
});

export default Header;
