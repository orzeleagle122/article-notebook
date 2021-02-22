import {
  REMOVE_ITEM,
  ADD_ITEM,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../actions';


const initialState={
    twitters: [
        {
            id: 1,
            title: 'Hello Roman',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
            twitterName: 'hello_roman',
          },
          {
            id: 2,
            title: 'Redux guy',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
            twitterName: 'dan_abramov',
          },
    ],
    articles:[
        {
            id: 1,
            title: 'React on my mind',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/',
            created: '1 day',
          },
          {
            id: 2,
            title: 'Wish you React',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/',
            created: '1 day',
          },
    ],
    notes: [
        {
            id: 1,
            title: 'Wake me up when Vue ends',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
          },
          {
            id: 2,
            title: 'Como es An Gular?',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
          },
    ]
}

const rootReducer=(state=initialState,action)=>{
  switch(action.type){
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id
      }
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item=>item.id!==action.payload.id)
        ]
    }
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item
        ]
    }
    default:
      return state;
  }
};

export default rootReducer;