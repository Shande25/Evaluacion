import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

export const ArregloProporcionado = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [pares, setPares] = useState<number[]>([]);
  const [impares, setImpares] = useState<number[]>([]);
  const [dividido, setDividido] = useState(false);

  const classificar = () => {
    const pares = numbers.filter((number) => number % 2 === 0);
    const impares = numbers.filter((number) => number % 2 !== 0);
    setPares(pares);
    setImpares(impares);
    setDividido(true);
  };
  return (
    <View>
      <Text>BIENVENIDO</Text>
      <Text>Vector: {numbers.join(', ')}</Text>
      <Button title="Claisificar" onPress={classificar} />{dividido && (
        <View>
          <Text>Pares:</Text>
          <Text>{pares.join(', ')}</Text>
          <Text>Impares:</Text>
          <Text>{impares.join(', ')}</Text>
        </View>
      )}
    </View>
  );
};
