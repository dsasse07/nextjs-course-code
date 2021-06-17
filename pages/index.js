/*   
Path: '/'

Here we can import regular react components from a non 'pages' folder
to be included when this page server side renders
*/
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'

const HomePage = (props) => {
  const { meetups } = props
  /*
  For client side rendering we would need state and effect
  since we use static props, data will already be provided to page
  const [meetupsData, setMeetupsData] = useState([])
  useEffect(() => {
    setMeetupsData(DUMMY_MEETUP)
  }, [])
  */

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a list of highly React Meetups'
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  )
}

/**
 * This will fetch the data at app build time to create a static page
 * If getStaticProps exists, it will first be called by Next.js
 * and THEN the component function will be called
 *
 * Any server side code can be run in here such as
 * accessing file system, connecting to db, etc since this code will
 * never run on the client.
 * */

export const getStaticProps = async () => {
  /**
   * Read data from file or fetch from db
   * ALWAYS need to return an object with props
   * DATA WILL ONLY UPDATE AT RUN TIME unless we revalidate
   * */
  const client = await MongoClient.connect(process.env.MONGO_URI)
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const data = await meetupsCollection.find().toArray()
  const meetups = data.map((meetup) => {
    return {
      id: meetup._id.toString(),
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      description: meetup.description,
    }
  })
  return {
    // This is the props that will be passed to this component when build runs
    props: {
      meetups: meetups,
    },
    /**
     * Unlocks incremental revalidation which means the page will
     * be occassionally re-pre-generated
     * Accepts a # of seconds after which Next.js will automatically
     * update the data IF a request is made after this interval.
     *
     * Best method to use unless you need to deal with Auth, headers, or
     * unless data is changing multiple times per second
     * */
    revalidate: 5,
  }
}

/**
 * If we want this to be updated for EVERY SINGLE REQUEST
 * we use getServerSideProps() instead.
 *
 * This will not run at build time, it will run on the client
 * This code will only run on the server.
 * - We can use this to make API requests using credentials that
 * shouldn't be exposed to the user
 * - We can also use it to fetch data
 *
 * From the context parameter, we get access to the
 * request and response objects
 * */

/*
export const getServerSideProps = (context) => {
  const request = context.req
  const response = contest.res

  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
  }
}
*/
export default HomePage
