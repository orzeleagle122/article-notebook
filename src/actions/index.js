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








// const dummyArticle = {
//     id: 1,
//     title: 'Wake me up when Vue ends',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     twitterName: 'hello_roman',
//     articleUrl: 'https://youtube.com/',
//     created: '1 day',
//   }; 