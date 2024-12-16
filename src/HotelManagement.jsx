import React, { useState } from 'react';

const HotelManagement = () => {
    const ROOMS = [
        { roomNo: 1, noOfBeds: 1, isBooked: "false" },
        { roomNo: 2, noOfBeds: 1, isBooked: "false" },
        { roomNo: 3, noOfBeds: 1, isBooked: "false" },
        { roomNo: 4, noOfBeds: 1, isBooked: "false" },
        { roomNo: 5, noOfBeds: 1, isBooked: "false" },
    ];

    const [rooms, setRoom] = useState(ROOMS);
    const [roomNo, setRoomNo] = useState(0);
    const [filteredRoom, setFilteredRoom] = useState([]);

    function searchRoom(no) {
        let convertNum = parseInt(no);

        let findNum = rooms.find((value) => value.roomNo === convertNum);

        if (findNum) {
            if (findNum.isBooked === 'false') {
                setRoomNo(0);
                setFilteredRoom([findNum]);

            }
            else {
                alert('room already booked')
            }
        } else {
            alert(`Couldn't find room no`);
        }




    }

    function bookRoom(value) {
        const updatedRooms = rooms.map((room) => {
            if (room.roomNo === value.roomNo) {
                return { ...room, isBooked: "booked" };
            }
            return room; // Keep other rooms unchanged
        });

        setRoom(updatedRooms); // Update the rooms state
        setFilteredRoom([]); // Clear the filteredRoom after booking
    }

    return (
        <div className="flex flex-col w-screen">
            <p>Hotel Management</p>
            <table>
                <thead>
                    <tr>
                        <th>Room NO</th>
                        <th>No Of Beds</th>
                        <th>Booking Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((value, index) => (
                        <tr key={index}>
                            <td>{value.roomNo}</td>
                            <td>{value.noOfBeds}</td>
                            <td>{value.isBooked}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ display: "flex", flexDirection: "column", width: "200px", gap: "20px" }}>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Search rooms"
                        value={roomNo}
                        onChange={(e) => setRoomNo(e.target.value)}
                    />
                    <button onClick={() => searchRoom(roomNo)}>Search</button>
                </div>

                <div className="flex">
                    {filteredRoom.length > 0 && (
                        <div>
                            <p>Room No: {filteredRoom[0].roomNo}</p>
                            <p>Beds: {filteredRoom[0].noOfBeds}</p>
                            <p>Booked: {filteredRoom[0].isBooked}</p>
                        </div>
                    )}
                </div>

                {filteredRoom.length > 0 && (
                    <button onClick={() => bookRoom(filteredRoom[0])}>Book</button>
                )}
            </div>
        </div>
    );
};

export default HotelManagement;
