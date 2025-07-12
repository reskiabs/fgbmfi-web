import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>FGBMFI Indonesia</title>
        <meta name="description" content="Landing Page FGBMFI" />
      </Head>

      <main className="text-center px-6 py-10 md:py-20 bg-[#f0fdfd]">
        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">
          Menjangkau Dunia Usaha <br className="hidden md:block" /> dengan Injil
          Kristus
        </h1>
        <p className="text-md md:text-lg text-teal-700">
          Full Gospel Business Men’s International - Indonesia
        </p>
        <div className="mt-6">
          <button className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition">
            Gabung Sekarang
          </button>
        </div>

        {/* Carousel */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/Banner.png" // Ganti ke gambar yang sesuai
              alt="Event"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Section: Tentang */}
        <section className="mt-16 text-left max-w-5xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-teal-800 mb-4">
            Tentang FGBMFI Indonesia
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Perkumpulan Usahawan Injil Sepenuhnya International yang disingkat
            dengan PUISI atau dalam Bahasa Inggrisnya
            <em> Full Gospel Business Men’s Fellowship International</em>, yang
            disingkat FGBMFI, selanjutnya disebut FGBMFI Indonesia yaitu
            perkumpulan para pria dari berbagai macam profesi yang mandiri, dan
            bukan organisasi gereja, bersifat interdenominasi dan tidak
            berafiliasi dengan partai politik apapun, tujuan organisasi ini
            yaitu keorganisasian anggota dalam menjangkau jiwa-jiwa baru di
            dunia usaha (<em>market place</em>) melengkapi anggota dalam rohani,
            nilai etika, gaya hidup di keluarga, dunia kerja dan masyarakat umum
            untuk terus bermultiplikasi melaksanakan Amanat Agung.
          </p>
        </section>
      </main>
    </>
  );
}
