const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment');
const Games = require('./Games');
const Like = require('./Like')
const Stat = require('./Stat');

// associations

User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasMany(Games, {
    foreignKey: 'user_id'
});
Games.belongsTo(User, {
    foreignKey: 'user_id'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
Like.belongsTo(User, {
    foreignKey: 'user_id'
});
Like.belongsTo(Post, {
    foreignKey: 'post_id'
});
/*User.hasMany(Like, {
    foreignKey: 'user_id'
});
Post.hasMany(Like, {
    foreignKey: 'post_id'
});*/
User.belongsToMany(Post, {
    through: Like,
    as: 'likes',
    foreignKey: 'user_id'
});
Post.belongsToMany(User, {
    through: Like,
    as: 'likes',
    foreignKey: 'post_id'
});
Games.hasMany(Stat, {
    foreignKey: 'game_id'
})
Stat.hasMany(Games, {
    foreignKey: 'Stat_id'
})



module.exports = { User, Comment, Post, Games, Like };
