import { cloneElement } from 'react';
import footerBgImg from '../../assets/images/Footer/footer-bg.png';
import { IoLocationOutline } from 'react-icons/io5';
import { LuPhone, LuAtSign } from 'react-icons/lu';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const contactListItems = [
    {
      id: 1,
      href: '#',
      value: '5 Rue Dalou, 75015 Paris',
      icon: <IoLocationOutline />,
    },
    { id: 2, href: '#', value: '+33 156 78 89 56', icon: <LuPhone /> },
    { id: 3, href: '#', value: 'benoit@mail.com', icon: <LuAtSign /> },
  ];

  const socials = [
    { id: 1, href: '#', icon: <FaTwitter /> },
    { id: 2, href: '#', icon: <FaFacebookF /> },
    { id: 3, href: '#', icon: <FaLinkedinIn /> },
    { id: 4, href: '#', icon: <FaInstagram /> },
  ];

  return (
    <footer
      style={{ backgroundImage: `url(${footerBgImg})` }}
      className="mb-[75px] bg-tertiary bg-cover bg-no-repeat px-4 py-16 text-quaternary lg:mb-8 xl:py-20"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row xl:gap-4">
        <div className="md:flex-1">
          <p className="mb-8 text-xl text-white">Contacts</p>
          <ul className="flex flex-col gap-6">
            {contactListItems.map((contact) => (
              <ContactListItem key={contact.id} {...contact} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:flex-1 md:gap-8 md:text-center">
          <span className="text-2xl font-semibold text-primary xl:text-3xl">
            LOGO
          </span>
          <p className="italic text-white xl:text-xl">
            Whisper to us about your feelings, and we will prepare what you need
            now.
          </p>
          <div className="flex items-center gap-4 md:mx-auto">
            {socials.map((social) => (
              <Social key={social.id} {...social} />
            ))}
          </div>
        </div>

        <div className="flex md:justify-end md:flex-1">
          <div>
            <p className="mb-8 text-xl text-white">Working Hours</p>
            <p className="mb-4 text-lg text-primary">
              Mon-Fri:
              <span className="text-base text-white"> 7.00am - 6.00pm</span>
            </p>
            <p className="mb-4 text-lg text-primary">
              Sat:
              <span className="text-base text-white"> 7.00am - 6.00pm</span>
            </p>
            <p className="mb-4 text-lg text-primary">
              Sun:
              <span className="text-base text-white"> 8.00am - 6.00pm</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactListItem({ href, value, icon }) {
  const styledIcon = cloneElement(icon, { className: 'text-primary text-2xl' });

  return (
    <li>
      <Link to={href} className="flex items-center gap-3">
        {styledIcon}
        <span className="text-white">{value}</span>
      </Link>
    </li>
  );
}

function Social({ href, icon }) {
  const styledIcon = cloneElement(icon, { className: '' });

  return (
    <Link
      to={href}
      className="flex size-8 items-center justify-center rounded-full border border-secondary text-sm text-white transition-colors duration-300 hover:bg-secondary"
    >
      {styledIcon}
    </Link>
  );
}
