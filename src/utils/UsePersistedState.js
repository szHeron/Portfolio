import { useState, useEffect } from 'react';

export default function UsePersistedState(key, initialState){
    const [state, setState] = useState(initialState);

    useEffect(()=>{
        setState(()=>{
            const storageValue = localStorage.getItem(key);
            if(storageValue){
                return JSON.parse(storageValue);
            }else{
                return initialState
            }
        })
    },[]);

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    },[state, key, initialState]);

    return [state, setState];
}