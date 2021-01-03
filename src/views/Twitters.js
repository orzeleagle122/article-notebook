import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GridViewTemplate from '../templates/GridViewTemplate';
import Card from '../components/molecules/Card/Card';


const Twitters = ({twitters}) => {
    return (
         <GridViewTemplate pageType="twitters"> 
            {twitters.map((item)=><Card cardType="twitters" key={item.id} title={item.title} content={item.content} twitterName={item.twitterName} created={item.created} id={item.id}/>)}       
         </GridViewTemplate>
        
     );
}

const mapStateToProps=({twitters})=>({twitters});

Twitters.propTypes={
    pageType: PropTypes.oneOf(['notes','twitters','articles'])
};

Twitters.defaultProps={
    pageType: 'twitters'
};
 
export default connect(mapStateToProps)(Twitters);


