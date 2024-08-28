import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [dataRepository, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('myData');
        if (storedData) {
          setData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Error loading data', error);
      }
    };

    loadData();
  }, []);

  const saveData = async newData => {
    try {
      setData(newData);
      await AsyncStorage.setItem('myData', JSON.stringify(newData));
    } catch (error) {
    }
  };

  return (
    <DataContext.Provider value={{dataRepository, saveData}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
