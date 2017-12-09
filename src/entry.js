import getBabelMessage from './es2015/entry';

var jquery = require('jquery');
require('bootstrap/dist/css/bootstrap.css');

jquery(document).ready(function() { jquery('#es2015header').html(getBabelMessage()); });