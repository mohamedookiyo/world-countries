import Search from "../components/Search";
import Filter from "../components/Filter";
import Card from "../components/Card";

// Home component
const Home = () => {
  return (
    <section className="home container">
      <div className="home__filter">
        <Search />
        <Filter />
      </div>

      <div className="grid grid__home">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Home;
