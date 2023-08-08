import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "./../../reducers/sliceCart/";
import { ProductCart } from "./../../common/productCart/ProductCart";
import { Container, Row, Col } from "react-bootstrap";
import "./Cart.css";


export const Cart = () => {
    const [products, setProducts] = useState([])
   
    let rdxCartProducts = useSelector(getProducts);
   
   
    
     useEffect(() => {
        setProducts(rdxCartProducts.productsCart)
        console.log('AAA', rdxCartProducts)
     }, [rdxCartProducts.productsCart]);
   
    return (
        <>
          <Container fluid className="box-cards-cart">
          <Row className="d-flex align-items-top justify-content-center py-3">
            <h2 className="d-flex align-items-top justify-content-center py-3 title-cart">Carrito</h2>
          </Row>
            <Row className="d-flex align-items-top justify-content-center py-3 ">
              {products.length > 0 &&
                products.map((card) => {
                  return (
                    <Col
                    sm={12}
                    key={card.id}
                    className="my-2 d-flex align-items-center justify-content-center box-card-cart"
                  >
                    <ProductCart
                      id={card.id}
                      name={card.name}
                      colors={card.colors}
                      type={card.type}
                      image={card.imageUrl}
                      rarity={card.rarity}
                      info={card.text}
                      {...card}
                    />
                  </Col>
                  );
                })}
    
              {!products.length && (
                <>
                  <Row className="d-flex justify-content-center alignt-items-center">
                    <Col
                      className="d-flex ustify-content-center alignt-items-center flex-column py-3 rounded-5 text-error-cart "
                      xs={8}
                    >
                      No hay productos en el carrito
                    </Col>
                  </Row>
                </>
              )}
            </Row>
          </Container>
        </>
      );
    };
    
