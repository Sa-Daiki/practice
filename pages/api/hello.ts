// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { backendApiClient } from "../../ky";

type Data = {
  name: string;
};

const API_KEY = process.env.RESAS_API_KEY as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await backendApiClient.get("prefectures", {
      headers: { "X-API-KEY": API_KEY },
      
    });
    const json: any = await response.json();
    res.status(200).json(json);
  } catch (error) {
    res.status(500).end();
  }
}
