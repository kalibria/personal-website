import Page from 'app/[lang]/resume/page';
import Wrapper from './components/Wrapper';
import { Locale } from '../../i18n.config';
import {getDictionary} from './dictionaries'

const Home = async ({
  params: { lang }
} : {
  params : {lang: Locale}
}) => {
  const {page} = await getDictionary(lang)
    return (
  <Wrapper>
        hey111
    </Wrapper>
    )
}


export default Home;
