import appLoader from './app.loader'
import routesLoader from './routes.loader'
import middlewaresLoader from './middlewares.loader'

export default () => {
  const app = appLoader()

  middlewaresLoader(app)

  routesLoader(app)

  return app
}
