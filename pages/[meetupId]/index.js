/*   
Path: '/meetups/{id}'
*/

import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupShowPage = (props) => {
  const meetup = {
    id: '3',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flonelyplanetimages.imgix.net%2Fmastheads%2Fstock-photo-roman-sunset-77415821.jpg%3Fsharp%3D10%26vib%3D20%26w%3D1200&f=1&nofb=1',
    title: 'Meetup 1',
    address: 'Nowhere Court',
    description: 'First Meetup!',
  }
  return <MeetupDetail meetup={meetup} />
}

export default MeetupShowPage
