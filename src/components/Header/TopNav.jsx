import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const TopNav = () => {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // dropdown states
  const [ currLang,setCurrLang ] = useState("EN");

  const handleClickingFrance = () => {
    setCurrLang("FC")
  }

  const handleClickingSpain = () => {
    setCurrLang("SP")
  }

  const handleClickingYrLang = () => {
    setCurrLang("YR")
  }

  const handleClickingEN = () => {
    setCurrLang("EN")
  }

  const navStyles = {
    background: "none",
  }
  return (
    <>
       <nav className="flex justify-between px-5 py-3 ">
         <h1 className="text-4xl font-bold">Jad<span className="text-orange-500">oo</span></h1>


          <Button variant="primary" onClick={handleShow} style={navStyles} className={`border-none text-black text-3xl sm:block lg:hidden`}>
           <FontAwesomeIcon icon={faBars} />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
             <Offcanvas.Header closeButton>
             <Offcanvas.Title>Check Out Our <span className="text-orange-500">Links</span></Offcanvas.Title>
             </Offcanvas.Header>
            <Offcanvas.Body className="mt-5 flex justify-center items-center">

              <div className="min-w-[70vw]">
                <ul className="flex flex-col gap-20 items-center">
                  <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Destinations</li>
                  <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Hotels</li>
                  <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Flights</li>
                  <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Bookings</li>
                  <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Login</li>
                  <button className="bg-none border-2 border-black px-5 py-2 hover:bg-black hover:text-white transition-all">
                    Sign up
                  </button>

                  <div className="flex items-center">
                    <h2>{currLang}</h2>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={navStyles} className="border-none text-black">
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={handleClickingEN}>EN</Dropdown.Item>
                          <Dropdown.Item onClick={handleClickingFrance}>FR</Dropdown.Item>
                          <Dropdown.Item onClick={handleClickingSpain}>SP</Dropdown.Item>
                          <Dropdown.Item onClick={handleClickingYrLang}>YR</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                   </div>
                  </div>
                </ul>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          <div className="min-w-[70vw] max-sm:hidden sm:hidden lg:block">
            <ul className="flex gap-20 px-5 items-center w-[100%]">
                <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Destinations</li>
                <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Hotels</li>
                <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Flights</li>
                <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Bookings</li>
                <li className="hover:cursor-pointer hover:text-orange-500 transition-all">Login</li>
                <button className="bg-none border-2 border-black px-5 py-2 hover:bg-black hover:text-white transition-all">
                    Sign up
                </button>

                  <div className="flex items-center">
                    <h2>{currLang}</h2>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic"  style={navStyles} className="border-none text-black">
                          
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={handleClickingEN} className="active:bg-orange-500">EN</Dropdown.Item>
                          <Dropdown.Item onClick={handleClickingFrance} className="active:bg-orange-500">FC</Dropdown.Item>
                          <Dropdown.Item onClick={handleClickingSpain} className="active:bg-orange-500">SP</Dropdown.Item>
                          <Dropdown.Item onClick={handleClickingYrLang} className="active:bg-orange-500">YR</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                   </div>
                </div>
            </ul>
          </div>
       </nav>
    </>
  )
}

export default TopNav