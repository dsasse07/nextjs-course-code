/*   
Path: '/meetups/{id}'
*/

import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'

const MeetupShowPage = (props) => {
  const { meetup } = props
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name='description' content={meetup.description} />
      </Head>
      <MeetupDetail meetup={meetup} />
    </>
  )
}

export const getStaticPaths = async () => {
  /**
   * Has the job of specifying all of the dynamic values that Next
   * should pre-generate pages for. getStaticProps will run for each
   * these.
   *
   * Instead of hard-coding ids, we would normally fetch the list of
   * supported ids.
   *
   * If fallback === false, paths includes ALL supported values.
   * If a non-supported value is entered, return 404
   *
   * if fallback === true, patchs do not include all values,
   * so if a value that was not pre-generated is entered, it will
   * be client side rendered (if it exists).
   *
   * This allows you to pre-render common pages, and client side render
   * others
   */

  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  // fetching ALL meetups, but with only their _id fields
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
  const ids = meetups.map((meetup) => {
    return { params: { meetupId: meetup._id.toString() } }
  })
  client.close()

  return {
    fallback: false,
    paths: ids,
  }
}

export const getStaticProps = async (context) => {
  // Since this is a dynamic page, we need a way to access the
  // dynamic value. We do this using context.params

  const params = context.params
  const id = params.meetupId

  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  // fetching ALL meetups, but with only their _id fields
  // Must recovert id string to the MongoDB ObjectId format
  const meetup = await meetupsCollection.findOne({ _id: ObjectId(id) })
  client.close()

  return {
    props: {
      meetup: {
        // Convert id back to string from MongoDB form
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
    revalidate: 10,
  }
}

export default MeetupShowPage
