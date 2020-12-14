import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, ScrollView, Image, Button,  StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Divider from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';


class  Prova extends React.Component{
  state = {
      done:false,
      element:[]
  }
  
  _addElement(title) {
    this.setState({done:!this.state.done})
    this.state.element.push(title)
}
_/*removeElement() {
    const array = this.state.element

}

*/
 render() {
    const {thumbnail}=this.props.route.params
    const {title} = this.props.route.params
    const {year} = this.props.route.params
    const {description} = this.props.route.params
    const {directors} = this.props.route.params
    const {stars} = this.props.route.params
    
    console.log("Element", this.state.element)

 

  return (
     <View  style={styles.container}>
         <View style={styles.image}>
            <Image style={{width:180 ,height:200,borderWidth:5, }} source={{uri: thumbnail}}/>
            <Image style={{width:180 ,height:200}} source={{uri: thumbnail}}/>
           
         </View>
        <View style={styles.buttonPlay}>
          <Icon name= "play-circle"size ={100} color= "white"/>
        </View>
        <ScrollView>
        <View style={styles.title}>
            <Text style={styles.titleShow}>{title}</Text>
            <Text style={styles.titleShow}>({year})</Text>
        </View>
        <View style={styles.description}>
            <Text style={styles.titleDescription}>{description}</Text>
            <View style={styles.castView}>
                <Text style={styles.castText}>Directors: {directors} </Text>
                <Text style={styles.castText} >Stars: {stars}</Text>
                <TouchableHighlight  style={{marginTop:5}} onPress={() => this._addElement({title})}>
                {this.state.done ?
                     <Button title="Rimuovi dalla Watchlist" color="red"/>     :
                     <Button title="Aggiungi alla Watchlist" color="green"  /> 
            }
                </TouchableHighlight>
                <Button title="ciao" onPress={() => this.props.navigation.navigate.push('HomeScreen' , {pippo:'How are you'}) }/>
            </View>
            
        </View>
        </ScrollView>
    </View>

      
   
    
  );
          }
}
    const styles = StyleSheet.create({
        container: {
        flex:1,
        backgroundColor:'#181818'
            
          },
    buttonPlay:{
    
        alignItems:'flex-end',
        marginTop:-100,
        marginRight:10,
        opacity:0.7
        
    
    },
    image:{
        flexDirection: 'row',
        borderRightColor:'black',
        borderWidth: 2,
        alignItems: 'center',
        
    },
    title:{
        backgroundColor:'transparent',
        paddingHorizontal:20,
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal:2
    },
    titleShow:{
        fontSize:32,
        color:'#b3b3b3'

    },
    description:{
        paddingTop:10,

    },
    titleDescription:{
        fontSize:15,
        color:'#b3b3b3',
        marginLeft:8
    },
    castView:
    {
        
       marginTop:10
    },
    castText:{
        fontSize:15,
        color:'#b3b3b3',
        paddingTop:2
    },
    
  


    })
    

export default Prova;