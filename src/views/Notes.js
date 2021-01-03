import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from '../templates/GridViewTemplate';
import Card from '../components/molecules/Card/Card';
import { connect } from 'react-redux';


const Notes = ({notes}) => {
    return (
         <GridViewTemplate pageType="notes">
             {notes.map((item)=><Card cardType="notes" key={item.id} title={item.title} content={item.content} created={item.created} id={item.id}/>)}
         </GridViewTemplate>
        
     );
}

const mapStateToProps=({notes})=>({notes});

Notes.propTypes={
    pageType: PropTypes.oneOf(['notes','twitters','articles'])
};

Notes.defaultProps={
    pageType: 'notes'
};
export default connect(mapStateToProps)(Notes);

