import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground} from 'react-native';
  import { Input, Card, Divider } from 'react-native-elements';

function LoginScreen() {
    const navigation = useNavigation();

return(
    <ImageBackground
        source={require('../assets/film.jpg')}
        style={{ width: '100%', height: '100%' }}>
        
        <View style={styles.TextView}>
            <Text style={styles.Text}>MY WATCHLIST TEXT</Text>
            <Text style={styles.Text}>Track your watch list in a second</Text>

        </View>


            
        <View style={styles.container}>
          <Input
            label="E-Mail"
            placeholder="enter a valid email"
            onChangeText={({})}
          />

          <Input
            secureTextEntry
            label="password"
            placeholder="your password"
            onChangeText={({ })}
            color="#841584"
          />

          <View style={styles.button}>
          <Button  title="Login" color="#841584" />
          </View>
          <View style={styles.button}>
            <Button   onPress={() => navigation.navigate('FirstScene')}
              
              title="Registration"
              color="#841584"
            />
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
export default LoginScreen