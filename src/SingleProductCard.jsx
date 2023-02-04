import React from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import BrandExample from "./Navbar";
import "./SingleProductCard.css";
export default function SingleProductCard({ itemData }) {
  console.log(itemData);
  return (
    <div style={{ background: "black", color: "#ffff", width: "100%", height:"100%" }}>
      <BrandExample />
      <Card>
        <Card.Img variant="top" src="https://d1e9q0asw0l2kk.cloudfront.net/benefits_upload/YS1qEd33xRFjU/1658256769149-Facebook%20post%20-%2010.png"/>
      </Card>
      <div>
        {itemData ? (
          <Container className="mt-5 mb-5">
            <Row>
              <Col>
                {" "}
                <h1>{itemData.gym_name}</h1>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>{" "}
                  {itemData.address2}
                </p>
              </Col>
              <Col className="mb-3">
                <div
                  style={{
                    background: "maroon",
                    padding: "1rem",
                    width: "40%",
                    marginLeft: "auto"
                  }}
                >
                  <p style={{ textAlign: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                    <span style={{ marginLeft: "0.5rem" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </span>
                    <span style={{ marginLeft: "0.5rem" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </span>
                    <span style={{ marginLeft: "0.5rem" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </span>
                    <span style={{ marginLeft: "0.5rem" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </span>
                  </p>
                  <h4 style={{ textAlign: "center" }}>
                    {itemData.rating} Ratings
                  </h4>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <h3>Description</h3>
                <h5 className="mt-5 mb-5">
                  WTF: Royal Fitenss Club is one of the greatest gymsd and
                  fitnes centers in {itemData.city}. It combines all relaxation,
                  workout, and group exercise techniques under one roof,
                  including cardio and pulley machines, yoga, and aerobics
                  facilities. They provide classes in Olympic deadlift barbells,
                  punching bags and tyre training.
                </h5>

                <h3>Facilities</h3>
                <Row md={4}>
                  <Col>Moderna Equipements</Col>
                  <Col>Sanitized Gym</Col>
                  <Col>Skilled Trainer</Col>
                  <Col>Parking</Col>
                  <Col className="mt-2">Free Locker</Col>
                  <Col className="mt-2">CCTV</Col>
                  <Col className="mt-2">Skilled Trainer</Col>
                </Row>

                <h3 className="mt-5 mb-5">Why to choose WTF?</h3>
              </Col>
              <Col sm={6}>
                <div
                  style={{
                    border: "2px solid #262626",
                    padding: "0.5rem",
                    borderRadius: "0.3rem",
                    background: "#262626",
                    marginBottom:"1rem"
                  }}
                >
                  <h1 style={{ textAlign: "center" }}>Choose Memebership</h1>
                  <div
                    className="bg-green-gradient"
                    style={{
                      border: "2px solid #ffff",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0.3rem",
                      marginTop: "1rem"
                    }}
                  >
                    <h4>PLAN 1</h4>
                    <div style={{ display: "flex" }}>
                      {" "}
                      <span>BUFF ME UP</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        9999
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-peach-gradient"
                    style={{
                      border: "2px solid #ffff",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0.3rem",
                      marginTop: "1rem"
                    }}
                  >
                    <h4>PLAN 2</h4>
                    <div style={{ display: "flex" }}>
                      {" "}
                      <span>Fat To Fit</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        6999
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-maroon-gradient"
                    style={{
                      border: "2px solid #ffff",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0.3rem",
                      marginTop: "1rem"
                    }}
                  >
                    <h4>PLAN 3</h4>
                    <div style={{ display: "flex" }}>
                      {" "}
                      <span>Beach Body</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        6999
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-aqua-gradient"
                    style={{
                      border: "2px solid #ffff",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0.3rem",
                      marginTop: "1rem"
                    }}
                  >
                    <h4>PLAN 4</h4>
                    <div style={{ display: "flex" }}>
                      {" "}
                      <span>Slim Your Waist</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        6999
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-green-gradient"
                    style={{
                      border: "2px solid #ffff",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0.3rem",
                      marginTop: "1rem"
                    }}
                  >
                    <h4>PLAN 5</h4>
                    <div style={{ display: "flex" }}>
                      {" "}
                      <span>GS (12 Months)</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        10000
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-pink-gradient"
                    style={{
                      border: "2px solid #ffff",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0.3rem",
                      marginTop: "1rem"
                    }}
                  >
                    <h4>PLAN 6</h4>
                    <div style={{ display: "flex" }}>
                      {" "}
                      <span>GS (6 Months)</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        6500
                      </span>
                    </div>
                  </div>

                  <div
                    className="bg-purple-gradient"
                    style={{
                      border: "2px solid #ffff",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0.3rem",
                      marginTop: "1rem"
                    }}
                  >
                    <h4>PLAN 7</h4>
                    <div style={{ display: "flex" }}>
                      {" "}
                      <span>GS (3 Months)</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        4000
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-aqua-gradient"
                    style={{
                      border: "2px solid #ffff",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0.3rem",
                      marginTop: "1rem"
                    }}
                  >
                    <h4>PLAN 8</h4>
                    <div style={{ display: "flex" }}>
                      {" "}
                      <span>GS (1 Month)</span>
                      <span style={{ marginLeft: "auto" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        1500
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
        )}
      </div>
    </div>
  );
}
