import { useRouter } from 'next/router';
import Link from 'next/link';
import Pages from 'DATA';
import Bacon from 'Content/bacon.md';

import Header from 'Components/header';

const Page = (props) => {
  const router = useRouter();
  const { slug, appRoot } = router.query;
  const pageData = Pages.find(p => p.slug === slug);
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
      <Bacon />
    </div>
  );
};

Page.getInitialProps = async function({ query }) {
  const { appRoot } = query;
  return { appRoot, query };
};

export default Page;
