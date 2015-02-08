var React = require('React');
var Message = require('./Message');
var NewMessage = require('./NewMessage/NewMessage');
// var Router = require('react-router');
// var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  getInitialState: function(){
    return {
      messages: []
    }
  },
  handleNewMessage: function(newMessage){
    var newMessages = this.state.messages.concat([{
      text: newMessage,
      date: new Date()
    }]);
    console.log(newMessages);
    this.setState({
      messages: newMessages
    })
  },
  render: function(){
    var messages = this.state.messages.map(function(message, index){
      return (
        <Message key={index} text={message.text} date={message.date} />
      )
    });
    var styles = {
      header: {
        display: 'flex',
        justifyContent: 'space-around'
      }
    };
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 style={styles.header}> Messages </h1>
          <NewMessage onNewMessage={this.handleNewMessage} />
          {messages}
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
  )

// module.exports = App;