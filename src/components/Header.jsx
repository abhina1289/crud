import React from 'react'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
     <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home">
            
           
            Student Data
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header