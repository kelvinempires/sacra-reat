const Welcome = ({ children }) => {
    const styleP = {
        fontSize:"30px",
    }
  return (
    <div style={{backgroundColor:"red", color: "whitesmoke"}}>
      <p style={styleP}> {children}</p>
    </div>
  );
};
export default Welcome;
