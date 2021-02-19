import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from '../templates/GridViewTemplate';
import Card from '../components/molecules/Card/Card';
import { connect } from 'react-redux';
import withContext from '../hoc/withContext';


const Notes = ({notes}) => {
    return (
         <GridViewTemplate>
             {notes.map((item)=><Card cardType="notes" key={item.id} title={item.title} content={item.content} created={item.created} id={item.id}/>)}
         </GridViewTemplate>
        
     );
}

const mapStateToProps=({notes})=>({notes});

Notes.propTypes={
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            // cardType: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired
        })
    )
};

Notes.defaultProps={
    pageContext: 'notes'
};
export default connect(mapStateToProps)(withContext(Notes));

