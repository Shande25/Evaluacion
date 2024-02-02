import { StyleSheet, View } from 'react-native';

export const Box7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxYellow}></View>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxblue}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112F43',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxYellow: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    
    
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top:'32%'
    
  },
  boxblue: {
    width: 100,
    height: 100,
    backgroundColor: '#209BEE',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom:'32%'


  },
});
