import { Fragment, useState } from "react";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";

const finishLine = 200;

export default function CarRace() {
  const [cars, setCars] = useState(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();
    console.log("clickedCar", clickedCar);
    console.log("coveredDistance", coveredDistance);
    setCars(
      cars.map((car) =>
        car.emoji === clickedCar.emoji
          ? {
              ...car,
              position: {
                ...car.position,
                x: car.position.x + coveredDistance,
              },
            }
          : car
      )
    );
  }

  const winner = cars.find((car) => {
    console.log(car.position.x);
    return car.position.x >= finishLine;
  });

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => setCars(initialCars)} />
      ) : (
        <AllCarRoutes finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track finishLine={finishLine}>
                <CarButton
                  onClick={() => moveCar(car)}
                  positionX={car.position.x}
                  lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}