import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { ResponseStatusCode } from "@/enums/enums";
import { handleChangeHistoriesData, handleChangeProductData } from "@/utils/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log('request', request.headers)
  try {
    const res = await axios.get(`${ROOT_API}/${routes.histories}`, {
      headers: {
        Authorization: request.headers.get('Authorization'),
      }
    });
    if (res.status === ResponseStatusCode.OK) {
      const formattedData = handleChangeHistoriesData(res.data);
      return NextResponse.json(formattedData);
    }
  } catch (err) {
    // console.log('err', err)
  }
}