import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }
        backgroundColor='#FF6146'
        />
        <Text style={{color: colors.text}}>tela inicial</Text>
      <Button
      color='#F39A4A'
        title="ir para detalhes"
        onPress={() => navigation.navigate("Detalhes")}
      />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'#000029'
  },
});
