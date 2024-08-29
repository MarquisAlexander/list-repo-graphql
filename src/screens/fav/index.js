import {useContext, useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
import {DataContext} from '../../context/DataContext';
import RepositoryCard from '../../components/CardRepository';
import {styles} from './styles';

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
    <FlatList
      data={dataUser}
      style={styles.container}
      ListHeaderComponent={
        <Text style={styles.screenTitle}>Meus favoritos</Text>
      }
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
  );
}
