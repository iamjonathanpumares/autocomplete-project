/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		size: 100
  	},
  	phoneNumber: {
  		type: 'string',
  		size: 10
  	},
  	address: {
  		type: 'string'
  	},
  	email: {
  		type: 'email'
  	}
  }
};

