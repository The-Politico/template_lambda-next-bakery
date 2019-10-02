import Link from 'next/link';

import Header from 'Components/header';

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
      <Header />
      <h1>Home page</h1>
      <ul>{Pages}</ul>
    </div>
  );
};

Home.getInitialProps = async function({ query }) {
  return { query };
};

export default Home;
