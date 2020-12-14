import * as React from 'react';
import { Text, View, StyleSheet, Flatlist, TouchableOpacity,  SafeAreaView, } from 'react-native';
import { useState, useEffect,} from 'react';
import { useNavigation } from '@react-navigation/native';

class GetScreen extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        
    }
}

componentDidMount() {
    this.fetchCats();
}

fetchCats() {
    this.setState({ refreshing: true });
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
        .then(res => res.json())
        .then(resJson => {
            this.setState({ data: resJson });
            this.setState({ refreshing: false });
        }).catch(e => console.log(e));
}




render() {
  return (
    <SafeAreaView>
      <Text>CIao</Text>
    </SafeAreaView>)
}
}

const styles = StyleSheet.create({
container: {
height: 300,
margin: 10,
backgroundColor: '#FFF',
borderRadius: 6,
},
image: {
height: '100%',
borderRadius: 4,
},
});
export default GetScreen;