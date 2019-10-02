import Link from 'next/link';
import Bacon from 'Content/bacon.md';

import Header from 'Components/header';
import Counter from 'Components/counter';

const Page = (props) => {
  const { slug, appRoot, pages } = props.query;
  const pageData = pages.find(p => p.slug === slug);
  if (!pageData) return null;
  return (
    <div>
      <Header />
      <h1>{pageData.title}</h1>
      <ul>
        <li>
          <a href='./amp/'>Amp page</a>
        </li>
        <li>
          <Link href={appRoot}>
            <a>Back to home!</a>
          </Link>
        </li>
      </ul>
      <Counter />
      <Bacon />
    </div>
  );
};

Page.getInitialProps = async function({ query }) {
  const { appRoot } = query;
  return { appRoot, query };
};

export default Page;
