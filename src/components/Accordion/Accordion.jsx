import PropTypes from "prop-types";
import "./accordion.css";
import { useRef, useState } from "react";
import classNames from "classnames";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordion = ({ data }) => {
  console.log(data);
  return (
    <div className="accordion-section">
      {Array.isArray(data) &&
        data.map((d, i) => (
          <AccordionItem key={i} title={d.title} content={d.content} />
        ))}
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, content: PropTypes.string })
  ),
};

const AccordionItem = ({ title, content }) => {
  console.log(title);
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="accordion-item">
      <div
        className={classNames("accordion-title", { active: isActive })}
        role="button"
        onClick={(e) => setIsActive(!isActive)}
      >
        <div className="title">{title}</div>
        <div className="icon">
          {isActive ? <BsChevronDown /> : <BsChevronUp />}
        </div>
      </div>
      <div
        ref={contentRef}
        className={classNames("accordion-content", { active: isActive })}
        style={{ height: isActive ? contentRef.current?.scrollHeight : "0px" }}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
