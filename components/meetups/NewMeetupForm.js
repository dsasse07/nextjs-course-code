import { useState } from 'react'

import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {
  const { onAddMeetup } = props
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    address: '',
    description: '',
  })

  const formChangeHandler = ({ id, value }) => {
    setFormData({ ...formData, [id]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    onAddMeetup(formData)
    setFormData({
      title: '',
      image: '',
      address: '',
      description: '',
    })
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input
            type='text'
            required
            id='title'
            value={formData.title}
            onChange={(e) => formChangeHandler(e.target)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input
            type='url'
            required
            id='image'
            value={formData.image}
            onChange={(e) => formChangeHandler(e.target)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            required
            id='address'
            value={formData.address}
            onChange={(e) => formChangeHandler(e.target)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            value={formData.description}
            onChange={(e) => formChangeHandler(e.target)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
