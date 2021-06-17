import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire, FaHotel, FaSlack } from 'react-icons/fa';
import { BsCamera, BsXDiamondFill } from 'react-icons/bs';
import { GiCook, GiCrystalize, GiMusicalNotes, GiNecklaceDisplay } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Offers</h1>
          <div className='pricing__container'>
            <Link to='/register' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCook/>
                </div>
                <h3>Hotel and Catering</h3>
               
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Discover
                </Button>
              </div>
            </Link>
            <Link to='/register' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Saloon</h3>
                
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Discover
                </Button>
              </div>
            </Link>
            <Link to='/register' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsCamera />
                </div>
                <h3>Phtography</h3>
               
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Discover
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiNecklaceDisplay/>
                </div>
                <h3>Jwellary</h3>
                
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Discover
                </Button>
              </div>
            </Link>
            <Link to='/register' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaSlack />
                </div>
                <h3>Decoration</h3>
               
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Discover
                </Button>
              </div>
            </Link>
            <Link to='/register' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiMusicalNotes />
                </div>
                <h3>Entertainment</h3>
                
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Discover
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
