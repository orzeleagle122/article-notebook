import axios from 'axios';

export const removeItem=(itemType,id)=>{
    return (
        {
            type: 'REMOVE_ITEM',
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
            type: 'ADD_ITEM',
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
    dispatch({type:'AUTHENTICATE_REQUEST'});
    return axios.post('/api/user/login',{
        username,
        password
    })
    .then(payload=>dispatch({type:'AUTHENTICATE_SUCCESS',payload}))
    .catch(err=>{
        console.log(err);
        dispatch({type:'AUTHENTICATE_FAILURE'});
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