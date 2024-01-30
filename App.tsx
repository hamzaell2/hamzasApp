import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarItem from './src/components/carItem'

const App = () => {
  return (
    <View style={styles.container}>
     {/* <Text style={styles.txtName}></Text>
     <Text style={styles.txtName2}>name : hamza</Text>
     <Text style={styles.txtBirthday}>Birthday : 21/9/2004</Text>
     <Text style={styles.txtui}> my first ui</Text>
     <ScrollView style ={styles.txtop}>
      <Text style = {styles.txtName4}></Text>
     </ScrollView> */}

     <CarItem/>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
container: {
  flex : 1,
  alignItems : 'center',
  marginTop : 280,
  margin : 10,
  marginBottom : 260,
  borderWidth : 1,
  borderRadius: 6,
  backgroundColor : '#E8C872',
},
 
txtName : {
  borderWidth : 1,
  height : 70,
  width : 70,
  backgroundColor : 'yellow',
  right : 120,
  top : 50,
  borderRadius: 6,
},

txtName2 : {
  left :30,
  bottom: 10,
  fontSize : 20,
},

txtBirthday : {
  left : 40,
  fontSize : 20,
},
txtui : {
  fontSize : 30,
  marginTop: 20,
},
txtop : {
  
},
 txtName4 : {

 },



})

