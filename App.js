/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Datastore from 'react-native-local-mongodb';
/*
var doc = {
	date: '19-11-2018',
	startTime: '08:00',
	endTime: '16:00',
	worked: 8
};*/

type Props = {};
export default class App extends Component<Props> {
	constructor(props){
		super(props);
		
		this.db = new Datastore({filename: 'timesheet',autoload:true});
		
		this.state = {
			data: []
		}

			
	}
	
	componentWillMount(){
		//this.db.insert(doc, function(err,newDoc){});

		this.db.find({date:'19-11-2018'},(err,docs)=>{
			console.log(docs);
			this.setState({data:docs[0]});
		});
	}

	
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>Date: {this.state.data.date}</Text>
        <Text style={styles.instructions}>Start Time: {this.state.data.startTime}</Text>
        <Text style={styles.instructions}>End Time: {this.state.data.endTime}</Text>
        <Text style={styles.instructions}>Hours Worked: {this.state.data.worked}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
