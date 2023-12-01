import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
         <Navbar expand="lg" className="bg-dark w-100" >
            <Container fluid>
        <Navbar.Brand href="#">
        <img src="https://fmovies.chat/fmovies-logo.png" alt="" style={{height:'50px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-light' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-light' href="#action2">Movies</Nav.Link>
            <Nav.Link className='text-light' href="#action2">TV Series</Nav.Link>
            <Nav.Link className='text-light' href="#action2">Anime</Nav.Link>


            <NavDropdown className='text-light'  title={<span className='text-light'>Genres<i class="fa-solid fa-angle-down"></i> </span>} id="">
              <div className='row bg-dark w-30 '>
           <div className='col-lg-6  bg-dark w-30'>
                  <NavDropdown.Item className='bg-dark text-light' href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action4">Animation</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">crime</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Drama</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Fantasy</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Horrer</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Mystery</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Science </NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Thriller</NavDropdown.Item>
                  </div>
                  <div className='col-lg-4  bg-dark w-30'>
                  <NavDropdown.Item className='bg-dark text-light' href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action4">Animation</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">crime</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Drama</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Fantasy</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Horrer</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Mystery</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Science Fiction</NavDropdown.Item>
                  <NavDropdown.Item className='bg-dark text-light' href="#action5">Thriller</NavDropdown.Item>

                  </div>

           </div>
              



            </NavDropdown>
            
          </Nav>
          <Form className="d-flex align-items-center me-5 ">
            <Form.Control
              type="search"
              placeholder="Search...."
              className="me-2 rounded-pill"
              aria-label="Search...."
            />         <i style={{marginLeft:'-20%'}} class="fa-solid fa-magnifying-glass fa-sm text-dark  rounded-circle p-4 "></i>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header