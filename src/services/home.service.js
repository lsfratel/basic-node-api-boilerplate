import error from 'http-errors'

export const doService = (body) => {
  if (!body.n1 || !body.n2) throw new error.UnprocessableEntity()
  return body
}
