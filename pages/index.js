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
    description: 'First Meetup!',
  },
  {
    id: '3',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flonelyplanetimages.imgix.net%2Fmastheads%2Fstock-photo-roman-sunset-77415821.jpg%3Fsharp%3D10%26vib%3D20%26w%3D1200&f=1&nofb=1',
    title: 'Meetup 3',
    address: 'Nowhere Court',
    description: 'First Meetup!',
  },
]

const HomePage = () => {
  const [meetupsData, setMeetupsData] = useState([])
  useEffect(() => {
    // Fetch Data
    setMeetupsData(DUMMY_MEETUP)
  }, [])

  return <MeetupList meetups={meetupsData} />
}

export default HomePage
