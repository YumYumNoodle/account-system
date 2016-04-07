LogIn = React.createClass({ 
	handleSubmit(event) {
		event.preventDefault();

		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim()
		Meteor.loginWithPassword(email, password);
        

		FlowRouter.go('/');
      	return false;
	},




	render() {
		return(
			<div>
	   		<h2>Sign Up</h2>
		    	<form className="register" onSubmit={this.handleSubmit}>
			        <p>Email: <input type="email" name="email" ref="email"/></p>
			        <p>Password: <input type="password" name="password" ref="password"/></p>
			        <p><input type="submit" value="Log In"/></p>
		    	</form>
	    	</div>
		)
	}
})