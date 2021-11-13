const buildObjectValidation = (errors) => {
    const result = {};
    for (key in errors) {
        result[key] = errors[key].msg;
    }
    return result;
}

module.exports = { buildObjectValidation };