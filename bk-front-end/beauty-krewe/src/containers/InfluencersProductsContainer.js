import React from 'react';
import InfluencerIndex from '../components/InfluencerIndex';
import { connect } from 'react-redux';
import fetchInfluencersProducts from '../actions/fetchInfluencersProducts';
import { Route, Switch } from 'react-router-dom';
import AddInfluencerRec from '../components/AddInfluencerRec';
import Influencer from '../components/Influencer';

class InfluencersProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchInfluencersProducts()    
    }

    render() {
        return(
            <div>
              <Switch>
        
                <Route path='/influencersproducts/new' render={(routerProps) => <AddInfluencerRec {...routerProps} influencersProducts={this.props.influencersProducts} influencers={this.props.influencers} products={this.props.products} />}/>
                
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        influencers: state.influencerReducer.influencers,
        products: state.productReducer.products,
        influencersProducts: state.influencersProductReducer.influencersProducts
    }
}

export default connect(mapStateToProps, {fetchInfluencersProducts})(InfluencersProductsContainer);