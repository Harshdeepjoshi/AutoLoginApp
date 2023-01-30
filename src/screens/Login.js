import React from 'react'
import { TextInput, View ,Text, StyleSheet, Button} from 'react-native'
import { useState } from 'react'
import { create } from 'react-test-renderer'

function Login(){

    const [UserName , onChangeUserName] = useState('');
    const [Password , onChangePassword] = useState('');
    
    return (
<View style ={style.screen}>
    <View style={style.card}>
        <Text>Username</Text>
        <TextInput
        style={style.inp}
        onChangeText = {onChangeUserName}       
        />
        <Text>Password</Text>
        <TextInput 
        style={style.inp}
        onChangeText={onChangePassword}
        />
        <Button 
        title = 'login'
        color={'black'}
        
        />
        </View>
    </View>
  )
}

const style = StyleSheet.create({
card:{
borderWidth: 2,
height:'50%',
width: '80%',
justifyContent: 'center',
padding:10,
backgroundColor:'#EEEEEE'
},
  
screen:{
height:'100%',
alignItems:'center',
justifyContent: 'center',
backgroundColor:'#393E46'
},

Button:{
    marginTop:5,
    borderWidth:2,
    borderColor:'%000'
},
inp: {
    height: 30,
    borderBottomWidth: 1,
    padding: 0,
    marginBottom:5,
},
}
)


export default Login