





import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    StatusBar,
    NativeModules,
    Image,
    TextInput,
    ScrollView,
    ActionSheetIOS,
  } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
const RadioOption = props => {
  console.log(props, 'props');
  const {firstOption,
    secOption,
    Question,onChange,
    cond}=props

  return <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
  <Text style={styles.txtStl}>{Question}</Text>
  <View style={{flexDirection:'row',marginTop:10}}>

<TouchableOpacity style={{width:'50%',flexDirection:'row',justifyContent:'flex-start'}}
 onPress={()=>onChange(true)}
 > 
<Fontisto 
name={cond ? 'radio-btn-active' : 'radio-btn-passive'}
size={20}
style={{marginRight:10,marginTop:-2}}
color={cond?"purple":"gray"}
/>
<Text style={styles.txtStl}>{firstOption}</Text>
  </TouchableOpacity>
  <TouchableOpacity 
  onPress={()=>onChange(false)} 
  style={{width:'50%',flexDirection:'row',justifyContent:'flex-start'}}> 
  <Fontisto 
name={cond ? 'radio-btn-passive' : 'radio-btn-active'}
size={20}
style={{marginHorizontal:10,marginTop:-2}}
color={cond?"gray":"purple"}
/>
<Text style={styles.txtStl}>{secOption  }</Text>
  </TouchableOpacity>
</View>
</View>
};

const styles = StyleSheet.create({
  txtStl: {
    fontSize: 12,
    marginBottom: 5,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default RadioOption;



     