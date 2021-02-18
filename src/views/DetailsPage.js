import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from '../theme/DetailsTemplate';
import {routers} from '../router/index';

class DetailsPage extends Component {
    state = { 
        pageType: 'notes'
     }

     componentDidMount(){
         switch(this.props.match.path){
             case routers.twitter:
                 this.setState({pageType:'twitters'})
                 break;
             case routers.article:
                this.setState({pageType:'articles'})
                 break;
             case routers.note:
                this.setState({pageType:'notes'})
                 break;
             default: 
                console.log('Something went wrong with matching paths');
         }
     }
 
    render() { 
        const dummyArticle = {
            id: 1,
            title: 'Wake me up when Vue ends',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            twitterName: 'hello_roman',
            articleUrl: 'https://youtube.com/',
            created: '1 day',
          }; 

        return ( 
            <>
                <DetailsTemplate
                    pageType={this.state.pageType}
                    title={dummyArticle.title}
                    created={dummyArticle.created}
                    content={dummyArticle.content}
                    articleUrl={dummyArticle.articleUrl}
                    twitterName={dummyArticle.twitterName}
            />
            </>
            
         );
    }
}

DetailsPage.propTypes = {
    match: PropTypes.object.isRequired,
  };
 
export default DetailsPage;