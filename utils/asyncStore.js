import { setItem, getItem } from '@react-native-community/async-storage';

const getObjectFromStore = async (key) => {
  try {
    const value = await getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch(e) {
    console.log(e)
    return null
  }
}

const getFromStore = async key => {
  try {
    const value = await getItem(key)
    return value
  } catch(e) {
    console.log(e)
    return null
  }
}

const setToStore = async (key, value) => {
  try {
    await setItem(key, value)
    return true;
  } catch (e) {
    console.log(e)
    return false;
  }
}

const setObjectToStore = async (key, obj) => {
  try {
    const jsonValue = JSON.stringify(obj)
    await AsyncStorage.setItem(key, jsonValue)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export { getFromStore, getObjectFromStore, setToStore, setObjectToStore };