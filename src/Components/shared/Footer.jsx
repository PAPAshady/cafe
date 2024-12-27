import { cloneElement, memo } from 'react';
import footerBgImg from '../../assets/images/Footer/footer-bg.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { contactListItems, socials } from '../../data';

export default memo(function Footer() {
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

        <div className="flex md:flex-1 md:justify-end">
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
});

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

ContactListItem.propTypes = {
  href: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

Social.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
