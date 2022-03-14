import Layout from "../../components/Layout";

export default function ProjectDetail({ data }) {
  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();

  return {
    paths: data.map((data) => ({
      params: {
        id: data.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const resp = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  return {
    props: {
      data: await resp.json(),
    },
    revalidate: 30,
  };
}
