var React = require('React');

var Input = React.createClass({
	getInitialState: function(){
		return {};
	},
	handleChange: function(e){
		this.setState({
			text: e.target.value
		})
	},
	handleSubmit: function(){
		this.props.onNewMessage.call(null, this.state.text);
		this.setState({
			text: ''
		})
	},
	render: function(){
		return(
			<div>
				<input type='text' placeholder='New Message' value={this.state.text} onChange={this.handleChange} />
				<button onClick={this.handleSubmit} >Send</button>
			</div>
		)
	}
})

module.exports = Input;