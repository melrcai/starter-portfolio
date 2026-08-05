import { TiSocialFacebookCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Contact () {
  return (
    <section id="contact" className="pt-8 pb-8">
        <div className="mx-auto text-center max-w-md flex justify-center items-center mt-2">
          <p className=" text-l font-semibold mx-auto">Have a project in mind? Let's connect!</p>
        </div>

        <div className="mx-auto max-w-md flex justify-center flex-row gap-6 items-center mt-4">
          <div className="hover:bg-gray-500/30 active:bg-gray-500/50 duration-300 w-12 h-12 rounded-full flex justify-center items-center ">
            <TiSocialFacebookCircular className="text-6xl" />
          </div>
          <div className="hover:bg-gray-500/30 active:bg-gray-500/50 duration-300 w-12 h-12 rounded-full flex justify-center items-center ">
            <IoLogoInstagram className="text-6xl" />
          </div>
          <div className="hover:bg-gray-500/30 active:bg-gray-500/50 duration-300 w-12 h-12 rounded-full flex justify-center items-center ">
            <FaLinkedin className="text-4xl" />
          </div>
        </div>
    </section>
  )
}

export default Contact;