"use client";

export default function ContactButton() {
    const handleClick = () => {
        const name = document.getElementById("name-field").value;
        const email = document.getElementById("email-field").value;
        const message = document.getElementById("message-field").value;
        if (message === "") {
            alert("Please enter a message");
            return;
        }
        const mailtoLink = `mailto:compsa@compsa.queensu.ca?subject=Contact from ${name}&body=${message} My contact email is ${email}`;
        window.location.href = mailtoLink;
    };

    return (
        <button className="submit" type="button" onClick={handleClick}>
            Submit Message
        </button>
    );
}
