import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteAllProducs } from "./../../reducers/sliceCart/";
import { ProductCart } from "./../../common/productCart/ProductCart";
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { updateUser } from "../../services/apiCalls";
import { getUser, addPurchases } from "../../reducers/sliceUser";
import "./Cart.css";

export const Cart = () => {
  const userData = useSelector(getUser).user;
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let rdxCartProducts = useSelector(getProducts);

  useEffect(() => {
    setProducts(rdxCartProducts.productsCart);
  }, [rdxCartProducts.productsCart]);

  const buy = () => {
    const purchase = {
      date: new Date(),
      products: products,
    };

    /*Se guarda en redux el pedido nuevo que vamos a hacer */
    dispatch(addPurchases(purchase));

    updateUser({ ...userData, purchases: [...userData.purchases, purchase] })
      .then((res) => {
        setShow(true)
        setTimeout(() => {
        setShow(false);
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch(deleteAllProducs());
  };

  return (
    <>
      <Modal className="cart-modal-msg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className=" box-title-modal-msg">
        <Modal.Title className="title-modal-msg" >Se ha realizado el pedido corectamente</Modal.Title>
        </Modal.Header>
      </Modal>

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

          {products.length <= 0 && (
            <Col className="my-2 d-flex align-items-center justify-content-center not-found-cart">
              <h2>No se ha añadido ningun producto al carrito</h2>
            </Col>
          )}
        </Row>
        <Row className="d-flex align-items-top justify-content-center py-3">
          <Col className="d-flex align-items-top justify-content-center">
            {products.length && (
              <Button
                className="btn-purchase-cart"
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
