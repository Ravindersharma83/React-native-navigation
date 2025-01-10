import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = ({route, navigation}:any) => {
    const {username} = route.params;
    console.log(route);
    
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>AboutScreen</Text>
        <Text>{'Hello ' + username}</Text>
        <Button title='Back' onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({})