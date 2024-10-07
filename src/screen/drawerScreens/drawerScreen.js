import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import logo from '../../assets/images/splash_screen.png';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import MatrielIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DrawerScreen = ({props, navigation}) => {
  return (
    <View style={styles.draw}>
      {/* <DrawerContentScrollView> */}
      {/* MAIN DRAWER OPTIONS */}

      <View style={{flex: 0.9, marginLeft: 20}}>
        <View style={{marginTop: 60}}>
          <Image
            source={logo}
            style={{width: 250, height: 80, marginLeft: -10}}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('livesessions')}
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 1,
              width: '90%',
              marginTop: 30,
              flexDirection: 'row',
            }}>
            <Icon name={'graph-trend'} size={18} color="purple" />
            <Text
              style={{
                fontSize: 12,
                color: 'purple',
                marginLeft: 6,
                marginTop: 1,
              }}>
              LIVE SESSIONS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('clouddatabase')}
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 1,
              width: '90%',
              marginTop: 30,
              flexDirection: 'row',
            }}>
            <Entypo name={'cloud'} size={18} color="purple" />
            <Text
              style={{
                fontSize: 12,
                color: 'purple',
                marginLeft: 6,
                marginTop: 1,
              }}>
              CLOUD DATABASE
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('clouddatabase')}
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 1,
              width: '90%',
              marginTop: 30,
              flexDirection: 'row',
            }}>
            <MatrielIcon
              name={'account-group'}
              size={18}
              color="purple"
              style={{marginBottom: 2}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'purple',
                marginLeft: 6,
                marginTop: 3,
              }}>
              GROUPS
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('associatetrainer')}
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 1,
              width: '90%',
              marginTop: 30,
              flexDirection: 'row',
            }}>
            <MatrielIcon
              name={'face-agent'}
              size={18}
              color="purple"
              style={{marginBottom: 1}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'purple',
                marginLeft: 6,
                marginTop: 1,
              }}>
              ASSOCIATE TRAINERS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('clients')}
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 1,
              width: '90%',
              marginTop: 30,
              flexDirection: 'row',
            }}>
            <FontAwesome
              name={'user'}
              size={18}
              color="purple"
              style={{marginBottom: 2}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'purple',
                marginLeft: 6,
                marginTop: 3,
              }}>
              CLIENT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('profile')}
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 1,
              width: '90%',
              marginTop: 30,
              flexDirection: 'row',
            }}>
            <FontAwesome
              name={'id-card'}
              size={18}
              color="purple"
              style={{marginBottom: 2}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'purple',
                marginLeft: 6,
                marginTop: 3,
              }}>
              MY PROFILE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('clouddatabase')}
            style={{
              borderBottomColor: 'purple',
              borderBottomWidth: 1,
              width: '90%',
              marginTop: 30,
              flexDirection: 'row',
            }}>
            <MatrielIcon
              name={'format-list-checkbox'}
              size={18}
              color="purple"
              style={{marginBottom: 2}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'purple',
                marginLeft: 6,
                marginTop: 3,
              }}>
              SUBSCRIPTION
            </Text>
          </TouchableOpacity>
          {/* Notification */}
        </View>
      </View>

      {/* LOG OUT OPTION */}
      <View style={{flex: 0.1, marginLeft: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('signin')}
          style={{
            borderBottomColor: 'purple',
            borderBottomWidth: 1,
            width: '90%',
            marginTop: 30,
            flexDirection: 'row',
          }}>
          <FontAwesome
            name={'power-off'}
            size={18}
            color="purple"
            style={{marginBottom: 2}}
          />
          <Text
            style={{
              fontSize: 12,
              color: 'purple',
              marginLeft: 6,
              marginTop: 3,
            }}>
            LOG OUT
          </Text>
        </TouchableOpacity>
      </View>

      {/* </DrawerContentScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  draw: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default DrawerScreen;
