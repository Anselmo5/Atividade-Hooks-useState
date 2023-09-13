import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Pressable, } from 'react-native';
import { useState } from 'react';

const [nome,setnome] =useState(user ? user.nome: "")
const [senha,setsenha] =useState(user ? user.senha:"")
const [nemail,setemail] =useState(user ? user.email:"")
const [cpf,setcpf] =useState(user ? user.cpf:"")
const [confirme,setconfirme] =useState(user ? user.confirme:"")




export default function Cadastro({user}) {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
