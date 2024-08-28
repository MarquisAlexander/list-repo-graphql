// NotFoundUser.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotFoundUser = ({ username }) => {
  return (
    <View style={styles.notFoundUser}>
      <Text style={styles.userNameText}>
        {`"${username}"`}
      </Text>
      <Text style={styles.notFoundUserNameTitle}>
        Nenhum usuário encontrado
      </Text>
      <Text style={styles.notFoundUserNameDescription}>
        Verifique se a escrita está correta ou tente novamente
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notFoundUser: {
    marginTop: 32,
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
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

export default NotFoundUser;
