import Link from 'next/link';

import { Navigation, Header } from '@politico/interactive-style-sketch';
import PageList from 'Components/pageList';

import 'politico-style/scss/base/main.scss';

const Home = (props) => {
  const { appRoot, pages } = props.query;
  const Pages = pages.map(page => (
    <li>
      <Link href={`${appRoot || '/'}${page.slug}/`}>
        <a>{page.title}</a>
      </Link>
    </li>
  ));
  return (
    <div>
      <Navigation appName='Next.js app' />
      <Header
        title='Home'
        subhed='Interactive News'
      />
      <PageList>{Pages}</PageList>
    </div>
  );
};

Home.getInitialProps = async function({ query }) {
  return { query };
};

export default Home;
