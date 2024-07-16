import React from "react";
import style from "../styles/Searches.module.css";
import SearchCard from "./SearchCard";
import SearchCard2 from "./SearchCard2";
function Searches() {
  return (
    <div
      className={style.outermostSearchContainer}
      style={{
        backgroundImage: "url(/images/Bcg.svg)",
        backgroundPosition:"0px 70px"
        }}
    >
      <div className={style.searchContainer}>
        <div className={style.topDiv}>
          <h1 className={style.popular}>
            POPULAR <span className={style.popularSpan}>SEARCHES</span>
          </h1>
          <p className={style.searchPara}>
            See what other people are looking for
          </p>
        </div>

        <div className={style.btmDiv}>
          <SearchCard
            img="/images/searches/cardio.svg"
            title="Best Cardiologist Doctors"
          />
          <SearchCard
            img="/images/searches/engg.svg"
            title="Electrical Engineers"
          />
          <SearchCard
            img="/images/searches/civil.svg"
            title="Top Govt.Officers in Pune"
          />
          <SearchCard
            img="/images/searches/lawyer.svg"
            title="Best Lawyers consultant"
          />
          <SearchCard
            img="/images/searches/govt.svg"
            title="Top 5 Civil Officers"
          />
          <SearchCard
            img="/images/searches/delhi.svg"
            title="Best Lawyers in Delhi"
          />

          <SearchCard2
            img="/images/searches/teacher.svg"
            title="Top 10 Teachers"
          />
        </div>
      </div>
    </div>
  );
}

export default Searches;
