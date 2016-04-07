Header = React.createClass({  
  	mixins: [ReactMeteorData],

	getInitialState() {
		return {}
	},

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		};
	},
	handleOnClick(event) {
		event.preventDefault();

		Meteor.logout();
	}, 

	logout() {
		if(this.data.currentUser) {
			return (<a href="" onClick={this.handleOnClick}>Log Out</a>)
		}
		return
	},



  	render() {
    	return (
      		<div className="header">
      		<p>eduwhisper</p>
        	{this.logout()}
      		</div>
    )
  }
})