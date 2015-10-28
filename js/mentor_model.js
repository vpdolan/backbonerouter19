import Backbone from 'backbone';

let MentorModel = Backbone.Model.extend({
 urlRoot: "https://api.parse.com/1/classes/backbonerouter19",
 
 idAttribute: 'objectId'
  });

export default MentorModel;