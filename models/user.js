module.exports = function(sequelize, Sequalize) {
    var UserSchema = sequelize.define("User", {
        name: Sequalize.STRING,
        email: Sequalize.STRING
    },{
        timestamps: false
    });
    return UserSchema;
}
