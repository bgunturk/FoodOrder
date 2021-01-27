import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import FoomsList from "./FoodList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={fooms} />
      <RoomsList rooms={sortedFoods} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);