import React from 'react';
import InfluencerIndex from '../components/InfluencerIndex';
import { connect } from 'react-redux';
import fetchInfluencers from '../actions/fetchInfluencers';
import { Route } from 'react-router-dom';
import Influencer from '../components/Influencer';

class InfluencersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchInfluencers()    
    }

    render() {
        return(
            <div>
                {/* <InfluencerIndex influencers={this.props.influencers} /> */}
                <Route exact path='/influencers' render={(routerProps) => <InfluencerIndex {...routerProps} influencers={this.props.influencers} />} />
                <Route path='/influencers/:id' render={(routerProps) => <Influencer {...routerProps} influencers={this.props.influencers} />} />
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