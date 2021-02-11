import Search from "../components/Search";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <section className="home container">
      <div className="home__filter">
        <Search />
        <Filter />
      </div>
    </section>
  );
};

export default Home;
