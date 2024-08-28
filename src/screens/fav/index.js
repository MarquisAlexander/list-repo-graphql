import {useContext, useEffect, useState} from 'react';
import {Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import {DataContext} from '../../context/DataContext';
import RepositoryCard from '../../components/CardRepository';

export function Favorite() {
  const [dataUser, setDataUser] = useState(dataRepository);
  const {dataRepository, saveData} = useContext(DataContext);

  useEffect(() => {
    setDataUser(dataRepository);
  }, [dataRepository]);

  const handleAddRepositoryToFavorite = item => {
    const updatedRepositories = dataUser?.user?.repositories.map(repo =>
      repo.id === item.id ? {...repo, isFavorited: !repo.isFavorited} : repo,
    );

    setDataUser(prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        repositories: updatedRepositories,
      },
    }));

    const updatedDataRepository = item.isFavorited
      ? dataRepository.filter(repo => repo.id !== item.id)
      : [...dataRepository, {...item, isFavorited: true}];

    saveData(updatedDataRepository);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Meus favoritos</Text>
      <FlatList
        data={dataUser}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 50}}
        ListEmptyComponent={() => (
          <Text style={styles.textNotFound}>
            Você não possui repositórios favoritos.
          </Text>
        )}
        renderItem={({item}) => {
          return (
            <RepositoryCard
              item={item}
              onPressFav={() => handleAddRepositoryToFavorite(item)}
              isFav={item?.isFavorited}
            />
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#616161',
    fontSize: 21,
    lineHeight: 31,
  },
  container: {
    paddingTop: 32,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textNotFound: {
    fontFamily: 'Poppins-Regular',
    color: '#616161',
    fontSize: 18,
    lineHeight: 31,
    textAlign: 'center',
    marginTop: 20,
  }
});
