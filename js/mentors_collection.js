import Backbone from 'backbone';
//import MentorModel from './mentor_model';

let MentorsCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/backbonerouter19',

  //model: MentorModel,


  parse: function(data) {
    return data.results;
  }


});
export default MentorsCollection;