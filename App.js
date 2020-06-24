import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      data : "",
      count : 0,
      vowel : 0,
      cons : 0
    }
  }

  analyze = () => {
        let word = this.state.data;
        let num = word.length;
        let c = 0;
        let v = 0;
         

        let arr_vowel_list = 'aeiouAEIOU'.split('');
        
        word.split('').forEach(function(word){
          //num++;
          //this.setState(this.state.data +1);
          //console.log(x)
            if(arr_vowel_list.indexOf(word) !== -1){
              //this.setState({ vowel : this.state.vowel + 1});} 
              v++;
              console.log(v)
              console.log(word)
            }
              else
              c++;
              console.log(c)
              //this.setState({cons :this.state.cons + 1});
      
          });
          this.setState({count: num, vowel: v, cons: c})
          //console.log(this.state.count + 10)
      
    
  }
  

  

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(data) => this.setState({data})} style={Styles.instructions} placeholder='Input a word'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={Styles.container}>
        <Button color="#841584" onPress={this.analyze} title='Analyze'/>
        <Text></Text>
        <Text style={Styles.instructions}>Word: {this.state.data}</Text>
        <Text style={Styles.instructions}>No of Consonants: {this.state.cons}</Text>
        <Text style={Styles.instructions}>No of Vowel: {this.state.vowel}</Text>
        <Text style={Styles.instructions}>No of Character: {this.state.count}</Text>
        </View>
      </View>
    );
  }
}