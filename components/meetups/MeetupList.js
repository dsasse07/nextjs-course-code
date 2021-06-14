import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

const MeetupList = (props) => {
  const { meetups } = props

  const meetupComponents = meetups.map((meetup) => {
    const { id, image, title, address, description } = meetup
    return (
      <MeetupItem
        key={id}
        id={id}
        image={image}
        title={title}
        address={address}
        description={description}
      />
    )
  })
  return <ul className={classes.list}>{meetupComponents}</ul>
}

export default MeetupList
