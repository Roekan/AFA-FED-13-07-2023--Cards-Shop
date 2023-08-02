import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import './Searcher.css';

export const Searcher = ({changeValue}) => {
  return (
    <>
      <Container fluid className="py-3">
        <Row className="d-flex align-items-center justify-content-center">
            <Col className='py-1' xs={12} md={6}>
                <div className="d-flex align-items-center justify-content-center box-input-searcher">
                    <input type="text" onChange={(e)=>changeValue(e.target.value)}  placeholder="Buscar..." className="p-2" />  
                </div>
            </Col>
        </Row>
      </Container>
    </>
  );
};
