"use client";

import "./right_hero.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "next/image";
import hero_image from "../public/hero_image.png";
import Button from "react-bootstrap/Button";

function Right_Hero() {
  return (
    <Card style={{ width: "100vw" }} className="hero_card">
      <Card.Body className="hero_text">
        <Card.Title className="text-6xl! font-extrabold! mb-4!">Study together. Teach each other.</Card.Title>
        <Card.Text className="text-xl! pt-2! pb-2! leading-10!">
          Match with students in your major, join live study rooms,<br></br> and swap
          knowledge with people who get exactly what you're learning.
        </Card.Text>
        <div>
        <Button
          variant="success"
          className="bg-primary-color mr-4! mb-4! text-primary-color text-lg! pl-8! pr-8! pt-4! pb-4! rounded-4xl! border-none! font-semibold!"
        >
          Find your study buddy
        </Button>
         <Button
          variant="success"
          className="bg-white text-black text-lg! mb-4! rounded-4xl! pt-4! pb-4! pl-4! pr-4! border-[#d1d1d1]! border-3! font-semibold!"
        >
          See how it works
        </Button>
        </div>

        <ListGroup className="list-group-flush pt-4!">
        <ListGroup.Item >
          Free for students. No credit card needed.
        </ListGroup.Item>
      </ListGroup>

      </Card.Body>
      
      <Image src={hero_image} className="hero_image" alt="hero_image"></Image>
    </Card>
  );
}

export default Right_Hero;
