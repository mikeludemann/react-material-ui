
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as MUI from '@material-ui/core';

export default class Button extends Component {

	componentDidMount() {}

	render() {
		return (
			<div className="material">
				<MUI.Button variant={this.props.variant} color={this.props.color}>
					{this.props.children}
				</MUI.Button>
			</div>
		);
	}
}

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired
}
