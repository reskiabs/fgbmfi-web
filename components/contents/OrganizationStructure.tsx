import Image from "next/image";
import ContentTitle from "../ContentTitle";

const OrganizationStructure = () => {
  return (
    <section className="bg-white px-[31px] py-[50px] lg:px-[150px] lg:py-[100px]">
      <ContentTitle title="Struktur Organisasi FGBMFI Indonesia" removeButton />
      <p className="text-xs font-normal lg:text-xl mt-2.5 mb-5 lg:my-[30px]">
        <em> Full Gospel Business Men’s Fellowship International</em>, yang
        disingkat FGBMFI, memiliki Struktur Organisasi Tingkat Nasional dengan
        Periode 2025-2030.
      </p>
      <div className="flex items-center justify-center">
        <div className="relative border-2 flex justify-center items-center border-primary w-[339px] h-[207px] lg:border-4 lg:w-[1140px] lg:h-[695px]">
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
