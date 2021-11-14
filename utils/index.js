const buildObjectValidation = (errors) => {
    const result = {};
    for (key in errors) {
        result[key] = errors[key].msg;
    }
    return result;
}

const renderWithUserData = (req = {}, res = {}, view = '', data = {}) => {
    data.user = req.user;
    data.isAuthenticated = req.isAuthenticated();
    return res.render(view, data);
}

module.exports = { buildObjectValidation, renderWithUserData };