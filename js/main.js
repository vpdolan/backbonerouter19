import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';
import './ajax_setup';
import MentorsCollection from './mentors_collection';
window.MentorsCollection = MentorsCollection;

var appElement = $('.app');
//pass appElement as an argument to router
var router = new Router(appElement);
  router.start();

console.log('Hello, World');
