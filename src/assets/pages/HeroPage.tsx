import { Navbar } from "../components/NavbarComponent"
import { Header1, InfosComponent, Paragraph } from "../components/TextComponent"
import { SecondaryButton } from "../components/ButtonComponents"
import { GenericContainer, MiniCardComponent, BannerCard } from "../components/CardComponent"

const HeroPage = () => {
  return (
    <div className="relative">
      <Navbar className="max-w-1/2"/>
      
      <GenericContainer className="flex flex-col lg:flex-row mt-4 pt-16 lg:pt-0">
        {/* Seção de Conteúdo Principal */}
        <main className="w-full lg:w-1/2 flex flex-col px-4 sm:px-8 lg:px-12">
          <Header1 className="text-3xl sm:text-4xl lg:text-5xl">
            Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
          </Header1>
          
          {/* Container com texto e mini card */}
          <div className="flex flex-col lg:flex-row gap-6 mt-8 sm:mt-10 pt-8 border-t border-primaryGray">
            <div className="flex-1">
              <Paragraph className="text-base sm:text-lg">
                Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.
                Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.
              </Paragraph>
              <SecondaryButton className="mt-4 sm:mt-6">
                Saiba Mais
                <img src="/images/ArrowRight.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              </SecondaryButton>
            </div>

            <div className="flex-1">
              <MiniCardComponent/>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <InfosComponent 
              children="598"
              children2="Vistos Tirados"
              className="border-r border-primaryGray pr-4 sm:pr-5"
            />
            <InfosComponent 
              children="789"
              children2="Passaportes Tirados"
              className="border-r border-primaryGray pr-4 sm:pr-5"
            />
            <InfosComponent 
              children="634"
              children2="Familias Felizes"
            />
          </div>
        </main>

        {/* Seção do Banner */}
        <section className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0">
          <BannerCard
            imageUrl="/images/BannerHeroPage.jpg"
            buttonText="Tirar meu visto agora!"
            onButtonClick={() => console.log('Botão clicado!')}
            title="Realize o seu sonho com a ajuda da Tirar Visto!"
            description="Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado."
            className="w-full max-w-lg lg:max-w-130"
          />
        </section>
      </GenericContainer>
    </div>
  )
}

export default HeroPage