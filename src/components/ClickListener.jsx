const ClickListener = () => {
    // const handleClick = () => {
    //     console.log("Clicked!");
    // };
    const handleClick = (e) => {
        console.log(e);
    };

    return (
        <>
            <button onClick={handleClick}> Click me!</button>
        </>
    );
};

export default ClickListener;