import {gql, useQuery} from '@apollo/client';

const GET_USER_AND_REPOS = gql`
  query ($username: String!, $after: String) {
    user(login: $username) {
      name
      avatarUrl
      bio
      repositories(first: 10, after: $after) {
        edges {
          node {
            id
            name
            description
            url
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

const UserProfile = ({username}) => {
  const {loading, error, data, fetchMore} = useQuery(GET_USER_AND_REPOS, {
    variables: {username},
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const {user} = data;
  const {repositories} = user;

  return (
    <View>
      <Text>{user.name}</Text>
      <Image source={{uri: user.avatarUrl}} />
      <Text>{user.bio}</Text>

      <FlatList
        data={repositories.edges}
        keyExtractor={item => item.node.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.node.name}</Text>
            <Text>{item.node.description}</Text>
            <Button
              title="Load More"
              onPress={() =>
                fetchMore({
                  variables: {
                    after: repositories.pageInfo.endCursor,
                  },
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
};
