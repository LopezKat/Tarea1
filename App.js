import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Switch,
  Button,
  ScrollView,
  ToastAndroid,
  Slider,
  TouchableHighlight,
  Alert
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {

  showAlert () {
    //TODO
    ToastAndroid.show('Advertencia !', ToastAndroid.SHORT);
   }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headContainer}>
          <Text style={styles.headTitle}> WASHING ROOM </Text>
          <Image 
            source={{ uri:'https://image.flaticon.com/icons/png/512/47/47429.png'}}
            style={styles.headImage}
            />
            </View>
            <View style={styles.informationContainer}>
              <View style={styles.informationWrapper}>
                  <Text style={styles.informationValue}> 410 KMh</Text>
                  <Text style={styles.informationTitle}> TODAY </Text>
                  <Slider
                        thumbTintColor={"#DA81F5"}                      
                        style={{width: 100}}
                        step={1}
                        minimumValue={0}
                        maximumValue={500}
                        minimumTrackTintColor={"#DA81F5"} 
                  />            
                </View>        
              
              <View style={styles.informationWrapper}>
                <Text style={styles.informationValue}> 340 KWh </Text>
                <Text style={styles.informationTitle}> YESTERDAY </Text>
                <Slider
                        thumbTintColor={"#DA81F5"}                      
                        style={{width: 100}}
                        step={1}
                        minimumValue={0}
                        maximumValue={500}
                        minimumTrackTintColor={"#DA81F5"}
                />          
              </View>
  
              <View style={styles.informationWrapper}>
                <Text style={styles.informationValue}> 460 KWh </Text>
                <Text style={styles.informationTitle}> LAST WEEK </Text>
                <Slider
                        thumbTintColor={"#DA81F5"}                      
                        style={{width: 100}}
                        step={1}
                        minimumValue={0}
                        maximumValue={500}
                        minimumTrackTintColor={"#DA81F5"}
                />           
              </View>
            </View>
  
            <View style={styles.bottomWrapper}>
            <Button
                  color="#FF0040"
                  title="TURN OFF ALL DEVICES"
                />
              </View>
      
          <View style={styles.formContainer}> 
            <View style={styles.formImage}>        
              <Image 
              source={{ uri:'https://png.icons8.com/ios/1600/light-on.png'}}
              style={styles.bodyImage}
              />
              <Image 
              source={{ uri:'https://cdn.icon-icons.com/icons2/38/PNG/512/washingmachine_washingmachine_4725.png'}}
              style={styles.bodyImage}
              /> 
              <Image 
              source={{ uri:'https://img.heypik.com/58pic/28/30/16/88s58PICjwF_1024.jpg?x-oss-process=image/resize,w_264/sharpen,100/quality,q_80'}}
              style={styles.bodyImage}
              /> 
              <Image 
              source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-qRtutVBcyaOayfWDdYDdtxisoUg69ouJfv2D-LbazzPC2QY'}}
              style={styles.bodyImage}
              /> 
              <Image 
              source={{ uri:'https://image.flaticon.com/icons/png/512/53/53838.png'}}
              style={styles.bodyImage}
              /> 
            </View>
  
            <View style={styles.formText}>        
              <Text style={styles.formLabel}> Main Light Room</Text>
              <Text style={styles.formLabel}> Washing Machine</Text>
              <Text style={styles.formLabel}> Ecobase Termostat</Text>
              <Text style={styles.formLabel}> Wash Hand Machine</Text>
              <Text style={styles.formLabel}> Base Speaker</Text>        
            </View> 
  
              <View style={styles.formBottom}>
              
                <Button
                      color="#DA81F5"                  
                      title="ON"
                      style={styles.headBottom}
                      
                  />
                <Button
                    title="ON"
                    color="#DA81F5"
                    style={styles.headBottom}      
                    
                  />
                  <Text style={styles.formLabel}> 0°</Text>
                <Button
                      color="#BDBDBD"
                      title="OFF"
                    />
                <Button
                      color="#DA81F5"
                      title="PLATINO"
                    />   
              </View>
            </View>
      
      </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    headContainer: {
       backgroundColor: '#FFF',
       alignItems:'center',
    },
    headTitle:{
      color:'#000000',
      fontSize:20,
      marginBottom: 20
    },
    headImage:{
      width:120,
      height:120,
      marginBottom: 20        
    },
    informationTitle:{
      fontSize:12,
      color:'#021925',
    },
    informationValue:{
      fontSize:18,
      color:'#000000',
    },
    informationContainer:{
      flexDirection:'row',
    },
    informationWrapper:{
      flex:1,
      alignItems:'center',
      padding:10,
    },
    formContainer:{
      flexDirection:'row',
      marginBottom: 20,
      padding:10 
            
    },
    formText:{
      marginHorizontal: 25,
    },
    formBottom:{
      marginHorizontal: 90,
      paddingBottom: 50    
    },
  
    formLabel:{
      color:'#000000',
      marginVertical:9,
    },
    bottomWrapper:{
      marginHorizontal: 25,
      marginVertical:20,
    },
    headBottom:{
      width:40,
      margin:20,
      marginVertical:9,
                    
    },
    bodyImage:{
      width:20,
      height:20,
      marginBottom: 20 
    }
     
  });