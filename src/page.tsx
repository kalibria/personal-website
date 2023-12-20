import MainInfo from '../app/components/mainInfo/MainInfo';
import AsideBar from '../app/components/asideBar/AsideBar';
import Wrapper from '../app/components/Wrapper';

export default function Page() {
  return (<Wrapper>
    <AsideBar/>
    <MainInfo/>
  </Wrapper>)
}
