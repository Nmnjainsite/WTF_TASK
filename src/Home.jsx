import React, { useState, useEffect } from "react";
import { Form, FormControl, Button, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import BrandExample from "./Navbar";

const API_URL =
  "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231";

function Home() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("city");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      (item.city === selectedCity || selectedCity === "") &&
      (item.address1 === selectedAddress || selectedAddress === "") &&
      (item.gym_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortType === "city") {
      return (
        a.city.localeCompare(b.city) || a.gym_name.localeCompare(b.gym_name)
      );
    }
  });

  const uniqueCities = Array.from(new Set(data.map((item) => item.city)));
  const uniqueAddresses = selectedCity
    ? Array.from(
        new Set(
          data
            .filter((item) => item.city === selectedCity)
            .map((item) => item.address1)
        )
      )
    : [];

  const handleCitySelect = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleAddressSelect = (e) => {
    setSelectedAddress(e.target.value);
  };

  const handleReset = () => {
    setSelectedCity("");
    setSelectedAddress("");
    setSearchQuery("");
    setSortType("city");
  };

  console.log(data);
  return (
    <div style={{ background: "black" }}>
      <BrandExample />
      <Card>
        <Card.Img
          variant="top"
          src="https://d1e9q0asw0l2kk.cloudfront.net/benefits_upload/YS1qEd33xRFjU/1658256769149-Facebook%20post%20-%2010.png"
        />
      </Card>

      <Container className="mt-5">
        <Row>
          <Col sm={4}>
            <Form className="mt-5 form-inline">
              <FormControl
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                className="mr-3"
              />
              <Button
                className="mt-3"
                style={{ background: "maroon", border: "none" }}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Form.Control
                as="select"
                className="ml-3 mt-3"
                onChange={handleCitySelect}
              >
                <option value="">Sort by City</option>
                {uniqueCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Control>
              {selectedCity && (
                <Form.Control
                  as="select"
                  className="ml-3 mt-3"
                  onChange={handleAddressSelect}
                >
                  <option value="">Sort by Address</option>
                  {uniqueAddresses.map((address) => (
                    <option key={address} value={address}>
                      {address}
                    </option>
                  ))}
                </Form.Control>
              )}
            </Form>
          </Col>

          <Col sm={8}>
            <div style={{ marginBottom: "1rem" }}>
              {" "}
              {sortedData.map((item) => (
                <Card
                  key={item.user_id}
                  style={{
                    marginTop: "2rem",
                    background: "#262626",
                    color: "white"
                  }}
                >
                  <Row>
                    <Col xs={6}>
                      {" "}
                      <Link
                        to={`/ProductDetails/${item.user_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <Card.Img variant="top" src={item.cover_image} />
                      </Link>
                    </Col>
                    <Col>
                      <Card.Body>
                        <Link
                          to={`/ProductDetails/${item.user_id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <Card.Text>{item.gym_name}</Card.Text>
                          <Card.Text>{item.city}</Card.Text>
                          <Card.Text>
                            {" "}
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
                            {item.address1}
                          </Card.Text>
                        </Link>
                      </Card.Body>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          margin: "0.4rem"
                        }}
                      >
                        {" "}
                        <Button
                          variant="primary"
                          style={{
                            backgroundColor: "maroon",
                            color: "white",
                            border: "none"
                          }}
                        >
                          Book Now
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
