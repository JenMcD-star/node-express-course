const consoleLog = (req, res, next) => {
    console.log('you did it')
    next()
} 

module.exports = { consoleLog }


