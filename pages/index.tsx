import ky from "ky";
import { GetStaticProps } from "next";
import { backendApiClient } from "../ky";

const Index = (props: any) => {
  console.log(props);
  return <div>Enter</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await backendApiClient.get("prefectures", {
      headers: { "X-API-KEY": "3xmEgnI70VZjD2Mdv72wTOA3UElpQcPEpBjh93Xp" },
    });
    return { props: { data } };
  } catch (_) {
    console.log(_);

    return { notFound: true };
  }
};

export default Index;
