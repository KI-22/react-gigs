const ClickInput = () => {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
        // "You can pass formData as a fetch body directly:"
        // fetch('/some-api', { method: form.method, body: formData });

        // "Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson); // << prints whats currently in input to console
      }
      return (
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Text input: <input name="myInput" defaultValue="Some initial value" />
          </label>
          {/* <input name="myInput" defaultValue="Some initial value" /> */}
          <button type="submit">Submit form</button>
          </form>
      );
}

export default ClickInput;