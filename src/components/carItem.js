import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CarItem = () => {
  return (
    <View>
      <Text style={styles.txtName}></Text>
     <Text style={styles.txtName2}>brand :vw</Text>
     <Text style={styles.txtBirthday}>yaer :2023</Text>
     <Text style={styles.txtui}>km :100k </Text>
      <Text style={styles.txtNed}>price : 40k </Text>
     
    </View>
  )
}

export default CarItem

const styles = StyleSheet.create({
txtName : {
    borderWidth : 1,
    width : 50,
    height : 50,
    right : 70,
    top : 50,
    fontSize : 90,
}
}) 
