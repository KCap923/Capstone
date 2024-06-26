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
          {/* Heart Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#27374D" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
</svg>
<br />
<br />
        <h2>
          {" "}In Remembrance Of <i> Guadalupe Mendoza </i>{" "}
        </h2>
        <br />
        

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
