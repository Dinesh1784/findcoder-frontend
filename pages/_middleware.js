import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const token = window.localStorage.getItem("userToken");
//   console.log("TOKEN", token);
// }
export default function middleware(req, ev) {
  console.log("Edit and run at the edge!");
}
