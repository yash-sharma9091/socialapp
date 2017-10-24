/* global _ */
import React, {Component} from 'react';
import {Http} from '../lib/Http';
import PropTypes from 'prop-types';
import {Loader} from './common/Loader';
import Card from './CardInfo';
import NewCard from './NewCard';

class SavedCard extends Component {
	constructor(props) {
      	super(props);
      	this.state = {
      		processing: false,
      		cards: {},
      		refresh: false
      	};
    }
   	componentDidMount() {
   		this.list_cards();
   	}
   	list_cards() {
   		const {_id} = this.props.user;
   		this.setState({processing: true, refresh: false});
   		Http.get(`list_cards/${_id}`)
		.then(({data}) => this.setState({cards: data, processing: false, refresh: false}))
		.catch(error => console.log(error));
   	}
   	componentDidUpdate(prevProps, prevState) {
		
		if( this.state.refresh ) {
			this.list_cards()
		}
	}
	render() {
		const { cards, processing } = this.state;
		return (
			<div className="right_dash pull-right">
			    <div className="set_hd_inner">Saved Card</div>
			    <div className="form_dash supporfom">
					{ !_.isEmpty(cards) ? <Card cards={cards}/>  : ((processing) ? <Loader/>  : <NewCard reload={() => this.reload()} user={this.props.user}/>) }
				</div>  
			</div>	
		);	
	}	
	reload() {
		this.setState({refresh: true});
	}
}

SavedCard.propTypes = {
	user: PropTypes.object.isRequired 
};
export default SavedCard;