const InputListener = () => {
    const inputChange = (e) => {
        console.log(e);
        // console.log(e.inputOutput)
    };

    const handleClick = (e) => {
        console.log(e);
    };

    return (
        <>
            {/* <input name="myInput" onChange={inputChange} />  */}
            {/* ^logs every key stroke I think? */}

            {/* <input name="myInput" onChange={inputChange} defaultValue="Tell me more..." /> */}
            {/* <input name="myInput" onChange={inputChange} value="Tell me more..." /> */}
            <form method="post" onSubmit={handleClick}>
                <input name="myInput" defaultValue="Tell me more..." />
                <button type="submit" onClick={handleClick}>Submit</button>
            </form>
        </>
    );
};

export default InputListener;