const Greeting = ({name, gender, alertUser}) => {
  return (
    <div>
      <h1 onClick={()=>alertUser (name)}>Hello {name}, welcome to ,my first component</h1>
    </div>
  );
};
export default Greeting
