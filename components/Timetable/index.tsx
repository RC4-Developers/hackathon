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
    day: "Monday",
    timeSlots: [
      {
        time: "9:00AM",
        activity: "Yoga",
        location: "Studio A"
      },
      {
        time: "11:00AM",
        activity: "Pilates",
        location: "Studio B"
      },
      {
        time: "2:00PM",
        activity: "Zumba",
        location: "Studio A"
      }
    ]
  },
  {
    day: "Tuesday",
    timeSlots: [
      {
        time: "8:00AM",
        activity: "Spinning",
        location: "Studio B"
      },
      {
        time: "10:00AM",
        activity: "Body Pump",
        location: "Studio A"
      },
      {
        time: "3:00PM",
        activity: "Yoga",
        location: "Studio A"
      }
    ]
  },
  // ... add more days as needed
];

const Timetable: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-transparent">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Day
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Activity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-gray-200">
            {tableData.map((day, i) => (
              <React.Fragment key={i}>
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900"
                  >
                    {day.day}
                  </td>
                </tr>
                {day.timeSlots.map((slot, j) => (
                  <tr key={`${i}-${j}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {/* empty cell */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {slot.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {slot.activity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {slot.location}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))
            }
            </tbody>
            </table>
            </div>
            </div>
  )}

  export default Timetable;