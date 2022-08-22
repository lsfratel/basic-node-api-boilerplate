import * as service from '../services/home.service'

export const index = (req, res, raise) => {
  try {
    const data = service.doService(req.body)
    const body = { success: true, statusCode: 200, data }
    res.send(body, body.statusCode)
  } catch (error) {
    raise(error)
  }
}
