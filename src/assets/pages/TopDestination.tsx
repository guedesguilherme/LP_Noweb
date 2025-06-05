import { PrimaryButton, SecondaryButton } from "../components/ButtonComponents"
import { GenericContainer } from "../components/CardComponent"
import { RoundedImageCardWithButton } from "../components/ImageComponent"
import { Header1, Paragraph } from "../components/TextComponent"

const TopDestination = () => {
  return (
    <GenericContainer className="px-4 sm:px-10 lg:px-20 py-24 lg:py-48">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <PrimaryButton>Top Destinos</PrimaryButton>
        <Header1 className="mt-2">Destinos Mais Procurados</Header1>
        <Paragraph className="max-w-2xl">
          Confira os destinos mais procurados por nossos clientes nos últimos meses, qual seria o seu novo destino?
        </Paragraph>
        <SecondaryButton className="mt-8">Saiba Mais</SecondaryButton>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:justify-center lg:gap-6">
        {/* Coluna 1 */}
        <div className="flex flex-col gap-6 items-center">
          <RoundedImageCardWithButton
            imageUrl="/images/Bali.jpg"
            buttonText="Bali, Indonesia"
            onButtonClick={() => console.log('Botão clicado!')}
            className="w-60 h-48"
          />
          <RoundedImageCardWithButton
            imageUrl="/images/Paris.jpg"
            buttonText="Paris, França"
            onButtonClick={() => console.log('Botão clicado!')}
            className="w-60 h-48"
          />
        </div>

        {/* Coluna 2 (central) */}
        <div className="flex flex-col gap-6 items-center lg:mt-[-20px]">
          <RoundedImageCardWithButton
            imageUrl="/images/NewYork.jpg"
            buttonText="Nova York, Estados Unidos"
            onButtonClick={() => console.log('Botão clicado!')}
            className="w-72 h-56"
          />
          <RoundedImageCardWithButton
            imageUrl="/images/Cabo.jpg"
            buttonText="Cidade do Cabo, África do Sul"
            onButtonClick={() => console.log('Botão clicado!')}
            className="w-72 h-56"
          />
        </div>

        {/* Coluna 3 */}
        <div className="flex flex-col gap-6 items-center">
          <RoundedImageCardWithButton
            imageUrl="/images/Santorini.jpg"
            buttonText="Santorini, Grécia"
            onButtonClick={() => console.log('Botão clicado!')}
            className="w-60 h-48"
          />
          <RoundedImageCardWithButton
            imageUrl="/images/Mumbai.jpg"
            buttonText="Mumbai, Índia"
            onButtonClick={() => console.log('Botão clicado!')}
            className="w-60 h-48"
          />
        </div>
      </div>
    </GenericContainer>
  )
}

export default TopDestination
