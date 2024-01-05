import Wrapper from './components/Wrapper';
import { Locale } from '../../i18n.config';
import {getDictionary} from './dictionaries';
import { redirect } from 'next/navigation'

const Home = async ({
  params: { lang }
} : {
  params : {lang: Locale}
}) => {
  const {page} = await getDictionary(lang);
  redirect('/resume');
    return (
  <Wrapper>
    <div></div>
    </Wrapper>
    )
}


export default Home;
