import Hello from "./components/Hello";
import Gig from "./components/Gig";
import makersLogo from "./assets/Makers-Logo.png";
// import elderbrookImg from "./assets/elderbrook.jpeg"; 
import "./App.css";
import "./Gig.css";
import ClickListener from "./components/ClickListener";
import InputListener from "./components/InputListener";

function App() {
  return (
    <>
      <ClickListener />
      <InputListener />

      {/* <Hello name="World" /> */}
      {/* <img className="logo" src={makersLogo}></img> */}

      {/* <Gig artist="Elderbrook" />
      <img className="band-img" src={elderbrookImg}></img>
      <p className="descr-text">It's a concert. Be there.</p>
      <p>Date time: XXX</p>
      <p>Where: this venue</p> */}

      <Gig 
        artist="Elderbrook"
        imgURL = "https://i.scdn.co/image/ab67616d00001e023846362ecfbec95fde427a94" 
        description = "It's a concert. Be there."
        datetime = "XXX"
        location = "this venue"
      />
       <Gig 
        artist="Another band"
        imgURL = "https://cdn.shopify.com/s/files/1/0555/3297/8210/files/pexels-cottonbro-9643922_480x480.jpg?v=1662379216" 
        description = "It's another concert. Who knows."
        datetime = "one day"
        location = "not here"
      />

    </>
  );
}

export default App;


// A h3 (heading) element listing the name of the band
// A img (image) element for an image of the band, using the src attribute to link to an image.
// A p (paragraph) element containing a description of the event
// A p element containing the time and date of the event
// A p element containing the location of the event
