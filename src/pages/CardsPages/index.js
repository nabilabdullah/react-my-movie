import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

export default function CardsPages({ category }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    try {
        fetch(`https://omdbapi.com/?s=${category}&apikey=9f6740de`)
            .then((response) => response.json())
            .then((data) => setMovies(data.Search)) ;
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  },[movies]);
  
  if (loading) {
    return <Spinner animation="border" />;
  }else{
        return (
            <Container className="mb-3">
                <Row>
                    {movies.map((data) => (
                    <Col xs={12} sm={12} md={6} lg={3} className="mt-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={data.Poster} width={"100%"} height={"300px"} />
                            <Card.Body>
                                <Card.Title>{data.Title}</Card.Title>
                                <Row className="mt-3">
                                    <Col cols={6} style={{textAlign:'left'}}>
                                        {data.Year}
                                    </Col>
                                    <Col cols={6} style={{textAlign:'right'}}>
                                        <Button variant="success" size="sm">Detail</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        )
  } 
}
