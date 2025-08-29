"use client";

import useOrganisation from "@/hooks/useOrganisation";
import Image from "next/image";
import ContentTitle from "../ContentTitle";

const OrganizationStructure = () => {
  const { organisation, loading, error } = useOrganisation();

  return (
    <section className="bg-white px-[31px] py-[50px] lg:px-[150px] lg:py-[100px]">
      <div className="lg:max-w-[1165px] lg:mx-auto">
        <ContentTitle
          title="Struktur Organisasi FGBMFI Indonesia"
          removeButton
        />
        <p className="text-sm font-normal md:text-xl mt-2.5 mb-5 md:my-[30px] text-justify">
          <em> Full Gospel Business Men’s Fellowship International</em>, yang
          disingkat FGBMFI, memiliki Struktur Organisasi Tingkat Nasional dengan
          Periode 2025-2030.
        </p>

        {loading && <p>Memuat struktur organisasi...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && organisation.length > 0 && (
          <div className="relative border-2 border-primary w-[339px] lg:border-4 md:w-[920px] lg:w-[1140px] py-[20px] lg:py-[40px]">
            <Image
              src={organisation[0].full_image_url}
              alt="Organization Structure"
              width={1140}
              height={0}
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default OrganizationStructure;
