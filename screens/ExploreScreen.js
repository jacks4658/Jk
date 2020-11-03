import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExploreScreen = () => {
    return (
      <View style={styles.container}>
        <Text>ExploreScreen</Text>
        <Button
        color='#FF6146'
          title="Click aqui"
          onPress={() => alert('ola mundo')}
        />
      </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'#000029'
  },
});
