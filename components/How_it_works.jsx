"use client";

import "./How_it_works.css";
import Card from "react-bootstrap/Card";

function How_it_works() {
  return (
    <div className="flex flex-col items-center mb-12! " id="how-it-works">
      <h1 className="text-[#00C950]! font-extrabold! text-center pt-4! pb-8! text-4xl!">
        How it works
      </h1>

      <div className="all_cards_div">
        {/* Card 1 */}
        <Card className="how_it_work_card">
          <Card.Body className="text-center">
            <div className="bg-[#00C950]! w-10 h-10 rounded-full flex items-center justify-center text-white text-lg! font-extrabold! mb-4 mx-auto">
              1
            </div>

            <Card.Title className="font-bold!">
              Tell us your field
            </Card.Title>

            <Card.Text className="text-xl! pt-2! leading-10!">
              Pick your major, courses, and skill level so we know who to
              match you with.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card className="how_it_work_card">
          <Card.Body className="text-center">
            <div className="bg-[#00C950]! w-10 h-10 rounded-full flex items-center justify-center text-white text-lg! font-extrabold! mb-4 mx-auto">
              2
            </div>

            <Card.Title className="font-bold!">
              Get matched instantly
            </Card.Title>

            <Card.Text className="text-xl! pt-2! leading-10!">
              We pair you with students studying the same subject, nearby or
              online.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 3 */}
        <Card className="how_it_work_card">
          <Card.Body className="text-center">
            <div className="bg-[#00C950]! w-10 h-10 rounded-full flex items-center justify-center text-white text-lg! font-extrabold! mb-4 mx-auto">
              3
            </div>

            <Card.Title className="font-bold!">
              Study or teach
            </Card.Title>

            <Card.Text className="text-xl! pt-2! leading-10!">
              Join a live session to learn together, or host one and teach
              what you know.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default How_it_works;