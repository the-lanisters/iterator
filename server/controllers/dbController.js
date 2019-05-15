const { query } = require('../models/pmModel');

module.exports = {
    //function to check if email exists
    getOneUserByUsername: function(user) {
        //return user where email is email argument
        return query({
            text: `select username, password from users where username = ($1)`,
            values: [user]
        }).then(data => {
            return new Promise((resolve, reject) => {
                resolve(data.rows[0]);
            })
        })
    },
    //function to create / insert a user into the database
    createUser: function(user) {
        //return user inserted with id
        return query({
            text: 'insert into users (username, password) values ($1, $2)',
            values: [user.user, user.password]
        }).then(data => new Promise((resolve, reject) => resolve(data)));
    }
};