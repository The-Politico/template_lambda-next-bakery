import Link from 'next/link';

import Header from 'Components/header';

export const config = { amp: true };

const AmpPage = (props) => {
  const { slug, appRoot, pages } = props.query;
  const pageData = pages.find(p => p.slug === slug);
  return (
    <div>
      <Header />
      <h1>{pageData.title} for amp</h1>
      <ul>
        <li>
          <a href={'./../'}>Main page</a>
        </li>
        <li>
          <Link href={appRoot}>
            <a>Back to home!</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

// This is necessary, because the router query will be an empty
// object on an AMP page due to static optimization.
// See NOTE #2: https://nextjs.org/docs#dynamic-routing
AmpPage.getInitialProps = async function({ query }) {
  return { query };
};
export default AmpPage;
