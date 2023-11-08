import {Component} from 'react'

import {FaTruckMoving} from 'react-icons/fa'
import {BsPersonFill, BsBlockquoteRight} from 'react-icons/bs'

import {RiLogoutCircleLine} from 'react-icons/ri'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="bg-container">
        <ul className="list_con">
          <li>
            <button className="nav-btn active" type="button">
              <FaTruckMoving className="nav-icon" />
              MY MOVES
            </button>
          </li>
          <li>
            <button className="nav-btn" type="button">
              <BsPersonFill className="nav-icon" />
              MY PROFILE
            </button>
          </li>
          <li>
            <button className="nav-btn" type="button">
              <BsBlockquoteRight className="nav-icon" />
              GET QUOTES
            </button>
          </li>
          <li>
            <button className="nav-btn" type="button">
              <RiLogoutCircleLine className="nav-icon" />
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
