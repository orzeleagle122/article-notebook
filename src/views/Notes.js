import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from '../templates/UserPageTamplate';
import Card from '../components/molecules/Card/Card';

const notes = [
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
    {
      id: 3,
      title: 'Du bist Reactish',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
    },
    {
      id: 4,
      title: 'Reactuj się kto moze!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
    },
  ];

const Notes = () => {
    return (
         <GridViewTemplate pageType="notes">
             {notes.map((item)=><Card cardType="notes" key={item.id} title={item.title} content={item.content} created={item.created}/>)}
         </GridViewTemplate>
        
     );
}

Notes.propTypes={
    pageType: PropTypes.oneOf(['notes','twitters','articles'])
};

Notes.defaultProps={
    pageType: 'notes'
};
export default Notes;

