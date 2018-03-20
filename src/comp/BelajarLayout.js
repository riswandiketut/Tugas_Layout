import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.H1}>Header</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.H2}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.button}>
            <Text style={styles.Text}>1</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.Text}>2</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.Text}>3</Text>
          </View>
        </View>

        <View style={styles.box5}>
          <View style={styles.button}>
            <Text style={styles.Text}>4</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.Text}>5</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.Text}>6</Text>
          </View>
        </View>

        <View style={styles.box6}>
          <View style={styles.button}>
            <Text style={styles.Text}>7</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.Text}>8</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.Text}>9</Text>
          </View>
        </View>

        <View style={styles.box4}>
          <Text style={styles.H1}>Footer</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#4A148C',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: '#F57F17',
    justifyContent: 'center',
    alignItems: 'center'

  },
  box2: {
    flex: 2,
    marginTop: 10,
    backgroundColor: '#7B1FA2',
    justifyContent: 'center',
    alignItems: 'center'


  },
  box3: {
    flex: 1,
    backgroundColor: '#7B1FA2',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  box4: {
    flex: 1,
    backgroundColor: '#F57F17',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10

  },
  box5: {
    flex: 1,
    backgroundColor: '#7B1FA2',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  box6: {
    flex: 1,
    backgroundColor: '#7B1FA2',
    //marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'

  },

  button: {
    backgroundColor: '#9C27B0',
    height: 60,
    width: 60,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'

  },
  button2: {
    backgroundColor: 'red',
    height: 60,
    width: 60,
    marginTop: 10,

  },
  Text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  H1: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold'
  },
  H2: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold'
  },
});
