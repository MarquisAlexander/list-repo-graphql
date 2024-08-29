import React, {useContext, useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import RepositoryCard from '../../components/CardRepository';
import SearchBar from '../../components/SearchBar';
import UserCard from '../../components/UserCard';
import FoundUser from '../../components/FoundUser';
import NotFoundUser from '../../components/NotFoundUser';
import {DataContext} from '../../context/DataContext';
import {GET_USER_AND_REPOS} from './consts';
import {styles} from './styles';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [oldUserName, setOldUsername] = useState('');
  const [dataUser, setDataUser] = useState();
  const [userNotFound, setUserNotFound] = useState(false);
  const [cursor, setCursor] = useState();
  const [foundUser, setFounderUser] = useState(true);

  const {loading, error, data} = useQuery(GET_USER_AND_REPOS, {
    variables: {login: username, first: 10, after: cursor},
    skip: !username,
  });

  const {dataRepository, saveData} = useContext(DataContext);

  useEffect(() => {
    if (data) {
      setFounderUser(false);
      const favoriteRepoIds = new Set(dataRepository.map(repo => repo.id));
      const repositoriesWithFavoriteStatus = data.user.repositories.edges.map(
        ({node, cursor}) => ({
          ...node,
          cursor,
          isFavorited: favoriteRepoIds.has(node.id),
        }),
      );

      // Validacao para verificar se mescla os array ou se vai sobrescrever o array antigo
      if (dataUser?.user?.repositories && repositoriesWithFavoriteStatus) {
        setDataUser({
          user: {
            ...data.user,
            repositories: [
              ...dataUser?.user?.repositories,
              ...repositoriesWithFavoriteStatus,
            ],
          },
        });
      } else {
        setDataUser({
          user: {
            ...data.user,
            repositories: repositoriesWithFavoriteStatus,
          },
        });
      }
      setUserNotFound(false);
      setOldUsername(username);
    }
  }, [data]);

  useEffect(() => {
    if (username) {
      setCursor(undefined); // Reset cursor when username changes
      setDataUser();
    }
  }, [username]);

  const loadMoreItems = () => {
    if (data?.user?.repositories?.pageInfo?.hasNextPage) {
      setCursor(data?.user?.repositories?.pageInfo?.endCursor);
    }
  };

  const handleAddRepositoryToFavorite = item => {
    // Atualiza o status de favoritado do repositório no estado do usuário
    const updatedRepositories = dataUser.user.repositories.map(repo =>
      repo.id === item.id ? {...repo, isFavorited: !repo.isFavorited} : repo,
    );

    // Atualiza o estado do usuário com a nova lista de repositórios
    setDataUser(prevState => ({
      user: {
        ...prevState.user,
        repositories: updatedRepositories,
      },
    }));

    // Atualiza o array de repositórios favoritos no contexto
    const updatedDataRepository = item.isFavorited
      ? dataRepository.filter(repo => repo.id !== item.id)
      : [...dataRepository, {...item, isFavorited: true}];

    saveData(updatedDataRepository);
  };

  const findUser = () => {
    if (data && data.user) {
      setDataUser({
        user: {
          ...data.user,
          repositories: data.user.repositories.edges.map(({node, cursor}) => ({
            ...node,
            cursor,
            isFavorited: dataRepository.some(repo => repo.id === node.id),
          })),
        },
      });
      setOldUsername(username);
    } else {
      setDataUser();
    }
    setUserNotFound(!data?.user);
  };

  function clearSearch() {
    setDataUser();
    setFounderUser(true);
    setUsername('');
  }

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <FoundUser
            username={username}
            dataUser={dataUser}
            visible={foundUser}
          />
          <SearchBar
            value={username}
            onSubmitEditing={findUser}
            onPressFind={findUser}
            onPressClose={clearSearch}
            onChangeText={setUsername}
            isFoundUser={!!dataUser?.user}
          />
          {userNotFound && !loading ? (
            <NotFoundUser username={username} />
          ) : null}
          <UserCard
            visibled={!!dataUser?.user}
            name={dataUser?.user?.name}
            avatarUrl={dataUser?.user?.avatarUrl}
            bio={dataUser?.user?.bio}
            username={oldUserName}
          />
          {dataUser?.user && <Text style={styles.repoTitle}>Repositórios</Text>}
        </>
      }
      style={{flex: 1, padding: 20}}
      contentContainerStyle={{paddingBottom: 50}}
      data={dataUser?.user?.repositories}
      keyExtractor={item => item.id}
      ListFooterComponent={
        loading && (
          <Text style={[{...styles.repoTitle, textAlign: 'center'}]}>
            CARREGANDO
          </Text>
        )
      }
      renderItem={({item}) => (
        <RepositoryCard
          item={item}
          onPressFav={() => handleAddRepositoryToFavorite(item)}
          isFav={item?.isFavorited}
        />
      )}
      onEndReached={loadMoreItems}
      onEndReachedThreshold={0.5}
    />
  );
};

export default UserProfile;
