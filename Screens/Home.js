import * as React from 'react';
import { useState } from 'react';
import { View,Text,StyleSheet,Image,SafeAreaView, Button } from 'react-native'; 
import SearchBar from 'react-native-search-bar';
import colors from './colors.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import {db} from '../firebase.js';
import { TextInput } from 'react-native-gesture-handler';

Feather.loadFont();

const test = async (x) => {
    console.log(x);
    await setDoc(doc(db, "codes", "user1"), {
      employment: "Code1",
      outfit: "890OLF13",
    });
  };

const Home = () => {
    
    return(
        
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <View style={styles.SearchBgLight}></View>
                    <View style={styles.SearchBgDarkRight}></View>
                    <View style={styles.SearchBgDarkLeft}></View>
                    <Feather name = 'search' size={24} style={styles.searchIcon}/>
                    <TextInput
                        style={styles.searchButton}
                        placeholder={'Search'}
                    />
                </View>
            </SafeAreaView>
            <SafeAreaView>
                <View>
                    <View style={styles.FeaturedBG}></View>
                    <View style={styles.FeaturedBGInner}></View>
                </View>
            </SafeAreaView>
            <SafeAreaView>
                <View>
                    <View style={styles.menuTabs}></View>
                    <View style={styles.menuTabs}></View>
                    <View style={styles.menuTabs}></View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Home;


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        flex:1,
    },
    searchButton:{
        position:'absolute',
        flex:1,
        top:23,
        left:115,
        height:30,
        borderBottomWidth:1,
        borderBottomColor:colors.text,
        width:230,

    },
    searchIcon:{
        position:'relative',
        top:-103,
        left:40,
        color:colors.text,

    },

    SearchBgLight: {
        position:'relative',
        width: 370,
        height: 50,
        left:10,
        top:15,
        backgroundColor: colors.tint,
        borderRadius:40,     
        shadowOpacity:.3,
        shadowOffset: {width: 10, height:10},
           
    },

    SearchBgDarkRight: {
        position:'relative',
        width: 270,
        height:40,
        left:100,
        top:-30,
        backgroundColor: colors.search,
        borderRadius:40,
    },

    SearchBgDarkLeft: {
        position:'relative',
        width: 70,
        height:40,
        left:20,
        top:-70,
        backgroundColor: colors.search,
        borderRadius:40,
    },

    FeaturedBG:{
        position:'absolute',
        left:10,
        top:- 70,
        width:370,
        height:230,
        backgroundColor: colors.tint,
        borderRadius:40,
        shadowOpacity:.3,
        shadowOffset: {width: 10, height:10},
    }, 

    FeaturedBGInner:{
        position:'relative',
        left:20,
        top: -60,
        width:350,
        height:210,
        backgroundColor: colors.search,
        borderRadius:40,
    },

    menuTabs: {
        position:'relative',
        left:10,
        top:-30,
        width:370,
        height: 110,
        backgroundColor:colors.tint,
        borderRadius:40,
        marginBottom:20,
        shadowOpacity:.3,
        shadowOffset: {width: 10, height:10},
    },

});