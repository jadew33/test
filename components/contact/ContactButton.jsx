"use client";
import emailjs from "@emailjs/browser";
emailjs.init("8YPD4FRFeJpmKkj7B");

export default function ContactButton() {
  const handleClick = () => {
    const name = document.getElementById("name-field").value;
    const email = document.getElementById("email-field").value;
    const message = document.getElementById("message-field").value;
    if (message === "") {
      alert("Please enter a message");
      return;
    }
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };
    emailjs.send("service_41qe1yo", "template_tyb1jmq", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    document.getElementById("name-field").value = "";
    document.getElementById("email-field").value = "";
    document.getElementById("message-field").value = "";
  };

  return (
    <button
      className="submit text-compsa-white"
      type="button"
      onClick={handleClick}
    >
      Submit Message
    </button>
  );
}
