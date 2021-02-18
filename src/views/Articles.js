import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from '../templates/GridViewTemplate';
import Card from '../components/molecules/Card/Card';
import { connect } from 'react-redux';
import withContext from '../hoc/withContext';


const Articles = ({articles}) => (
         <GridViewTemplate>
             {articles.map((item)=><Card cardType="articles" key={item.id} title={item.title} content={item.content} articleUrl={item.articleUrl} created={item.created} id={item.id}/>)}
         </GridViewTemplate>        
     );

const mapStateToProps=({articles})=>({articles});

Articles.propTypes={
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            // cardType: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            articleUrl: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired
        })
    )
};

Articles.defaultProps={
    pageContext: 'articles'
};
 
export default connect(mapStateToProps)(withContext(Articles));