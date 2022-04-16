import "./Heading.css";

function Heading({ type, text }) {
  if (type === "main") return <h1 className="heading--main">{text}</h1>;

  return <h2>{text}</h2>;
}

export default Heading;
