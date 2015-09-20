// config/database.js
var db = {};
        db.Server   = process.env.OPENSHIFT_MONGODB_DB_HOST || '127.0.0.1';
        db.Port     = process.env.OPENSHIFT_MONGODB_DB_PORT || 27017;
        db.db       = process.env.OPENSHIFT_APP_NAME || 'octologin';
        db.User     = process.env.OPENSHIFT_MONGODB_DB_USERNAME || 'root';
        db.Pass     = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || '';

module.exports = {

    'url' : 'mongodb://'+db.User+':'+db.Pass+'@'+db.Server+':'+db.Port+'/'+db.db
};
