import {StyleSheet, View, Text} from 'react-native';

export const Box1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxYellow}></View>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxPink}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112F43',
  },
  boxYellow: {
    flex:1,
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    borderWidth: 10,
    borderColor: 'white',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    left: '76%',
 
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  boxPink: {
    width: 100,
    height: 100,
    backgroundColor: '#209BEE',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
