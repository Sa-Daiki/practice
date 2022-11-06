import { GetServerSideProps, GetStaticProps } from "next";
import { backendApiClient, frontendApiClient } from "../ky";

const API_KEY = process.env.RESAS_API_KEY as string;

const Index = (props: any) => {
  console.log(props);

  const onClick = async () => {
    const response = await frontendApiClient.get("hello");
    const json = await response.json();
    console.log(json);
  };

  return <button onClick={onClick}>button</button>;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  // try {
  //   const data = await backendApiClient.get("prefectures", {
  //     headers: { "X-API-KEY": API_KEY },
  //   });
  //   const json = await data.json();
  //   return { props: { json } };
  // } catch (_) {
  //   console.log(_);
  //   return { props: { _ } };
  // }
  const props = { api: "a", abi: process.env.RESAS_API_KEY };
  return { props: { props } };
};
