/**
 * These are API endpoints our client can connect do
 * The same routing structure applies as normal pages, but
 * starts with /api
 *
 * THis route would be:
 * domain.com/api/new-meetup
 *
 * We also ensure that this only accepts POST
 *
 * CODE IN HERE NEVER RUNS ON CLIENT SIDE.
 */

import { MongoClient } from 'mongodb'

const handler = async (request, response) => {
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

    // Connects to, or creates, specified database
    const client = await MongoClient.connect(
      'mongodb+srv://danny:normandy17@cluster0.easw8.mongodb.net/meetupsTestDatabase?retryWrites=true&w=majority'
    )
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.insertOne(newMeetup)
    client.close()
    response.status(201).json(result)
  }
}

export default handler
