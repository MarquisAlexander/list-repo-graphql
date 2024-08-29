import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({
  value,
  onChangeText,
  onSubmitEditing,
  onPressFind,
  onPressClose,
  isFoundUser,
}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Buscar usuário"
        placeholderTextColor="#8C8C8C"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={!isFoundUser ? onPressFind : onPressClose}>
        {isFoundUser ? (
          <Icon name="close" size={20} color="#8C8C8C" />
        ) : (
          <Icon name="search" size={20} color="#8C8C8C" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    color: '#8C8C8C',
  },
  iconContainer: {
    padding: 10,
  },
});

export default SearchBar;
