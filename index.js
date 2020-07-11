//Index.ios.js - place code in here for ios!!!!

// Importing Libraries
import React from 'react';
import { AppRegistry,View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => {
    return(
        <View>
            <Header headerText={"Albums"} />
            <AlbumList />
        </View>
    );
};

// Getting rid of warnings
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);


//Render it to device
AppRegistry.registerComponent('albums' , () => App);
