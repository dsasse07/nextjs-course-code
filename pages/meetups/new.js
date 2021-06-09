/*   
Path: '/meetups/new'
*/
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const handleAddMeetup = (formData) => {
    console.log(formData)
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />
}

export default NewMeetupPage
