import bootstrap from './loaders'

const app = bootstrap()

app.start(({ address, port }) => {
  console.log('Server is now listening on:', `http://${address}:${port}`)
})
