

const useLocalStorage = () => {

    const setLocalStorage = (key, value) => {
        try{
            window.localStorage.setItem(key,JSON.stringify(value));
        } catch(error){
            console.log(error);
        }
    }

    const getLocalStorage = (key) => {
        try{
            const getitem =  window.localStorage.getItem(key);
            return getitem ? getitem : undefined
        } catch(error){
            console.log(error)
        }
    }

    const removeItemFromLocalStorage = (key) => {
        try{
            window.localStorage.removeItem(key);
        } catch(error){
            console.log(error)
        }
    }

    const clearLocalStorage = () => {
        try{
            window.localStorage.clear();
        } catch (e) {
            console.log(e);
        }
    }
    
    return {getLocalStorage,setLocalStorage,removeItemFromLocalStorage,clearLocalStorage};
}

export default useLocalStorage;