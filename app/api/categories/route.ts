import { ResponseStatusCode } from "@/enums/enums";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { handleChangeTableData } from "@/utils/utils";

export async function GET() {
  try {
    const res = await axios.get(`${ROOT_API}/${routes.categories}`);
    if (res.status === ResponseStatusCode.OK) {
      const formattedData = handleChangeTableData(res.data);
      return NextResponse.json(formattedData);
    }
  } catch (err) {
    return NextResponse.error();
  }
}




