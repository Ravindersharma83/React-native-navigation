import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}:any) => {
    console.log('nav---',navigation);
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title='Go To About' onPress={()=>navigation.navigate('About',{username:'Ravinder'})}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})