import moment from 'moment';
type Props = {
    timestamp: number;
}

const DateFormatter = ({timestamp}: Props) => {
  return (
    <>
        {
            moment.unix(timestamp).fromNow()
        }
    </>
  )
}

export default DateFormatter