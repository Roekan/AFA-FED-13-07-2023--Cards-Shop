import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteAllProducs } from "./../../reducers/sliceCart/";
import { ProductCart } from "./../../common/productCart/ProductCart";
import { Container, Row, Col, Button } from "react-bootstrap";
import { updateUser } from "../../services/apiCalls";
import { getUser, addPurchases } from "../../reducers/sliceUser";
import "./Cart.css";

export const Cart = () => {
  const userData = useSelector(getUser).user;
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  let rdxCartProducts = useSelector(getProducts);

  useEffect(() => {
    setProducts(rdxCartProducts.productsCart);
    console.log("AAA", rdxCartProducts);
  }, [rdxCartProducts.productsCart]);

  const buy = () => {
    const purchase = {
      date: new Date(),
      products: products,
    };

    /*Se guarda en redux el pedido nuevo que vamos a hacer */
    dispatch(addPurchases(purchase));

    console.log(userData);

    updateUser({...userData, purchases: [...userData.purchases, purchase]})
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

    dispatch(deleteAllProducs());
  };

  return (
    <>
      <Container fluid className="box-cards-cart">
        <Row className="d-flex align-items-top justify-content-center py-3">
          <h2 className="d-flex align-items-top justify-content-center py-3 title-cart">
            Carrito
          </h2>
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
        <Row className="d-flex align-items-top justify-content-center py-3">
          <Col className="d-flex align-items-top justify-content-center">
            {products.length && (
              <Button
                variant="outline-light"
                onClick={() => {
                  buy();
                }}
              >
                Comprar
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
