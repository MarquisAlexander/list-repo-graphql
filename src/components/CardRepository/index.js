import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {format} from 'date-fns';

const RepositoryCard = ({item, onPressFav, isFav}) => {
  const [isFavorited, setIsFavorited] = useState(isFav);

  useEffect(() => {
    setIsFavorited(isFav);
  }, [isFav]);

  let colorCircle;
  switch (item?.primaryLanguage?.name) {
    case 'HTML':
      colorCircle = 'red';
      break;
    case 'TypeScript':
      colorCircle = '#3276C6';
      break;
    case 'JavaScript':
      colorCircle = '#F5DA79';
      break;
    case 'CSS':
      colorCircle = 'green';
      break;
    default:
      colorCircle = 'red';
      break;
  }

  return (
    <View style={styles.cardRepositori}>
      <View style={styles.headerCardRepository}>
        <Text style={styles.repositorieTitle}>{item.name}</Text>
        <TouchableOpacity
          onPress={onPressFav}
          style={{
            borderWidth: isFavorited ? 1 : 0,
            borderColor: '#32C0C6',
            padding: 10,
            borderRadius: 50,
            backgroundColor: isFavorited ? '#fff' : '#F3F3F5',
          }}>
          {!!isFavorited ? (
            <MaterialIcons name="favorite" color="#32C0C6" size={15} />
          ) : (
            <MaterialIcons name="favorite-outline" color="#8C8C8C" size={15} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.repositorieDescription}>{item.description}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: 16,
            width: 16,
            backgroundColor: colorCircle,
            borderRadius: 50,
            marginRight: 8,
          }}
        />
        <Text style={styles.primaryLanguageText}>
          {`${item?.primaryLanguage?.name}`}
        </Text>
      </View>
      <Text style={styles.primaryLanguageText}>
        Updated on {format(new Date(item?.updatedAt), 'dd MMM yyyy')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardRepositori: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E3E6E9', // Cor da borda
    borderRadius: 8,
    marginTop: 16,
  },
  headerCardRepository: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  repositorieTitle: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'Poppins-SemiBold',
    color: '#616161',
    maxWidth: '80%',
  },
  repositorieDescription: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    color: '#8C8C8C',
    marginBottom: 9,
  },
  primaryLanguageText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
    color: '#616161',
  },
});

export default RepositoryCard;
