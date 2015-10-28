import Backbone from 'backbone';
import $ from 'jquery';
import MentorsCollection from './mentors_collection';
//import MentorsCollection from './MentorsCollection';
import mentorTemplate from './views/mentor';
import mentorsTemplate from './views/mentors';



let Router = Backbone.Router.extend({

  routes: {
    "" : "showMentors",
    "mentors" : "showMentor",
    "mentors/:id" : "showMentor"

  },

  initialize: function(appElement) {
    this.$el = appElement;
    //$.el  this is a jquery element. el refers to appElement

    this.mentors = new MentorsCollection();

    let router = this;

    this.$el.addEventListener('click', '.mentor-list-item', function(event) {
      let $li = $(event.currentTarget);
      var mentorId = $li.data('mentor-id');

      router.navigate(`mentor/${mentor-id}`);
      //router will set the hash number in url now
      router.showSpecificMentor(mentorId); 


      console.log('show mentorId', mentorId);

  });
},

  showSpecificMentor: function(mentorId) {
  let mentor = this.mentors.get(mentorId);

  if (mentor) {
  this.$el.html( mentorTemplate(mentor.toJSON()) );
  } else {
    mentor = this.mentors.add({objectId: mentorId});
    this.showSpinner();
    mentor.fetch().then(function() {
      let router = this;
      router.$el.html( mentorTemplate(mentor.toJSON()) );

    });
 }   

},

  showMentors: function(mentorId) {
      this.mentors.fetch().then(function() {
        this.$el.html(mentorsTemplate(this.mentors.toJSON()));
   }.bind(this));
  },

//make request for data to json.
//    ...router.todos.toJSON...

  start: function() {
    Backbone.history.start();
  }

});
export default Router;



// import Backbone from 'backbone';
// import ContactsCollection from './ContactsCollection';
// import homeTemplate from './views/home';
// import contactsTemplate from './views/contacts';
// let Router = Backbone.Router.extend({
//   routes: {
//     ""             : "showContacts",
//     "contacts"     : "showContacts",
//     "contacts/:id" : "showContact",
//   }, 
//   initialize: function(appElement){
//     this.$el = appElement;
//     this.contacts = new ContactsCollection();
//   },
//   home: function(){
//     console.log('show home page');
//     this.$el.html(homeTemplate());
//   },
//   showContacts: function(){
//     console.log('show contacts page');
//    this.contacts.fetch().then(function(){
//         this.$el.html(contactsTemplate(this.contacts.toJSON()));
//    }.bind(this));
//   },
//   showAbout: function(){
//     console.log('show about page');
//     this.$el.html('I already said it was coming soon');
//   },
//   start: function(){
//     Backbone.history.start();
//   }
// });
// export default Router;
  