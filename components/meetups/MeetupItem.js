import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import { useRouter } from 'next/router'

const MeetupItem = (props) => {
  const { id, title, image, address } = props
  const router = useRouter()

  const handleShowDetails = () => {
    router.push(`/${id}`)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleShowDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
