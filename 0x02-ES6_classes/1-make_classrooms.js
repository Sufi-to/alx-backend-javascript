import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const roomcls = [19, 20, 34];
  roomcls.forEach((roomcl) => {
    rooms.push(new ClassRoom(roomcl));
  });
  return rooms;
}
