import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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