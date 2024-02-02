import { StyleSheet, View } from 'react-native';

export const Box5 = () => {
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
    width: 100,
    height: '95%',
    backgroundColor: 'yellow',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right:0,
    top:10
  },
  boxPurple: {
    width: 100,
    height: '95%',
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    left:0,
    top:10
  },
  boxblue: {
    width: 100,
    height: '95%',
    backgroundColor: '#209BEE',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top:10

  },
});
