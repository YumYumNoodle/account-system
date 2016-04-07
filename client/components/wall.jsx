Wall = React.createClass({  
  	mixins: [ReactMeteorData],

	getInitialState() {
		return {}
	},

	getMeteorData() {
		return {
			currentUser: Meteor.user()
		};
	},

  student() {
	if(!this.data.currentUser) {
	   	  	return <Welcome />
    } else {
    	
		if(this.data.currentUser.profile.student || this.data.currentUser.profile.lecturer){
			if(this.data.currentUser.profile.lecturer && this.data.currentUser.profile.student) {
    			return (<p>You are a lecturer and a student</p>)
    		}
    		if(this.data.currentUser.profile.student) {
    			return (<p>You are a student</p>)
    		}
    		if(this.data.currentUser.profile.lecturer) {
    			return (<p>You are a lecturer</p>)
    		}
    	} else {
    		return (<p> You are neither a student nor a proffesor</p>)
    	}
    }
  },

  render() {
    return (
      <div className="wall">
        <h1>Welcome to the Wall!</h1>
    	{this.student()}
      </div>  
    )
  }
});