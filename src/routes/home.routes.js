import { index } from '../controllers/home.controller'

export default (app) => {
  const prefix = '/home'

  app
    .bridge(prefix + '')
    .post(index)
}
