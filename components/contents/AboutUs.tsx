import ContentTitle from "../ContentTitle";
import Container from "./Container";

const AboutUs = () => {
  return (
    <Container>
      <section className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
        <div className="mb-5">
          <ContentTitle title="Tentang FGBMFI Indonesia" removeButton />
        </div>
        <p className="text-sm font-normal md:text-[17px] lg:text-xl text-justify">
          Perkumpulan Usahawan Injil Sepenuhnya International yang disingkat
          dengan PUISI atau dalam Bahasa Inggrisnya
          <em> Full Gospel Business Men’s Fellowship International</em>, yang
          disingkat &quot;FGBMFI&quot; selanjutnya disebut FGBMFI Indonesia
          yaitu perkumpulan para pria dari berbagai macam profesi yang mandiri,
          dan bukan organisasi gereja, bersifat interdenominasi dan tidak
          berafiliasi dengan partai politik apapun, tujuan organisasi ini yaitu
          kegerakan anggota dalam menjangkau jiwa-jiwa baru di dunia usaha (
          <em>market place</em>) melengkapi anggota dalam rohani, nilai etika,
          gaya hidup di keluarga, dunia kerja dan masyarakat umum untuk terus
          bermultiplikasi melaksanakan Amanat Agung. FGBMFI Indonesia merupakan
          organisasi kemasyarakatan Kristiani yang berbadan hukum dan terdaftar
          di Dirjen Bimbingan Masyarakatan Kristen
        </p>
      </section>
    </Container>
  );
};

export default AboutUs;
