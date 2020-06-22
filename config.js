const DBNAME = `todo-list`;
require('dotenv').config();
module.exports = {
    PORT: 3129,
    DBNAME,
    APPNAME: `My To-Do List`,
    MONGODB_URI: `mongodb+srv://${process.env.dbUSERNAME}:${process.env.dbPASSWORD}@cluster0-uno17.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
};

