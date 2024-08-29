import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {format} from 'date-fns';
import {styles} from './styles';

const RepositoryCard = ({item, onPressFav, isFav}) => {
  const [isFavorited, setIsFavorited] = useState(isFav);
  const [hasLanguage, setHasLanguage] = useState(!!item?.primaryLanguage?.name);

  useEffect(() => {
    setIsFavorited(isFav);
  }, [isFav]);

  let colorCircle;
  switch (item?.primaryLanguage?.name) {
    case 'HTML':
      colorCircle = '#e34c26';
      break;
    case 'TypeScript':
      colorCircle = '#3178c6';
      break;
    case 'JavaScript':
      colorCircle = '#f1e05a';
      break;
    case 'CSS':
      colorCircle = '#563d7c';
      break;
    case 'Python':
      colorCircle = '#3572A5';
      break;
    case 'Cpp':
      colorCircle = '#f34b7d';
      break;
    case 'Java':
      colorCircle = '#b07219';
      break;
    case 'PHP':
      colorCircle = '#4F5D95';
      break;
    case 'Kotlin':
      colorCircle = '#F18E33';
      break;
    case 'Objective-C':
      colorCircle = '#3D7A9D';
      break;
    case 'Ruby':
      colorCircle = '#701516';
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          display: hasLanguage ? 'flex' : 'none',
        }}>
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

export default RepositoryCard;
