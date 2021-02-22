import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GridViewTemplate from '../templates/GridViewTemplate';
import Card from '../components/molecules/Card/Card';
import withContext from '../hoc/withContext';
import {fetchItems} from '../actions';


const Twitters = ({twitters}) => {

    useEffect(() => {
        fetchItems();
      }, []);

    return (
         <GridViewTemplate> 
            {twitters.map((item)=><Card cardType="twitters" 
                                        key={item.id} 
                                        title={item.title} 
                                        content={item.content} 
                                        twitterName={item.twitterName} 
                                        created={item.created}
                                        id={item.id}/>
                            )}       
         </GridViewTemplate>
        
     );
}

const mapStateToProps=({twitters})=>({twitters});

Twitters.propTypes={
    twitters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            // cardType: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            twitterName: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired
        })
    )
};

Twitters.defaultProps={
    pageContext: 'twitters'
};

const mapDispatchToProps=dispatch=>(
    {
        fetchTwitters:()=>dispatch(fetchItems('twitters'))
    }
)
 
export default connect(mapStateToProps,mapDispatchToProps)(withContext(Twitters));


