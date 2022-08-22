import send from '@rayo/send'
import bodyParser from 'body-parser'
import compress from '@rayo/compress'

export default (app) =>
  app
    .through(
      send(),
      compress(),
      bodyParser.urlencoded({ extended: false, limit: '5mb' }),
      bodyParser.json({ limit: '5mb' })
    )
