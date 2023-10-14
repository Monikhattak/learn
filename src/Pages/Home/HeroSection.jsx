export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Muhammad Mujtaba</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
                  I'm a front end developer web designer with two years of experience. 
            <br />Designed creative and responsive websites with 99% client
              satisfaction. 
          </p>
        </div>
        
        <a href='Muhammad Mujtaba resumee.pdf ' download='Mujtaba Resume'>
        <button className="btn btn-primary">Get Resume</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
