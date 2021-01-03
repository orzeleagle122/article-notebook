import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from '../templates/GridViewTemplate';
import Card from '../components/molecules/Card/Card';
import { connect } from 'react-redux';


const Articles = ({articles}) => (
         <GridViewTemplate pageType="articles">
             {articles.map((item)=><Card cardType="articles" key={item.id} title={item.title} content={item.content} articleUrl={item.articleUrl} created={item.created} id={item.id}/>)}
         </GridViewTemplate>        
     );

const mapStateToProps=({articles})=>({articles});

Articles.propTypes={
    pageType: PropTypes.oneOf(['notes','twitters','articles'])
};

Articles.defaultProps={
    pageType: 'articles'
};
 
export default connect(mapStateToProps)(Articles);