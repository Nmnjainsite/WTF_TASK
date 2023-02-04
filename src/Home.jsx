import React, { useState, useEffect } from "react";
import { Form, FormControl, Button, Card, ListGroup } from "react-bootstrap";
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
 
  console.log(data)
  return (
    <>
      <BrandExample />
      
      <Card>
        <Card.Img variant="top" src="https://d1e9q0asw0l2kk.cloudfront.net/benefits_upload/YS1qEd33xRFjU/1658256769149-Facebook%20post%20-%2010.png"/>
      </Card>

      <Container className="mt-5 mb-5" bg="dark" variant="dark">
        <Row>
          <Col sm={4}>
            <Form className="mt-5">
              <FormControl
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
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
              <Button className="ml-3 mt-3" onClick={handleReset}>
                Reset
              </Button>
            </Form>
          </Col>

          <Col sm={8}>
            {sortedData.map((item) => (
              <Card key={item.user_id} style={{marginTop:"2rem"}}>
                <Row>
                  <Col xs={6}>
                    {" "}
                    <Link
                      to={`/ProductDetails/${item.user_id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      <Card.Img variant="top" src={item.cover_image} />
                    </Link>
                  </Col>
                  <Col>
                    <Card.Body>
                    <Link
                      to={`/ProductDetails/${item.user_id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Card.Text>{item.gym_name}</Card.Text>
                      <ListGroup variant="flush">
                        <ListGroup.Item>City: {item.city}</ListGroup.Item>
                        <ListGroup.Item>Address: {item.address}</ListGroup.Item>
                      </ListGroup>
                      </Link>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
