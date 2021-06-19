const withAuth = (req, res, next) => {
    //check for existence of a session 
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;