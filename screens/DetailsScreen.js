import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
        color='#F39A4A'
            title="ir para detalhes screen"
            onPress={() => navigation.push("Detalhes")}
        />
        <Button
        color='#F39A4A'
            title="inicio"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
           color='#F39A4A'
            title="voltar"
            onPress={() => navigation.goBack('Home')}
        />
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'#000029'
  },
});
