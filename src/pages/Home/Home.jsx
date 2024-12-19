import PrimaryBtn from '../../Components/PrimaryBtn/PrimaryBtn';
import sliderImg1 from '../../assets/images/home-page/sliderImg1.jpg';
import sliderImg2 from '../../assets/images/home-page/sliderImg2.jpg';
import sliderLogo from '../../assets/images/home-page/sliderLogo.png';
import staticImage1 from '../../assets/images/home-page/staticImage1.jpg';
import staticImage2 from '../../assets/images/home-page/staticImage2.jpg';
import staticImage3 from '../../assets/images/home-page/staticImage3.jpg';
import staticImage4 from '../../assets/images/home-page/staticImage4.jpg';
import servicesImg1 from '../../assets/images/home-page/servicesImg1.png';
import servicesImg2 from '../../assets/images/home-page/servicesImg2.png';
import servicesImg3 from '../../assets/images/home-page/servicesImg3.png';
import servicesImg4 from '../../assets/images/home-page/servicesImg4.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Home() {
  const servicesItemsArray = [
    {
      id: 1,
      title: 'Fresh Products',
      description: 'For each dish, the growth of every element & the selection',
      img: servicesImg1,
      href: '#',
    },
    {
      id: 2,
      title: 'Fresh Products',
      description: 'For each dish, the growth of every element & the selection',
      img: servicesImg2,
      href: '#',
    },
    {
      id: 3,
      title: 'Fresh Products',
      description: 'For each dish, the growth of every element & the selection',
      img: servicesImg3,
      href: '#',
    },
    {
      id: 4,
      title: 'Fresh Products',
      description: 'For each dish, the growth of every element & the selection',
      img: servicesImg4,
      href: '#',
    },
  ];

  return (
    <div>
      <section className="relative flex h-[380px] flex-col items-center justify-center gap-3 overflow-x-hidden px-7 text-center text-white xs:h-[450px] sm:h-[600px] sm:gap-5 md:h-[700px] lg:h-[770px] lg:gap-7 xl:h-[920px]">
        <p className="text-sm text-primary md:text-lg lg:mb-2 xl:mb-4 xl:text-xl">
          Welcome to Our Restaurant
        </p>
        <p className="text-2xl xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.2rem] xl:text-[5rem]">
          Taste Royale Cuisine
        </p>
        <span className="my-2 flex h-[1px] w-[170px] items-center justify-center bg-primary/25 sm:w-[200px] md:mb-2 md:mt-6 md:w-[250px] md:bg-primary/50 lg:mb-3 lg:mt-10 lg:w-[320px] xl:mb-4 xl:mt-12 xl:w-[400px]">
          <span className="seperator"></span>
        </span>
        <p className="mb-2 w-[90%] text-xs font-semibold leading-[1.3] xs:w-full xs:text-sm sm:w-[500px] sm:text-base sm:font-normal md:w-[600px] md:text-lg lg:text-sm xl:w-[760px] xl:text-base">
          The restaurant is an organic space reflective of nature inspired
          cuisine. The interplay of textures and colour brings life and a
          vibrance that embraces the restaurant’s place in the dress circle.
        </p>

        <PrimaryBtn
          title="DISCOVER MORE"
          titleClassName="sm:py-4 sm:px-6 sm:text-[.75rem] md:px-[32px] md:py-4 md:text-sm xl:px-[32px] xl:py-5 xl:text-sm"
        />

        <img
          src={sliderImg1}
          className="absolute right-[-7%] top-0 z-[-1] size-[22%] lg:hidden"
        />
        <img
          src={sliderImg2}
          className="absolute left-[8%] top-[3%] z-[-1] w-[13%] max-w-[155px] lg:left-[14%] lg:top-[8%]"
        />
        <img
          src={staticImage1}
          className="absolute -right-[15%] top-[20%] z-[-3] h-[40%] w-[38%] lg:-right-[10%] lg:top-[5%] lg:h-[60%] lg:w-[34%]"
        />
        <img
          src={staticImage2}
          className="absolute -right-[17%] top-[37%] z-[-1] h-[25%] w-[30%] lg:-right-[25%] lg:top-[50%] lg:h-[40%]"
        />
        <img
          src={sliderImg2}
          className="absolute -right-[3%] top-[60%] z-[-2] h-[9%] max-h-[100px] w-[17%] max-w-[125px] rotate-180 lg:top-[85%]"
        />
        <img
          src={staticImage3}
          className="absolute -left-[15%] top-[13%] z-[-2] h-[28%] w-[30%] lg:-left-[5%] lg:w-[20%]"
        />
        <img
          src={staticImage4}
          className="absolute -left-[20%] top-[33%] z-[-1] h-[44%] w-[41%] lg:top-[45%] lg:h-[55%]"
        />
        <img
          src={sliderLogo}
          className="absolute left-[3%] top-[66%] z-[-1] w-[18%] max-w-[84px] lg:left-[15%] lg:top-[75%] lg:max-w-[110px]"
        />
        <img
          src={sliderImg1}
          className="absolute -left-[4%] top-[67%] z-[-2] h-[22%] w-[12%]"
        />
      </section>

      <div className="container">
        <section className="mt-8 grid grid-cols-1 gap-10 bg-tertiary p-14 md:mt-12 md:grid-cols-2 lg:mt-20 xl:grid-cols-4 xl:p-24">
          {servicesItemsArray.map((service) => (
            <ServicesItem key={service.id} {...service} />
          ))}
        </section>
      </div>
    </div>
  );
}

function ServicesItem({ title, img, description, href }) {
  return (
    <div className="group mx-auto flex max-w-[390px] flex-col items-center gap-3 text-center text-quaternary sm:max-w-[530px] md:max-w-none">
      <div className="flex size-[130px] items-center justify-center rounded-full border border-transparent transition-colors duration-300 group-hover:border-primary">
        <img src={img} className="size-[120px]" alt="Fresh Products" />
      </div>
      <h3 className="text-[1.2rem] text-white">{title}</h3>
      <p>{description}</p>
      <Link
        to={href}
        className="flex items-center gap-2 text-sm font-semibold text-primary"
      >
        <span className="seperator transition-all duration-300 group-hover:translate-x-3 group-hover:opacity-0"></span>
        DISCOVER MORE
        <span className="seperator transition-all duration-300 group-hover:-translate-x-3 group-hover:opacity-0"></span>
      </Link>
    </div>
  );
}

ServicesItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
