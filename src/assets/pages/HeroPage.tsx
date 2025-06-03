import { Navbar } from "../components/NavbarComponent"
import { RoundedImage } from "../components/ImageComponent"
import { Header1, Header2, Paragraph } from "../components/TextComponent"
import { SecondaryButton } from "../components/ButtonComponents"
import { MiniCardComponent } from "../components/CardComponent"

const HeroPage = () => {
  return (
    <div className="flex-row justify-around">
      <main>
        <Navbar/>
        <Header1>Tire seu Visto conosco e não tenha nenhuma surpresa negativa!</Header1>
        <Paragraph>
          Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.
          Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.
        </Paragraph>
        <SecondaryButton>
          Saiba Mais
          <img src="/images/ArrowRight.png" alt="" />
        </SecondaryButton>
      </main>
      
      <section>
        <RoundedImage 
          src="/images/BannerHeroPage.jpg"
          alt="Banner Hero Section"
          width={300}
          height={200}
          loading="lazy"
          onClick={() => console.log('Clicou!')}
        />
      </section>
    </div>
  )
}

export default HeroPage