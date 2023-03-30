import { ROOT_API } from "@/constant/env";
import { routes } from "@/constant/routes";
import { ResponseStatusCode } from "@/enums/enums";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { id }: { id: string }
) {
    try {
      const res = await axios.put(
        `${ROOT_API}/${routes.categories}/${id}`,
        request.body
      );
      if (res.status === ResponseStatusCode.OK) {
        return NextResponse.json(res.data);
      }
    } catch (err) {
      return NextResponse.error();
    }
}
