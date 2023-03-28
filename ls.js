import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
        />
      </Head>

      <div className="bg-gray-900 min-h-screen">
        <div className="container mx-auto my-20 max-w-md rounded-lg overflow-hidden border border-gray-500 bg-gray-800">
          <div className="p-5 space-y-5 shadow-xl">
            <h4 className="text-center text-3xl text-white">Contact Us</h4>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Phone"
                />
                <textarea
                  cols="10"
                  rows="5"
                  className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  placeholder="Write your query/doubt..."
                ></textarea>
                <input
                  type="submit"
                  value="Send your query to us"
                  className="focus:outline-none mt-5 bg-green-500 px-4 py-2 text-white font-bold w-full"
                />
                <div className="text-center text-white">
                  <p>📱&nbsp;Reach us through our social media handles:</p>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex flex-col items-center">
                    <p className="text-center text-white"></p>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 px-4 py-2 text-white font-bold rounded hover:bg-blue-600"
                    >
                      Twitter
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-center text-white">
                      Like us on&nbsp;
                    </p>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 px-4 py-2 text-white font-bold rounded hover:bg-blue-600"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-center text-white">
                      Connect with us on&nbsp;
                    </p>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 px-4 py-2 text-white font-bold rounded hover:bg-blue-600"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}