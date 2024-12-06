const Profile = () => {
  const firstName = "kelvin";
  const lastName = "doe";
  return (
    <>
      <div className="app" style={{ textAlign: "center" }}>
        {
          <img
            className="image"
            src="https://i.pinimg.com/736x/61/f4/87/61f4877d3eddb40db04e33a6d174d882.jpg"
          />
        }
        <p className="clickMe">
          {firstName} {lastName}
        </p>
        <button onClick={() => console.log(" hello world")}>click me</button>
      </div>
    </>
  );
};

export default Profile;
