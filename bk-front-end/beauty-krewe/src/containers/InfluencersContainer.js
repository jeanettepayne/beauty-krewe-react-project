import React from 'react';
import InfluencerIndex from '../components/InfluencerIndex';
import { connect } from 'react-redux';
import fetchInfluencers from '../actions/fetchInfluencers';
import { Route, Switch } from 'react-router-dom';
import AddInfluencerRec from '../components/AddInfluencerRec';
import Influencer from '../components/Influencer';

class InfluencersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchInfluencers()    
    }

    render() {
        return(
            <div>
              <Switch>
                {/* <InfluencerIndex influencers={this.props.influencers} /> */}
                <Route exact path='/influencers' render={(routerProps) => <InfluencerIndex {...routerProps} influencers={this.props.influencers} />} />
                {/* <Route path='/influencers/new' render={(routerProps) => <ProductForm {...routerProps} brands={this.props.brands} products={this.props.products} />}/> */}
                <Route path='/influencers/:id' render={(routerProps) => <Influencer {...routerProps} influencers={this.props.influencers} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        influencers: state.influencerReducer.influencers
    }
}

export default connect(mapStateToProps, {fetchInfluencers})(InfluencersContainer);