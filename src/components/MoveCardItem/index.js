import './index.css'
import {BsArrowRight} from 'react-icons/bs'
import {AiFillHome, AiFillWarning} from 'react-icons/ai'
import {FaBoxes} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {RiTaskFill} from 'react-icons/ri'

const MoveCardItem = props => {
  const {movedata} = props
  const {
    fromAdd,
    toAdd,
    date,
    distance,
    estimateId,
    propertySize,
    totalItems,
  } = movedata
  const fromAddress = `${fromAdd.fromLocality} , ${fromAdd.fromCity},${fromAdd.fromState}`
  const toAddress = `${toAdd.toLocality} , ${toAdd.toCity},${toAdd.toState}`

  console.log(movedata)
  return (
    <div className="move-card-bg">
      <div className="top-sec">
        <div>
          <h1 className="from">From</h1>
          <p className="address">{fromAddress}</p>
        </div>
        <div className="right-card">
          <BsArrowRight className="right" />
        </div>
        <div>
          <h1 className="from">To</h1>
          <p className="address">{toAddress}</p>
        </div>
        <div>
          <h1 className="from p">Request#</h1>
          <h2 className="request p">{estimateId}</h2>
        </div>
      </div>
      <div className="top-sec">
        <p className="card-tiles">
          <AiFillHome className="card-icon" />
          {propertySize}
        </p>

        <p className="card-tiles">
          <FaBoxes className="card-icon" />
          {totalItems}
        </p>

        <p className="card-tiles">
          <ImLocation2 className="card-icon" />
          {distance}
        </p>

        <p className="card-tiles">
          <RiTaskFill className="card-icon" />
          is flexible
        </p>
        <div>
          <button className="btn" type="button">
            View more details
          </button>
        </div>
        <div>
          <button className="btn1" type="button">
            View more details
          </button>
        </div>
      </div>
      <p className="war">
        <AiFillWarning className="card-icon" />{' '}
        <strong className="s">Disclaimer: </strong> please update your move date
        before two days of shpping
      </p>
      <hr className="line" />
    </div>
  )
}

export default MoveCardItem
