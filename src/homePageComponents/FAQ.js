import React, { useState } from "react";
import style from "../styles/FAQ.module.css";
import FaqCard from "./FaqCard";

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className={style.faqOuter}
      style={{ height: expandedIndex !== null ? "648px" : "" }}
    >
      <div className={style.faqInner}>
        <h1 className={style.faqHeading}>
          FREQUENTLY ASKED QUESTIONS{" "}
          <span className={style.faqHeadingSpan}>(FAQ’s)</span>
        </h1>
        <div
          className={style.faqBtmContainer}
          style={{ height: expandedIndex !== null ? "400px" : "" }}
        >
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <FaqCard
              key={index}
              isExpanded={expandedIndex === index}
              onClick={() => toggleExpand(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
