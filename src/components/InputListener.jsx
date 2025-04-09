const InputListener = () => {
    const inputChange = (e) => {
        console.log(e);
        // console.log(e.inputOutput)
    };

    return (
        <>
            {/* <input name="myInput" onChange={inputChange} />  */}
            {/* ^logs every key stroke I think? */}

            <input name="myInput" onChange={inputChange} defaultValue="Tell me more..." />
            {/* <input name="myInput" onChange={inputChange} value="Tell me more..." /> */}
        </>
    );
};

export default InputListener;