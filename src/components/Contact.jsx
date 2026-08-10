import { TiSocialFacebookCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Contact () {
  const socials = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/melmarcaidaa/',
      icon: <TiSocialFacebookCircular className="text-6xl" />,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/mxlrcai/',
      icon: <IoLogoInstagram className="text-6xl" />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/melissa-marcaida/',
      icon: <FaLinkedin className="text-4xl" />,
    },
  ]

  return (
    <section id="contact" className="pt-4 pb-8">
        <div className="mx-auto text-center max-w-md flex justify-center items-center mt-2">
          <p className=" text-l font-semibold mx-auto">Have a project in mind? Let's connect!</p>
        </div>

        <div className="mx-auto max-w-md flex justify-center flex-row gap-6 items-center mt-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="hover:bg-gray-500/30 active:bg-gray-500/50 duration-300 w-12 h-12 rounded-full flex justify-center items-center"
            >
              {social.icon}
            </a>
          ))}
        </div>
    </section>
  )
}

export default Contact;