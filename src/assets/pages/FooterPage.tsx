import { Header1, Paragraph, SemiBoldParagraph } from "../components/TextComponent";
import { BasicButton, SecondaryButton } from "../components/ButtonComponents";
import { GenericContainer } from "../components/CardComponent";

const FooterPage = () => {
  return (
    <GenericContainer className="flex flex-col px-4 sm:px-8 lg:px-16 py-12">
      {/* Wrapper responsivo */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Coluna da esquerda */}
        <main className="w-full md:w-1/2 flex flex-col items-start gap-6">
          <Header1>Está com alguma dúvida?</Header1>

          <Paragraph>
            Entre em contato através do nosso canal direto ao cliente através do botão abaixo
          </Paragraph>

          <SecondaryButton className="mt-4">
            Central de Atendimento
          </SecondaryButton>

          <SemiBoldParagraph className="mt-8">Siga em nossas redes:</SemiBoldParagraph>

          <div className="flex flex-wrap gap-4">
            <BasicButton>Instagram</BasicButton>
            <BasicButton>Facebook</BasicButton>
            <BasicButton>Youtube</BasicButton>
            <BasicButton>LinkedIn</BasicButton>
          </div>
        </main>

        {/* Coluna da direita */}
        <section className="w-full md:w-1/2">
          <div className="flex items-center pb-4 border-b border-primaryBlack">
            <h2 className="text-2xl font-bold mr-4">Receba novidades</h2>
            <img 
              src="/images/ArrowRight.png" 
              alt="Seta apontando para novidades" 
              className="transform rotate-45 w-6 h-6"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div>
              <SemiBoldParagraph className="text-primaryBlack">Empresa</SemiBoldParagraph>
              <div className="mt-4 space-y-2">
                <Paragraph>Home</Paragraph>
                <Paragraph>Quem somos</Paragraph>
                <Paragraph>Serviços</Paragraph>
                <Paragraph>Contato</Paragraph>
              </div>
            </div>

            <div>
              <SemiBoldParagraph className="text-primaryBlack">Novidades</SemiBoldParagraph>
              <div className="mt-4 space-y-2">
                <Paragraph>Passaporte</Paragraph>
                <Paragraph>Visto</Paragraph>
                <Paragraph>Entrevista</Paragraph>
                <Paragraph>Polícia Federal</Paragraph>
              </div>
            </div>

            <div>
              <SemiBoldParagraph className="text-primaryBlack">Suporte</SemiBoldParagraph>
              <div className="mt-4 space-y-2">
                <Paragraph>FAQ</Paragraph>
                <Paragraph>Contato</Paragraph>
                <Paragraph>Dúvidas</Paragraph>
                <Paragraph>Frequentes</Paragraph>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 py-6 text-center">
        <Paragraph>© 2025 Tirar Visto - Todos os Direitos Reservados. Feito por Guilherme Guedes</Paragraph>
      </footer>
    </GenericContainer>
  );
};

export default FooterPage;
