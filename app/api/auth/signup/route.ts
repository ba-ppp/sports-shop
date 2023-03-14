import { ResponseStatusCode } from "@/app/enums/enums";
import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  
  try {
    const res = await axios.post(`${ROOT_API}/${routes.register}`, {
      email,
      password,
    });
    if (res.status === ResponseStatusCode.OK) {
      return NextResponse.json({
        access_token: res.data.access_token,
        refresh_token: res.data.refresh_token,
      })
    }
  } catch (err) {
    console.log(err);
  }
  // console.log(response.status)
}
