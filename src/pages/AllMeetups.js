import MeetupList from "../components/meetups/MeetupList";
import useFavoritesCounter from "../components/hooks/use-favorites-counter";

function AllMeetups() {
  const favoritesCounter = useFavoritesCounter();

  if (favoritesCounter.isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={favoritesCounter.loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
