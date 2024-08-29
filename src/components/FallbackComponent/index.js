import {View, Text, Button} from 'react-native';

export function Fallback({error, resetErrorBoundary}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#616161', paddingBottom: 20}}>
        Algo deu errado: {error.message}
      </Text>
      <Button
        onPress={resetErrorBoundary}
        title="Tentar Novamente"
        color={'#32C0C6'}
      />
    </View>
  );
}
