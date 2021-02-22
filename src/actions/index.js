import axios from 'axios';

export const REMOVE_ITEM='REMOVE_ITEM';
export const ADD_ITEM='ADD_ITEM';
export const AUTH_REQUEST='AUTH_REQUEST';
export const AUTH_SUCCESS='AUTH_SUCCESS';
export const AUTH_FAILURE='AUTH_FAILURE';
export const FETCH_REQUEST='FETCH_REQUEST';
export const FETCH_SUCCESS='FETCH_SUCCESS';
export const FETCH_FAILURE='FETCH_FAILURE';

export const fetchItems=(itemType)=>(dispatch,getState)=>{
    dispatch({type:FETCH_REQUEST});
    return axios.get('/api/notes/type',{
        params:{
            type:itemType,
            userID:getState().userID,
        }
    })
    .then(payload=>{
        console.log(payload);
        dispatch({type:FETCH_SUCCESS,payload})
    })

    .catch(err=>{
        console.log(err);
        dispatch({type:FETCH_FAILURE});
    })
}

export const removeItem=(itemType,id)=>{
    return (
        {
            type: REMOVE_ITEM,
            payload: {
                itemType,
                id
            }
        }
    )
}

export const addItem=(itemType,itemContent)=>{
    const getId=()=>`+${Math.random().toString(36).substr(2,9)}`;

    return (
        {
            type: ADD_ITEM,
            payload: {
                itemType,
                item: {
                    id:getId(),
                    ...itemContent
                }                
            }
        }
    )
}

export const authenticate=(username,password)=>dispatch=>{
    dispatch({type:AUTH_REQUEST});
    return axios.post('/api/user/login',{
        username,
        password
    })
    .then(payload=>dispatch({type:AUTH_SUCCESS,payload}))
    .catch(err=>{
        console.log(err);
        dispatch({type:AUTH_FAILURE});
    })
}








// const dummyArticle = {
//     id: 1,
//     title: 'Wake me up when Vue ends',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     twitterName: 'hello_roman',
//     articleUrl: 'https://youtube.com/',
//     created: '1 day',
//   }; 