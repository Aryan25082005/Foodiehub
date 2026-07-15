function Contact() {
  const handleOrder = () => {
    alert("🎉 Thank you for connecting us!");
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-10">
          Contact Us
        </h1>


        <div className="grid md:grid-cols-2 gap-10">


          {/* Contact Information */}

          <div className="bg-gray-900 p-8 rounded-xl">

            <h2 className="text-2xl font-bold mb-5">
              Get In Touch
            </h2>


            <p className="text-gray-400 mb-4">
              Have questions or feedback?
              We would love to hear from you.
            </p>


            <p className="mb-3">
              📧 Email:
              <span className="text-gray-400">
                foodieshub@gmail.com
              </span>
            </p>


            <p className="mb-3">
              📞 Phone:
              <span className="text-gray-400">
                +91 98765 43210
              </span>
            </p>


            <p>
              📍 Location:
              <span className="text-gray-400">
                Ahmedabad, Gujarat
              </span>
            </p>


          </div>



          {/* Contact Form */}

          <div className="bg-gray-900 p-8 rounded-xl">

            <h2 className="text-2xl font-bold mb-5">
              Send Message
            </h2>


            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
            />


            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
            />


            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
            ></textarea>


            <button
            onClick={handleOrder}
              className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-bold">
              Submit
            </button>


          </div>


        </div>

      </div>

    </div>
  );
}

export default Contact;