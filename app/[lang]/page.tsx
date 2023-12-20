import Resume from './resume/page';
import Wrapper from './components/Wrapper';
import { Locale } from '../../i18n.config';
import { getDictionary } from  './lib/dictionary'


const Home = async ({
  params: { lang }
} : {
  params : {lang: Locale}
}) => {
  const {page} = await getDictionary(lang)
    return (
  <Wrapper>
        <Resume page={page}/>
    </Wrapper>
    )
}


export default Home;
