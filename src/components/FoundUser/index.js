import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FoundUser = ({dataUser, visible}) => {
  return (
    <View style={[{...styles.container, display: visible ? 'flex' : 'none'}]}>
        <View style={styles.foundUser}>
          <Text
            style={[
              {...styles.headerText},
              {display: dataUser?.user ? 'none' : 'flex'},
            ]}>
            Procure pelo nome ou nome de usuário
          </Text>
          <Text
            style={[
              {...styles.descriptionText},
              {display: dataUser?.user ? 'none' : 'flex'},
            ]}>
            Encontre os repositórios de algum usuário digitando no campo abaixo
          </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 21,
    lineHeight: 31,
    marginBottom: 8,
    color: '#616161',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
    marginBottom: 24,
    color: '#616161',
  },
  userNameText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
    marginTop: 32,
    textAlign: 'center',
    color: '#32C0C6',
  },
  notFoundUserNameTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#616161',
  },
  notFoundUserNameDescription: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: '#616161',
  },
});

export default FoundUser;
