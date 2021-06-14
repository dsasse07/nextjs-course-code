/**
 * These are API endpoints our client can connect do
 * The same routing structure applies as normal pages, but
 * starts with /api
 *
 * THis route would be:
 * domain.com/api/new-meetup
 *
 * We also ensure that this only accepts POST requests
 */

const handler = (request, response) => {
  /**
   * req.method can be used to determine the HTTP verb
   */

  if (request.method === 'POST') {
    const data = request.body
    const { title, image, address, description } = data

    const newMeetup = {
      title,
      image,
      address,
      description,
    }
  }
}

export default handler
