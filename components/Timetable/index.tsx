import React from "react";

interface TimeSlot {
  time: string;
  activity: string;
  location: string;
}

interface Day {
  day: string;
  timeSlots: TimeSlot[];
}

const tableData: Day[] = [
  {
    day: "5th May",
    timeSlots: [
      {
        time: "10:00AM - 11:00AM",
        activity: "Opening Ceremony",
        location: "MPSH",
      },
      {
        time: "01:00PM - 04:00PM",
        activity: "Professional Photoshoot",
        location: "SR",
      },
      {
        time: "12:00PM - 01:00PM",
        activity: "Lunch",
        location: "Outside SR",
      },
      {
        time: "02:00PM - 03:00PM",
        activity: "Workshop 1",
        location: "SR",
      },
      {
        time: "03:00PM - 04:00PM",
        activity: "Workshop 2",
        location: "SR",
      },
      {
        time: "04:00PM - 05:00PM",
        activity: "Workshop 3",
        location: "SR",
      },
      {
        time: "06:00PM - 08:00PM",
        activity: "Dinner",
        location: "Outside SR",
      },
      {
        time: "08:00PM - 10:00PM",
        activity: "Game Competition",
        location: "SR",
      },
      {
        time: "10:00PM - 12:00AM",
        activity: "Supper",
        location: "Outside SR",
      },
    ],
  },
  {
    day: "6th May",
    timeSlots: [
      {
        time: "12:00PM - 01:00PM",
        activity: "Lunch",
        location: "Outside SR",
      },
      {
        time: "01:00PM - 04:00PM",
        activity: "Professional Photoshoot",
        location: "SR",
      },
      {
        time: "01:00PM - 02:00PM",
        activity: "Workshop 4",
        location: "SR",
      },
      {
        time: "02:00PM - 03:00PM",
        activity: "Workshop 5",
        location: "SR",
      },
      {
        time: "05:00PM - 07:00AM",
        activity: "Presentation of solutions to judges",
        location: "MPSH",
      },
      {
        time: "10:00PM - 12:00AM",
        activity: "Dinner",
        location: "Outside SR",
      },
    ],
  },
  // ... add more days as needed
];

const Timetable: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden sm:rounded-lg">
        <table className="divide-gray-200 min-w-full divide-y">
          <thead className="bg-transparent">
            <tr>
              <th
                scope="col"
                className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Day
              </th>
              <th
                scope="col"
                className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Time
              </th>
              <th
                scope="col"
                className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Activity
              </th>
              <th
                scope="col"
                className="text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Location
              </th>
            </tr>
          </thead>
          <tbody className="divide-gray-200 divide-y bg-transparent">
            {tableData.map((day, i) => (
              <React.Fragment key={i}>
                <tr>
                  <td
                    colSpan={4}
                    className="text-gray-900 whitespace-nowrap px-6 py-4 text-sm font-bold"
                  >
                    {day.day}
                  </td>
                </tr>
                {day.timeSlots.map((slot, j) => (
                  <tr key={`${i}-${j}`}>
                    <td className="text-gray-500 whitespace-nowrap px-6 py-4 text-sm">
                      {/* empty cell */}
                    </td>
                    <td className="text-gray-500 whitespace-nowrap px-6 py-4 text-sm">
                      {slot.time}
                    </td>
                    <td className="text-gray-500 whitespace-nowrap px-6 py-4 text-sm">
                      {slot.activity}
                    </td>
                    <td className="text-gray-500 whitespace-nowrap px-6 py-4 text-sm">
                      {slot.location}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
