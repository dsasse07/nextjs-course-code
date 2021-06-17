/*   
Path: '/meetups/new'
*/
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NewMeetupPage = () => {
  const router = useRouter()

  const handleAddMeetup = (formData) => {
    // Sent to an internal API path
    const postConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
    fetch('/api/new-meetup', postConfig)
      .then((response) => response.json())
      .then(router.push('/'))
  }

  return (
    <>
      <Head>
        <title>Create a New Meetup</title>
        <meta
          name='description'
          content='Share your exciting new React Meetup'
        />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  )
}

export default NewMeetupPage
