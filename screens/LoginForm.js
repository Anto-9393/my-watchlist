
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet,
  Button,
  ImageBackground,
  Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import HomeScreen from './HomeScreen';
import * as firebase from 'firebase'; 


 function  LoginForm () {

const navigation = useNavigation(navigation);
const [state, setState] = React.useState({
  email: "",
  password: "",
});

//Login and Registration on Firebase
const singnUpUser = () =>{
  firebase
  .auth().createUserWithEmailAndPassword(state.email.trim(),state.password)
  .then(user => {
    if (firebase.auth().currentUser) {
      const userId = firebase.auth().currentUser.uid;
    if (userId) {
        firebase
        .database()
        .ref('utenti/' + userId + '/utenti/')
        .set({ email: state.email });
      };
  }
}).catch((error)=> {
  Alert.alert(error.message)
});
};

const signIn = () => {
  firebase.auth()
  .signInWithEmailAndPassword(state.email.trim(),state.password)
  .then(() => {
    navigation.navigate(HomeScreen);
  }).catch((error)=> {
    Alert.alert(error.message)
});
}

return(
    <ImageBackground
        source={require('../assets/film.jpg')}
        style={{ width: '100%', height: '100%' }}>
        
        <View style={styles.TextView}>
            <Text style={styles.Text}>MY WATCHLIST TEXT</Text>
            <Text style={styles.Text}>Track your watch list in a second</Text>

        </View>


            
        <View style={styles.container}>
          <TextInput
            label="E-Mail"
            placeholder="enter a valid email"
            value={state.email}
            setError
            onChangeText={(text) => setState({...state,email:text})}
                        
          />

          <TextInput
            secureTextEntry
            label="password"
            placeholder="your password"
            value={state.password}
            onChangeText={(text) => setState({...state,password:text})}
            color="#841584"
            
          />
 
          <View style={styles.button}>
          <Button onPress={signIn} title="Login" color="#841584" />
          </View>
          <View style={styles.button}>
          <Button onPress={singnUpUser} title="Registration" color="#841584" />
              
            
          </View>
        </View>
      </ImageBackground>
    );
  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  TextView: {
    alignItems: 'center',
  },
  Text:{
    fontWeight: 'bold',
    fontSize: 18,
marginTop: 20,
    width: 200,
    height: 80,
backgroundColor: 'yellow',

   

  },
  
  button: {
    paddingTop: 25,
    width: 300,
    marginLeft: 28,
  },
});

export default LoginForm