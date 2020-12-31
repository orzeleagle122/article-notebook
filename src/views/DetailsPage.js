import React, {Component} from 'react';
import DetailsTemplate from '../theme/DetailsTemplate';
import {routers} from '../router/index'

class DetailsPage extends Component {
    state = { 
        pageType: 'notes'
     }

     componentDidMount(){
         switch(this.props.match.path){
             case routers.twitters:
                 this.setState({pageType:'twitters'})
                 break;
             case routers.articles:
                this.setState({pageType:'articles'})
                 break;
             case routers.notes:
                this.setState({pageType:'notes'})
                 break;
             default:
                 this.setState({pagetype: 'blad'})
         }
     }

    render() { 
        return ( 
            <>
                <DetailsTemplate>
                    <p> {this.state.pageType}</p>
                </DetailsTemplate>
            </>
            
         );
    }
}
 
export default DetailsPage;