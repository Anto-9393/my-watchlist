import * as React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
  FlatList,
  TouchableHighlight,
  ActivityIndicator
  } from 'react-native';

import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  
state = {
    data:[ ],
    movie:[ ],
    query: null,
    loading: false
  
    
    
  }

   async componentDidMount() {
   await this._getData();
   await this._getPopular();}

_getData = async () => {
  
 await fetch  ('https://devru-bigflix-movies-download-v1.p.rapidapi.com/movieList.php?pageIndex=1&resultsperpage=10',{
    "method": "GET",
    "headers": {
    	'x-rapidapi-key': '62d04b1ca1msh362d844a192f438p1a8e9ajsnff46d45edb4e',
		'x-rapidapi-host': 'devru-bigflix-movies-download-v1.p.rapidapi.com'
    }
  } )
  .then(res =>res.json())
  .then((json) => {
   this.setState({data: json , movie:json, loading:true})
   
   //console.log("loading", this.state.movie)
 // console.log("json:" , Object.values(this.state.data));
   }).catch((error) =>console.log("Errore",error));
}

renderFooter = () => {
  if (!this.state.loading) return null

  return (
    <View
      style={{
        alignItems:'center',
        borderColor: 'red'
      }}>
      <ActivityIndicator animating size='large' />
    </View>
  )
}





_passData(item) { 
  this.props.navigation.push('Prova',{
    item: (item.movieName),
    thumbnail: (item.imageUrl_200X280),
    title: (item.movieName),
    year: (item.releaseyear),
    description:(item.description),
    directors:(item.director),
    stars:(item.actor),
    
      })
}

_renderListItem(item){
  //console.log("Item",item)
    return(
      <TouchableOpacity onPress={() => this._passData(item)}>
      
        <Image style={{width:120,height:180}} source={{uri: item.imageUrl_200X280}}/>
        
      </TouchableOpacity>
      
      )
  }


onChangeText = () =>  {
console.log("text: " )
}
 
 
render(){
  console.log("props_", this.props.route)
  const {pippo} = this.props.route.params.pippo
 
  return(
    
    <View style = {styles.container}>
     
    <View>
     
      <TextInput
      style = {styles.input}
      placeholder ="Search movies"
      onChangeText= {this.onChangeText()}/>
      
    </View>
    <Icon  style={styles.search} name="search" color="grey" size={18}/>
    
  <ScrollView>
    <View style={{marginTop:15, marginLeft:10}}>
    <Text style= {styles.ht}>New Release </Text>
    </View>
   
  <FlatList
  contentContainerStyle={{paddingHorizontal:5}}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{width:5}}/>}
        data={ Object.values(this.state.data)}
        renderItem={({ item }) => this._renderListItem(item)}
        keyExtractor={(item,index) => index}
        showsHorizontalScrollIndicator ={false}
       ListFooterComponent={this.renderFooter}
        
      />
      <Text style= {styles.ht}> MyWatchlist </Text>
      <Text style= {styles.ht}> {pippo} </Text>
     
  </ScrollView>
  
  
   
   
  
    
    </View>
    
  )
}
  
}

const styles =  StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#181818'
    
  },
  conta: {
    alignItems:'center',
    justifyContent: 'center',

  },
 
    ht: 
    { 
      fontFamily: 'monospace',
    fontSize: 32, 
    color: 'white'},

    input:{margin:8,
      height:35,
      paddingTop:5,
      borderWidth:1,
      borderColor: '#ddd',
      borderRadius: 5,
      fontSize: 15,
      opacity:0.8,
      backgroundColor:'#323232',
      marginTop:10
    
    },
    search:{
      marginTop:-38,
      marginLeft:320
    }
    
   
  
  

});

export default HomeScreen;

