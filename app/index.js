import { useReducer, useState,useEffect } from 'react';
import { View, ScrollView,SafeAreaView } from 'react-native';
import { Stack, useRouter, Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';



import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
  const router = useRouter();
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.antiqueWhite}}>
      <Stack.Screen 
        options={{
          headerStyle:{ backgroundColor: COLORS.lightWhite},
          headerShadowVisible:true,
          headerShown:false,
          // headerLeft: ()=>(
          //   <ScreenHeaderBtn iconUrl={images.logo} dimension="100%"/>
          // ),
          headerTitle:""
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:0}}>
        <View 
          style={{
            flex:1,
            padding:0,
            // backgroundColor:'aqua'
          }}
        >

          <Welcome/>
         
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home;