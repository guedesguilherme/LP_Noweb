import { PrimaryButton } from "../components/ButtonComponents"
import { GenericContainer } from "../components/CardComponent"
import { RoundedImage } from "../components/ImageComponent"
import { Header1, Paragraph, InfosComponent, InfosComponentWhyCUS } from "../components/TextComponent"

const WhyChoseUs = () => {
  return (
    <GenericContainer className="py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16">
      {/* Seção Principal */}
      <main className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-18 justify-center items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6">
          <PrimaryButton className="self-start text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
            Veja como funciona
          </PrimaryButton>
          <Header1 className="text-3xl sm:text-4xl md:text-5xl">
            Sua tranquilidade não tem preço!
          </Header1>
        </div>
        
        <div className="w-full lg:w-1/2">
          <Paragraph className="text-base md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged.
          </Paragraph>
        </div>
      </main>

      {/* Seção de Imagem e Informações */}
      <section className="flex flex-col lg:flex-row gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20">
        <div className="w-full lg:w-2/3">
          <RoundedImage 
            src="public/images/BannerWhyChoseUsPage.jpg"
            alt="Por que escolher nossa empresa"
            className="w-full h-auto aspect-video md:aspect-[3/2]"
          />
        </div>
        
        <div className="w-full lg:w-1/3 flex flex-col gap-6 md:gap-8 mt-0 lg:mt-10">
          <InfosComponentWhyCUS 
            children="Etapa Inicial"
            children2="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            className="border-b border-primaryGray pb-6"
          />
          <InfosComponentWhyCUS 
            children="Processo de Entrevista"
            children2="+ Leia Mais"
            className="border-b border-primaryGray pb-6"
          />
          <InfosComponentWhyCUS 
            children="Entrega de Documentos"
            children2="+ Leia Mais"
          />
        </div>
      </section>
    </GenericContainer>
  )
}

export default WhyChoseUs 