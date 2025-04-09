const ClickListener = () => {
    // const handleClick = () => {
    //     console.log("Clicked!");
    // };

    // const handleClick = (e) => {
    //     console.log(e);
    // };

    // return (
    //     <>
    //         <button onClick={handleClick}> Click me!</button>
    //     </>
    // );

    const handleClick = (e) => {
        console.log(e);
    };

    return (
        <>
            <label>
                <button onClick={handleClick}>Submit</button>
            </label>
        </>
    );
};

export default ClickListener;