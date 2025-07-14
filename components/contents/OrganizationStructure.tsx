import Image from "next/image";
import ContentTitle from "../ContentTitle";

const OrganizationStructure = () => {
  return (
    <section className="bg-white px-[31px] py-[50px] lg:px-[150px] lg:py-[100px]">
      <div className="lg:max-w-[1165px] lg:mx-auto">
        <ContentTitle
          title="Struktur Organisasi FGBMFI Indonesia"
          removeButton
        />
        <p className="text-xs font-normal md:text-xl mt-2.5 mb-5 md:my-[30px] text-justify">
          <em> Full Gospel Business Men’s Fellowship International</em>, yang
          disingkat FGBMFI, memiliki Struktur Organisasi Tingkat Nasional dengan
          Periode 2025-2030.
        </p>

        <div className="relative border-2 flex justify-center items-center border-primary w-[339px] h-[207px] lg:border-4 md:w-[920px] md:h-[610px] lg:w-[1140px] lg:h-[695px]">
          <Image
            src="/images/organization.png"
            alt="Organization Structure"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;
