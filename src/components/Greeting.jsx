import PropTypes from "prop-types";

const Greeting = ({ name, gender, alertUser }) => {
  return (
    <div  className="bg-gray-600">
      <h1 onClick={() => alertUser(name)}>
        Hello {name}, welcome to ,my first component
      </h1>
    </div>
  );
};
Greeting.propTypes={
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  alertUser: PropTypes.func.isRequired
}
export default Greeting;
