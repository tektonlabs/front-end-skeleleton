import jquery from 'jquery';

export default (function(testLib){

	testLib(jquery, window, document);

}(function($, w, d){

	$(function() {

		console.log('example library');

	});

}));