import Link from 'next/link';
import Bacon from 'Content/bacon.md';
import { Navigation, Header } from '@politico/interactive-style-sketch';
import PageList from 'Components/pageList';
import Counter from 'Components/counter';

import 'politico-style/scss/base/main.scss';

const Page = (props) => {
  const { slug, appRoot, pages } = props.query;
  const pageData = pages.find(p => p.slug === slug);
  if (!pageData) return null;
  return (
    <div>
      <Navigation appName={pageData.title} />
      <Header
        title={pageData.title}
        subhed='Interactive News'
      />
      <PageList>
        <li>
          <Link href={appRoot}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <a href='./amp/'>Amp page</a>
        </li>
      </PageList>
      <section>
        <Counter />
        <Bacon />
      </section>
    </div>
  );
};

Page.getInitialProps = async function({ query }) {
  return { query };
};

export default Page;
