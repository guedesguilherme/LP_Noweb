import { GenericContainer } from '../components/CardComponent'
import { Header1 } from '../components/TextComponent'

const ClaimPage = () => {
  return (
    <GenericContainer className='py-16 px-17 bg-lightYellow'>
      <div className="flex flex-col gap-2">
        <Header1 className="text-left uppercase">Consultoria completa para tirar seu visto</Header1> 
        <Header1 className="text-right italic uppercase">você está em boas mãos!</Header1>
      </div>
    </GenericContainer>
  );
};


export default ClaimPage