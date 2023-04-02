import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { ResponseStatusCode } from "@/enums/enums";
import { handleChangeProductData } from "@/utils/utils";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axios.get(`${ROOT_API}/${routes.products}`);
    if (res.status === ResponseStatusCode.OK) {
      const formattedData = handleChangeProductData(res.data);
      console.log('formattedData', formattedData)
      return NextResponse.json(formattedData);
    }
  } catch (err) {
    return NextResponse.error();
  }
}