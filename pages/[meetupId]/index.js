/*   
Path: '/meetups/{id}'
*/

import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupShowPage = (props) => {
  const { meetup } = props
  return <MeetupDetail meetup={meetup} />
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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: '1',
        },
      },
      {
        params: {
          meetupId: '2',
        },
      },
    ],
  }
}

export const getStaticProps = async (context) => {
  // Since this is a dynamic page, we need a way to access the
  // dynamic value. We do this using context.params

  const params = context.params
  const id = params.meetupId
  return {
    props: {
      meetup: {
        id: '3',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flonelyplanetimages.imgix.net%2Fmastheads%2Fstock-photo-roman-sunset-77415821.jpg%3Fsharp%3D10%26vib%3D20%26w%3D1200&f=1&nofb=1',
        title: 'Meetup 1',
        address: 'Nowhere Court',
        description: 'First Meetup!',
      },
    },
    revalidate: 10,
  }
}

export default MeetupShowPage
