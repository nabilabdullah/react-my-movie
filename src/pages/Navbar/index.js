import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarPages({ category, categoryMovie, categoryAction, categoryComedy, categoryFantasy }) {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">MyMovie</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Nav.Link onClick={categoryMovie}>{category == 'movie' ? <b className={"text-success"}>Movie</b> : 'Movie'}</Nav.Link>
            <Nav.Link onClick={categoryAction}>{category == 'action' ? <b className={"text-success"}>Action</b> : 'Action'}</Nav.Link>
            <Nav.Link onClick={categoryComedy}>{category == 'comedy' ? <b className={"text-success"}>Comedy</b> : 'Comedy'}</Nav.Link>
            <Nav.Link onClick={categoryFantasy}>{category == 'fantasy' ? <b className={"text-success"}>Fantasy</b> : 'Fantasy'}</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
