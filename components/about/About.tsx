import Image from "next/image";
import { LuSprout } from "react-icons/lu";
import { TbLeaf2 } from "react-icons/tb";
import { IoEarthOutline } from "react-icons/io5";
import { FaHandHoldingHand } from "react-icons/fa6";
import { GiLeafSwirl } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";


const About = () => {
  return (
    <>
      <section className="aboutUs w-full px-4 py-24">
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div className="relative flex-1 aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/venoki-goteborg-2.jpg"
              alt="venoki-goteborg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <div className="flex gap-2.5">
              <LuSprout className="text-[#49af45] text-2xl" />
              <span className="font-semibold text-[18px]">
                About Green Forest
              </span>
            </div>
            <h2 className="text-3xl text-black font-bold mb-7 mt-2.5">
              Environmental Sustainable Forever Green Forest
            </h2>
            <div className="single-about-box flex gap-6 mb-8">
              <div className="about-box-icon">
                <TbLeaf2 className="text-[#49af45] text-[50px]  rounded-full border-2 p-1" />
              </div>
              <div className="about-box-content">
                <h4 className="text-2xl font-semibold text-black mb-3.5">
                  Economic Benifits
                </h4>
                <p className="">
                  Alternative innovation after ethical to network environmental
                  whiteboard transparent growth natural done
                </p>
              </div>
            </div>
            <div className="single-about-box flex gap-6">
              <div className="about-box-icon">
                <IoEarthOutline className="text-[#49af45] text-[50px]" />
              </div>
              <div className="about-box-content">
                <h4 className="text-2xl font-semibold text-black mb-3.5">
                  Safe Environment
                </h4>
                <p className="">
                  Alternative innovation after ethical to network environmental
                  whiteboard transparent growth natural done
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature w-full px-4 py-24">
        <div className="container m-auto flex justify-center md:justify-between items-center flex-col md:flex-row gap-12">
            <div className="feature-single-block w-80 flex flex-col items-center gap-4">
                <div className="feature-icon">
                    <FaHandHoldingHand className="text-[#49af45] text-[80px]"/>
                </div>
                <h3 className="text-[22px] font-semibold">Handcrafted</h3>
                <p className="text-[17px] text-center">Each broom is carefully tied by hand.</p>
            </div>
            <div className="feature-single-block w-80 flex flex-col items-center gap-4">
                <div className="feature-icon">
                    <GiLeafSwirl className="text-[#49af45] text-[80px]"/>
                </div>
                <h3 className="text-[22px] font-semibold">Forest freshness</h3>
                <p className="text-[17px] text-center">Natural oak aroma preserved in every broom.</p>
            </div>
            <div className="feature-single-block w-80 flex flex-col items-center gap-4">
                <div className="feature-icon">
                    <CiDeliveryTruck className="text-[#49af45] text-[80px]"/>
                </div>
                <h3 className="text-[22px] font-semibold">Easy delivery</h3>
                <p className="text-[17px] text-center">Fast and convenient delivery to your door.</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
