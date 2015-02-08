var React = require('React');
var Input = require('./Input');

var NewMessage = React.createClass({
	render: function(){
		return (
			<Input onNewMessage={this.props.onNewMessage} />
		)
	}
});

module.exports = NewMessage;