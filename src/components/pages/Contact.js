import React, { useState } from "react"
import { motion } from "framer-motion"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const contactPhone = "+48 792-899-179"
  const contactEmail = "byszek.patryk@gmail.com"

  return (
    <>
      <motion.div
        className="contact-page"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100vh" }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-form">
          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(event) => {
              setFormData({ ...formData, name: event.target.value })
            }}
          />
          <input
            type="e-mail"
            placeholder="Your E-mail"
            value={formData.email}
            onChange={(event) => {
              setFormData({ ...formData, email: event.target.value })
            }}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Enter your message"
            value={formData.message}
            onChange={(event) => {
              setFormData({ ...formData, message: event.target.value })
            }}
          ></textarea>
          <div className="button-container">
            {" "}
            <button
              className="contact-buttons"
              onClick={() => {
                if (window.confirm("Do you want to clear the contact form?"))
                  setFormData({ name: "", email: "", message: "" })
              }}
            >
              Clear
            </button>
            <button
              className="contact-buttons"
              onClick={() => {
                if (
                  !formData.name.length ||
                  !formData.email.length ||
                  !formData.message.length
                ) {
                  alert("Please fill out the form!")
                } else if (
                  formData.name.length &&
                  formData.email.length &&
                  formData.message.length
                ) {
                  alert("Sorry, no backend! :(((")
                  setFormData({ name: "", email: "", message: "" })
                }
              }}
            >
              Send
            </button>
          </div>
        </div>
        <div className="contact-details">
          <label
            onClick={() => {
              const textarea = document.createElement("textarea")
              textarea.value = contactEmail
              document.body.appendChild(textarea)
              textarea.select()
              document.execCommand("copy")
              textarea.remove()
              alert("E-mail copied to clipboard")
            }}
          >
            @<h4>{contactEmail}</h4>
          </label>
          <label
            onClick={() => {
              const textarea = document.createElement("textarea")
              textarea.value = contactPhone
              document.body.appendChild(textarea)
              textarea.select()
              document.execCommand("copy")
              textarea.remove()
              alert("Phone number copied to clipboard")
            }}
          >
            #<h4>{contactPhone}</h4>
          </label>
        </div>
      </motion.div>
    </>
  )
}

export default Contact
