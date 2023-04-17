import SectionTitle from "../Common/SectionTitle";
import SingleEvent from "./SingleEvent";
import eventsData from "./eventsData";

const Events = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Events"
            paragraph="Participants can take part in these events."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {eventsData.map((feature) => (
              <SingleEvent key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
