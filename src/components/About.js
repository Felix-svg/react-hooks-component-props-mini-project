function About({ image = "https://via.placeholder.com/215", about, blogs }) {
  return (
    <>
      <aside>
        <img
          src={image}
          alt="blog logo"
        ></img>
        <span>{about}</span>
      </aside>
    </>
  );
}

export default About;
