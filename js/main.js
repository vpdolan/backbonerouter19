import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';
import './ajax_setup';
import MentorsCollection from './mentors_collection';
//window.MentorsCollection = MentorsCollection;

var appElement = $('.app');
//pass appElement as an argument to router
var router = new Router(appElement);
//this is where html elements pass Router(appElement, x, y, z,..)
  router.start();

  window.router = router;

console.log('Hello, World');
