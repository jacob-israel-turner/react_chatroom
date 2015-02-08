var React =  require('React');

var Message = React.createClass({
	render: function(){
		var styles = {
			flex: {
				display: 'flex',
				'justifyContent': 'space-between'
			}
		};
		return(
			<div style={styles.flex}>
				<span>{this.props.text}</span>
				<span>{this.props.date}</span>
			</div>
		)
	}
});

module.exports = Message;