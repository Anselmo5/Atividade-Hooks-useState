import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View,TextInput,Pressable,SectionList,} from 'react-native';
import { useState } from 'react';
import { CheckBox } from 'react-native';
import {Picker} from '@react-native-picker/picker';
export default function App() {

const [nome,setnome] =useState("Anselmo")
const [date,setdate] =useState("21/6/1893")
const [senha,setsenha] =useState(1235)
const [email,setemail] =useState("Anslemo@gmail.com")
const [cpf,setcpf] =useState("178,189,657,32")
const [confirme,setconfirme] =useState("Anslemo@gmail.com")
const [selectedLanguage, setSelectedLanguage] = useState();
const [toggleCheckBox, setToggleCheckBox] = useState()

function cadastar (){
alert="Foi"
console.log(nome)
console.log(date)
console.log(senha)
console.log(email)
console.log(cpf)
console.log(confirme)
}


  return (
    <View style={styles.container}>
      <View style={styles.aling}>
        <View style={styles.form}>
          <TextInput placeholder='Nome Completo' style={styles.inp}  defaultValue={nome}/>
      
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.alingcheck}
          />

          <CheckBox
            disabled={true}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.alingcheck}
            
          />
          <Text>Masculino</Text>
          <TextInput placeholder='Data de Nascimento' style={styles.inp} defaultValue={date} />
          <TextInput placeholder='Senha' secureTextEntry style={styles.inp} defaultValue={senha} />
          <TextInput placeholder='E-mail' style={styles.inp} defaultValue={email}/>
          <TextInput placeholder='Confirme Seu Email' style={styles.inp} defaultValue={confirme} />
          <TextInput placeholder='CPF' style={styles.inp} defaultValue={cpf} />
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)}>
            <Picker.Item label="Idioma do curriculo" />
            <Picker.Item llabel="Portugues" />
            <Picker.Item label="Italiano"  />
            <Picker.Item label="Françes" />
            <Picker.Item label="Alemão" />
            <Picker.Item label="Russova"  />
          </Picker>


          <Pressable style={styles.aling} >
            <View>
              <Text onPress={() => cadastar()}>Confirmar</Text>
            </View>
          </Pressable>
        </View>  
      </View>
    
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
  aling:{
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    flexDirection:'column',
  },

  alingcheck:{
    margin:5,
  },
  inp:{
    margin:5,
    padding:15,
    textAlign:'center',
    width:"100%",
  },
  form:{
    padding:15,
    borderRadius:5,
    borderColor:"black",
    backgroundColor:"#ece5ce",
    width:"100%",
    maxWidth:300
   
  },

});
