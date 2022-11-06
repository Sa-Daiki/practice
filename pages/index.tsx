import { GetServerSideProps, GetStaticProps } from "next";
import { backendApiClient } from "../ky";

const API_KEY = process.env.RESAS_API_KEY as string;

const Index = (props: any) => {
  console.log(props);
  return <div>Enter</div>;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await backendApiClient.get("prefectures", {
      headers: { "X-API-KEY": API_KEY },
    });
    const json = await data.json();
    return { props: { json } };
  } catch (_) {
    console.log(_);
    return { props: { _ } };
  }
};
