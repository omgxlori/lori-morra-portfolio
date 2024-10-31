export default function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <p>Hey, I just met you, and this is crazy, but here is where you can contact me. So, message me, maybe?</p>
        <br></br><br></br>
        <div className="form-container">
          <form id="form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <br></br>
              <div className="button-container">
                <button type="submit">Submit</button>
                </div>
            </form>
            </div>
      </div>
    );
  }
  