import AsyncStorage from "@react-native-async-storage/async-storage";

//função para gravar os dados do usuário
export const signIn = async (data) => {
    try {
        const content = JSON.stringify(data);
        console.log(content);
        await AsyncStorage.setItem('USER_DATA', content);
    }
    catch (e) {
        console.log(e);
    }
}

//função para ler os dados do usuário
export const getData = async () => {
    try {
        return await AsyncStorage.getItem('USER_DATA');
    }
    catch (e) {
        console.log(e);
    }
}

//função para apagar os dados do usuário
export const signOut = async () => {
    try {
        await AsyncStorage.removeItem('USER_DATA')
    }
    catch (e) {
        console.log(e);
    }
}