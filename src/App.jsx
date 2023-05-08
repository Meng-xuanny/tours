import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import IsLoading from "./components/IsLoading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = "https://course-api.com/react-tours-project";

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  const removeTour = (id) =>
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <IsLoading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>No tours left</h2>
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={fetchData}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
