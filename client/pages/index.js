import { useRouter } from 'next/router';
import Link from 'next/link';
import Pages from 'DATA';

import Header from 'Components/header';

const Home = (props) => {
  const router = useRouter();
  const { appRoot } = router.query;
  const pages = Pages.map(page => (
    <li>
      <Link href={`${appRoot || '/'}${page.slug}/`}>
        <a>{page.title}</a>
      </Link>
    </li>
  ));
  return (
    <div>
      <Header />
      <h1>Home page</h1>
      <ul>{pages}</ul>
    </div>
  );
};

Home.getInitialProps = async function({ query }) {
  const { appRoot } = query;
  return { appRoot };
};

export default Home;
