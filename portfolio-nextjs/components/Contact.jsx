import { useState, useRef, React } from "react";
import Image from "next/image";
import getintouch from "../public/assets/contactme/getintouch.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsFolder } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const success = () => toast.success("Thanks for reaching out!");
  const fail = () =>
    toast.error("Please complete the fields before submitting, thank you.");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      fail();
    } else {
      emailjs
        .sendForm(
          "contact_service",
          "template_ehcqull",
          form.current,
          "AJSDSZKyDIf1GevQr"
        )
        .then(
          (result) => {
            console.log(result.text);
            success();
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setMobile("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#d67f0e]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={getintouch}
              />
              <div>
                <h2 className="py-2">Joseph Lau</h2>
                <p>Software Engineer</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn
                      onClick={() =>
                        openInNewTab(
                          "https://www.linkedin.com/in/joseph-lau-ys/"
                        )
                      }
                    />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub
                      onClick={() =>
                        openInNewTab("https://github.com/laujoseph")
                      }
                    />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto:laujoseph.ys@gmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill
                      onClick={() =>
                        openInNewTab(
                          "https://drive.google.com/file/d/1TYYS_6Yil5fBnfvWZHYH9Qo8MGWzousR/view?usp=sharing"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      name="from_name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Mobile Number
                    </label>
                    <input
                      name="mobile"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="number"
                      onChange={(e) => setMobile(e.target.value)}
                      value={mobile}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300 rows-'10"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </div>
                <button className="focus:outline-none focus:ring w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#d67f0e]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
