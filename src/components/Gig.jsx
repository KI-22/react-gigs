const Gig = (props) => {
    return (
        <div>
            <h3>Gig for {props.artist}!</h3>
            {/* <img className="band-img" src={props.bandImage}></img> */}
            <img className="band-img" src={props.imgURL}></img>
            <p className="descr-text">{props.description}</p>
            <p>Date time: {props.datetime}</p>
            <p>Where: {props.location}</p>
        </div>
    );
};

export default Gig;


// import elderbrookImg from "./assets/elderbrook.jpeg"; 

// <img className="band-img" src={elderbrookImg}></img>
