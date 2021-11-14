const buildObjectValidation = (errors) => {
    const result = {};
    for (key in errors) {
        result[key] = errors[key].msg;
    }
    return result;
}

const renderWithUserDataAndFlash = (req = {}, res = {}, view = '', data = {}) => {
    data.user = req.user;
    data.isAuthenticated = req.isAuthenticated();
    data.errorMessage = req.flash('error');
    data.successMessage = req.flash('success');
    return res.render(view, data);
}

module.exports = { buildObjectValidation, renderWithUserDataAndFlash };