import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function PrimaryBtn({
  title,
  href = '#',
  size = 'xs',
  ParentClassName = '',
  titleClassName = '',
  onClick,
}) {
  const sizeClasses = {
    xs: 'py-3 px-4 text-[.6rem]',
    sm: 'py-4 px-6 text-[.75rem]',
    md: 'px-[32px] py-4 text-sm',
    lg: 'px-[38px] py-5 text-sm',
  };

  return (
    <Link
      onClick={onClick && onClick}
      to={href}
      className={`group inline-block border border-primary p-[.25rem] ${ParentClassName}`}
    >
      <span
        className={`inline-block bg-secondary text-white ${sizeClasses[size]} font-semibold transition-colors duration-300 group-hover:bg-primary ${titleClassName}`}
      >
        {title}
      </span>
    </Link>
  );
}

PrimaryBtn.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  size: PropTypes.string,
  ParentClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  onClick: PropTypes.func,
};
