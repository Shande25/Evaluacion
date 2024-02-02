import { StyleSheet, View } from 'react-native';

export const Box4 = () => {
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
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top:'40%'
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top:10,
    left: 0,
  },
  boxblue: {
    width: 100,
    height: 100,
    backgroundColor: '#209BEE',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 40,
    right: 0,
  },
});
