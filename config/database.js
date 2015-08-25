// config/database.js
var db = {};
        db.Server   = process.env.OPENSHIFT_MONGODB_DB_HOST
        db.Port     = process.env.OPENSHIFT_MONGODB_DB_PORT;
        db.db       = process.env.OPENSHIFT_APP_NAME;
        db.User     = process.env.OPENSHIFT_MONGODB_DB_USERNAME;
        db.Pass     = process.env.OPENSHIFT_MONGODB_DB_PASSWORD;

module.exports = {

    'url' : 'mongodb://'+db.User+':'+db.Pass+'@'+db.Server+':'+db.Port+'/'+db.db 
};
