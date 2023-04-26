const logger = (req, res, next) => {
    const { method, url } = req;
    console.log(`Called ${method} on ${url}`);
    next();
};

module.exports = logger;