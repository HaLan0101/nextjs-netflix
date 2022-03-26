import '../styles/styles.scss';
import MainLayout from '../layout/MainLayout';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell,faSearch,faPlay, faInfo,faChevronLeft,faChevronRight,faCirclePlus,faThumbsUp} from "@fortawesome/free-solid-svg-icons";
library.add(faBell,faSearch,faPlay,faInfo,faChevronLeft,faChevronRight,faCirclePlus,faThumbsUp);
function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
