import { BasicButton, PrimaryButton, SecondaryIconButton } from "../components/ButtonComponents"
import { GenericContainer, ServicePackageCard } from "../components/CardComponent"
import { Header1 } from "../components/TextComponent"

const SpecialPackage = () => {
  return (
    <GenericContainer className="px-4 sm:px-8 lg:px-16 py-16">
      {/* Header */}
      <main className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <PrimaryButton>Pacotes</PrimaryButton>
          <Header1 className="mt-2">Confira nossos pacotes</Header1>
        </div>

        <div className="flex flex-row gap-4 self-end sm:self-auto">
          <BasicButton>
            <img src="/images/ArrowLeft.png" alt="Anterior" />
          </BasicButton>
          <SecondaryIconButton>
            <img src="/images/ArrowRight.png" alt="Próximo" />
          </SecondaryIconButton>
        </div>
      </main>

      {/* Cards */}
      <section className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ServicePackageCard
          imageUrl="/images/Pacote01.jpg"
          title="Passaporte"
          atendimento="On-line"
          tempo="45 dias"
          preco="890,00"
          onButtonClick={() => console.log("Contratado!")}
        />
        <ServicePackageCard
          imageUrl="/images/Pacote02.jpg"
          title="Passaporte"
          atendimento="On-line"
          tempo="45 dias"
          preco="890,00"
          onButtonClick={() => console.log("Contratado!")}
        />
        <ServicePackageCard
          imageUrl="/images/Pacote03.jpg"
          title="Passaporte"
          atendimento="On-line"
          tempo="45 dias"
          preco="890,00"
          onButtonClick={() => console.log("Contratado!")}
        />
      </section>
    </GenericContainer>
  )
}

export default SpecialPackage
