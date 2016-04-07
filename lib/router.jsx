FlowRouter.route('/', {  
  action() {
    ReactLayout.render(MainLayout, { content: <Wall /> });
  }
});

FlowRouter.route('/signup', {  
  action() {
    ReactLayout.render(MainLayout, { content: <SignUp /> });
  }
});

FlowRouter.route('/login', {  
  action() {
    ReactLayout.render(MainLayout, { content: <LogIn /> });
  }
});