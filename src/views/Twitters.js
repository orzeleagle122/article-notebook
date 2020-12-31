import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from '../templates/GridViewTemplate';
import Card from '../components/molecules/Card/Card';

const twitters = [
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
    {
      id: 3,
      title: 'React router stuff',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
      twitterName: 'mjackson',
    },
    {
      id: 4,
      title: 'Super animacje!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
      twitterName: 'sarah_edo',
    },
  ];

const Twitters = () => {
    return (
         <GridViewTemplate pageType="twitters">             
            {twitters.map((item)=><Card cardType="twitters" key={item.id} title={item.title} content={item.content} twitterName={item.twitterName} created={item.created} id={item.id}/>)}
         </GridViewTemplate>
        
     );
}
Twitters.propTypes={
    pageType: PropTypes.oneOf(['notes','twitters','articles'])
};

Twitters.defaultProps={
    pageType: 'twitters'
};
 
export default Twitters;