import { StyleSheet, View } from 'react-native';

export const Box10 = () => {
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
    right:'14%',
    top:'37%'

  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    left:'14%',
    top:'37%'
  },
  boxblue: {
    width: 100,
    height: 100,
    backgroundColor: '#209BEE',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    
   

  },
});
