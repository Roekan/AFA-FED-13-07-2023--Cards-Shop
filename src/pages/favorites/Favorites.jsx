import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFavorites } from "./../../reducers/sliceFavorites/";
import { MagicCard } from "./../../common/magicCard/MagicCard";
import { Container, Row, Col } from "react-bootstrap";
import "./Favorites.css";


export const Favorites = () => {
    const [favorites, setFavorites] = useState([])
   
    let rdxCartFavorites = useSelector(getFavorites);
   
   
    
     useEffect(() => {
       setFavorites(rdxCartFavorites.favorites)
     }, [rdxCartFavorites.favorites]);
   
    return (
        <>
          <Container className="box-cards-favorites">
          <Row className="d-flex align-items-top justify-content-center py-3">
            <h2 className="d-flex align-items-top justify-content-center py-3 title-favorites">Favoritos</h2>
          </Row>
            <Row className="d-flex align-items-top justify-content-center py-3 ">
              {favorites.length > 0 &&
                favorites.map((card) => {
                  return (
                    <Col
                    key={card.id}
                    className="my-2 d-flex align-items-center justify-content-center box-card-home"
                  >
                    <MagicCard
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
    
              {!favorites.length && (
                <>
                  <Row className="d-flex justify-content-center alignt-items-center">
                    <Col
                      className="d-flex ustify-content-center alignt-items-center flex-column py-3 rounded-5 text-error-home "
                      xs={8}
                    >
                      No tienes favoritos
                    </Col>
                  </Row>
                </>
              )}
            </Row>
          </Container>
        </>
      );
    };
    
