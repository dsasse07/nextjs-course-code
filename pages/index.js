/*   
Path: '/'

Here we can import regular react components from a non 'pages' folder
to be included when this page server side renders
*/
import MeetupList from '../components/meetups/MeetupList'
import { useEffect, useState } from 'react'

const DUMMY_MEETUP = [
  {
    id: '1',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flonelyplanetimages.imgix.net%2Fmastheads%2Fstock-photo-roman-sunset-77415821.jpg%3Fsharp%3D10%26vib%3D20%26w%3D1200&f=1&nofb=1',
    title: 'Meetup 1',
    address: 'Nowhere Court',
    description: 'First Meetup!',
  },
  {
    id: '2',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flonelyplanetimages.imgix.net%2Fmastheads%2Fstock-photo-roman-sunset-77415821.jpg%3Fsharp%3D10%26vib%3D20%26w%3D1200&f=1&nofb=1',
    title: 'Meetup 2',
    address: 'Nowhere Court',
    description: 'Second Meetup!',
  },
  {
    id: '3',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flonelyplanetimages.imgix.net%2Fmastheads%2Fstock-photo-roman-sunset-77415821.jpg%3Fsharp%3D10%26vib%3D20%26w%3D1200&f=1&nofb=1',
    title: 'Meetup 3',
    address: 'Nowhere Court',
    description: 'Third Meetup!',
  },
]

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

  return <MeetupList meetups={meetups} />
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
  // Read data from file or fetch from db
  // ALWAYS need to return an object with props
  return {
    // This is the props that will be passed to this component when build runs
    props: {
      meetups: DUMMY_MEETUP,
    },
  }
}

export default HomePage
