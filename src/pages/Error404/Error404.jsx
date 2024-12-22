import error404Image from '../../assets/images/Error404-4.png';
import PrimaryBtn from '../../Components/PrimaryBtn/PrimaryBtn';
// import caveat from '../../../public/fonts/caveat/caveat';

export default function Error404() {
  return (
    <>
      <div className="m-auto leading-none lg:text-[2.3rem]">
        {/* <div className="text-left">
          <p>ERROR</p>
        </div> */}

        <div className="flex items-center justify-center gap-5 text-9xl font-bold leading-none lg:-mt-6 lg:text-[400px] text-white">
          <p>4</p>
          <div className="w-24 lg:mb-5 lg:w-full">
            <img src={error404Image} alt="" className="w-full" />
          </div>
          <p>4</p>
        </div>

        <div className=" text-center">
          <h4 className="my-5 text-[1.8rem] capitalize font-caveat text-white">
            sorry we can't find that page!
          </h4>
          <p className="mx-8 leading-6 font-caveat">
            The page you are looking for was moved, removed, renamed or never
            existed.
          </p>
          <p className='font-vazir'>
            سلام چطوری
          </p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <PrimaryBtn title="BACK TO HOME" size="md" />
      </div>
    </>
  );
}
