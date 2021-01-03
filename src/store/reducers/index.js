const initialState={
    twitters: [
        {id:1,
        title:'hello patrick',
        content:'lorem impsum dolor',
        created:'1 day',
        twitterName:"orzeleagle"}
    ],
    articles:[
        {
            id:1,
            title:'hello patrick',
            content:'siema siema siema siema',
            created:'1 day',
            articleUrl:'https://google.pl'
        }
    ],
    notes: [
        {
            id:1,
            title:'hello patriick',
            content: 'siema to ja patryk',
            created: '2 day'
        }
    ]
}

const rootReducer=(state=initialState,action)=>{
    console.log(action);
};

export default rootReducer;