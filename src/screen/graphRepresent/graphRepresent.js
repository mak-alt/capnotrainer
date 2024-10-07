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
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button} from 'native-base';
import HeaderBack from '../../components/headerBack';
// import IntroTxt from '../components/introTxt';
// import CustomButton from '../components/button';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const GraphRepresent = ({props, navigation}) => {
  const {StatusBarManager} = NativeModules;
  const screenWidth = Dimensions.get('window').width;
  const [scale, setScale] = useState(['a']);
  const data = {
    labels: ['0:10', '0:20', '0:30'],
    datasets: [
      {
        data: [0, 50, 0, 50, 0, 50, 0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['P6.0 Instruments'], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'white',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(128,0,128, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  Dimensions.addEventListener('change', e => {
    console.log(e, 'eee');
    setScale(e);
    // this.setState({
    //   orientation: isPortrait() ? 'portrait' : 'landscape'
    // });
  });

  // }

  return (
    <View style={styles.container}>
      <HeaderBack
        navigation={navigation}
        routesNames="livesessions"
        txt="Graph"
      />

      {/* MAIN VIEW START */}
      <ScrollView>
        <View>
          <LineChart
            data={data}
            width={scale ? screenWidth : screenWidth}
            height={256}
            style={{marginTop: 20}}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
          />

          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <BarChart
              style={{
                marginTop: 10,
                marginLeft: 5,
                borderWidth: 0.5,
                borderColor: 'purple',
              }}
              data={data}
              width={scale ? screenWidth / 2.1 : screenWidth / 2.1}
              height={220}
              // yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
            <BarChart
              style={{
                marginTop: 10,
                marginLeft: 5,
                borderWidth: 0.5,
                borderColor: 'purple',
              }}
              data={data}
              width={scale ? screenWidth / 2.1 : screenWidth / 2.1}
              height={220}
              // yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
          </View>
        </View>
      </ScrollView>
      {/* MAIN VIEW START */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:
      Platform.OS === 'ios'
        ? NativeModules.StatusBarManager.HEIGHT
        : NativeModules.StatusBarManager.HEIGHT,
  },
});

export default GraphRepresent;
