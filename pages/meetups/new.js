/*   
Path: '/meetups/new'
*/
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
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

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />
}

export default NewMeetupPage
