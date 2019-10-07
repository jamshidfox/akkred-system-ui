const project = require('../config/project')
const logger = require('./logger')

logger.info('Starting server...')
require('./server').listen(project.port, () => {
  logger.success(`Server is running at http://localhost:${project.port}`)
})
