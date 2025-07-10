import React, { useRef, useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import "../style/contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const availableDates = useMemo(() => {
    const today = new Date();
    const dates = [];

    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);

      const day = date.getDay(); // 0 = niedziela, 3 = środa, 6 = sobota
      const isUnavailable = day === 0 || day === 3 || day === 6;

      dates.push({ date, isUnavailable });
    }

    return dates;
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_co9696c",
        "template_tfig0xq",
        form.current,
        "H5PvhaUpNbZX2NRzu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container glassmorphism">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>

      <div className="calendar-container">
        <h3>Available Dates</h3>
        <ul className="date-list">
          {availableDates.map(({ date, isUnavailable }, index) => {
            const dayName = date.toLocaleDateString("en-GB", {
              weekday: "short",
            });
            const dayNumber = date.getDate();
            const monthName = date.toLocaleDateString("en-GB", {
              month: "short",
            });

            return (
              <li key={index} className="available-date glassmorphism">
                <div className="date-column">
                  <span>{dayName}</span>
                  <span
                    style={{
                      width: "100%",
                      background: isUnavailable ? "#4A148C" : "#B388EB",
                      fontSize: "1.8rem",
                    }}
                  >
                    {dayNumber}
                  </span>
                  <span>{monthName}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
