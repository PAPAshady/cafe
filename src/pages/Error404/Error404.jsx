import error404Image from '../../assets/images/Error404-4.png';
import PrimaryBtn from '../../Components/PrimaryBtn/PrimaryBtn';

export default function Error404() {
  return (
    <>
      <div className="m-auto leading-none lg:text-[2.3rem] container">
        <div className="flex items-center justify-center gap-5 text-9xl font-bold leading-none text-white sm:text-[10rem] lg:-mt-6 lg:text-[270px]">
          <p>4</p>
          <div className="w-24 pt-3 sm:w-28 lg:mb-5 lg:w-44 lg:pt-16">
            <img src={error404Image} alt="404" className="w-full" />
          </div>
          <p>4</p>
        </div>

        <div className="text-center">
          <h4 className="my-5 font-caveat text-[1.8rem] capitalize leading-[1.4] text-white sm:my-10 sm:text-4xl">
            sorry we can't find that page!
          </h4>
          <p className="font-caveat mx-8 leading-6 sm:text-lg">
            The page you are looking for was moved, removed, renamed or never
            existed.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <PrimaryBtn title="BACK TO HOME" size="md" href="/" />
      </div>
    </>
  );
}
