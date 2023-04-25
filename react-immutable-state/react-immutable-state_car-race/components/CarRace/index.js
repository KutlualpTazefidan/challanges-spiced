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
import { useImmer } from "use-immer";

const finishLine = 200;

// updateMountain((draft) => {
//   draft.name = event.target.value;
// });

export default function CarRace() {
  const [cars, updateCars] = useImmer(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();
    console.log("clickedCar", clickedCar);
    console.log("coveredDistance", coveredDistance);
    updateCars((draft) => {
      const selectedCar = draft.filter(
        ({ emoji }) => emoji === clickedCar.emoji
      )[0];
      selectedCar.position.x += coveredDistance;
      selectedCar.position.lastDistance = coveredDistance;
    });
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
