import { StyleSheet, View } from 'react-native';

export const Box6 = () => {
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
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  boxYellow: {
    width: '100%',
    height: '25%',
    backgroundColor: 'yellow',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    top: 10,
  },
  boxPurple: {
    width: '100%',
    height: '25%',
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    left: 0,
    top: '25%', 
  },
  boxblue: {
    width: '100%',
    height: '45%',
    backgroundColor: '#209BEE',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: '50%', 
  },
});

