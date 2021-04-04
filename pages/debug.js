import { fetchEntries } from '../src/utils/contentfulDebug'
import Entry from '../src/components/entry';

export default function Test({entries}) {
return (
  <div>
    {entries.map((p) => {
      return <Entry title={p.path} />
    })}
  </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const entries = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      entries,
    },
  }
}