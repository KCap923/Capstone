const HomeTron = () => {
  return (
  //  {/*Home Image */}
    <div className="home-card">
      <img
        src="../src/images/Home/MimaHome.png"
        className="rounded float-start"
        id="home-img"
        alt="..."
      ></img>
      <div className="card-details">
        <h2>
          {" "}In Remembrance Of <i> Guadalupe Mendoza </i>{" "}
        </h2>
        <br />
        <h5> September 11th, 1932 - December 6th, 2022 </h5>
        <br />
          {/* Home Top Page Details*/}
        <h5> Personal Note </h5>
        <p>
          We&apos;re blessed to be able to see all of these memories and stories
          that everyone is sharing and it just goes to show how much of a force
          of nature Mima truly was.
        </p>
      </div>
    </div>
  );
};

export default HomeTron;
