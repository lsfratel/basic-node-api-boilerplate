import rayo from 'rayo'

const { NODE_ENV, PORT, STORM_MONITOR_PORT } = process.env

export default () => {
  const options = {
    host: '0.0.0.0',
    port: PORT || 3000,
    storm: NODE_ENV === 'production' ? { monitorPort: STORM_MONITOR_PORT || 3001 } : null,
    onError: (error, req, res) => {
      const body = {
        success: false,
        statusCode: error.statusCode || error.code || 500,
        error: error.message
      }
      res.send(body, body.statusCode)
    },
    notFound: (req, res) => {
      const body = {
        success: false,
        statusCode: 404,
        body: `Path not found: '${req.url}'`
      }
      res.send(body, body.statusCode)
    }
  }

  return rayo(options)
}
