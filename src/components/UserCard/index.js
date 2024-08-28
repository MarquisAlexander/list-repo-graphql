import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserCard = ({avatarUrl, name, username, bio, visibled}) => {
  return (
    <View style={[{...styles.card, display: visibled ? 'flex' : 'none'}]}>
      <View style={styles.header}>
        <Image
          source={{uri: avatarUrl}} // URL da imagem do usuário
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>@{username}</Text>
        </View>
      </View>
      <Text style={styles.description}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E3E6E9',
    borderRadius: 8,
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E3E6E9',
    borderRadius: 8,
    paddingBottom: 8,
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 30,
  },
  info: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 28,
    color: '#616161',
  },
  username: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
    color: '#888',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default UserCard;
