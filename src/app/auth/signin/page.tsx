// TODO: Fix Me

// import {
//   Card,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import Image from "next/image"
// import { FcGoogle } from "react-icons/fc"
// // import { cookies } from "next/headers";

// import { Button } from "@/components/ui/button"

// export default async function SignInPage() {
//   // const csrfToken = cookies().get("authjs.csrf-token")?.value ?? "何もなし";

//   return (
//     <div className="flex flex-col gap-2 h-screen">
//       <div className="mt-22vh" />
//         <form action="/api/auth/signin" method="post">
//           {/* <input type="hidden" name="csrfToken" value={csrfToken} /> */}
//           <div className="flex justify-center items-center">
//             <Card className="w-350px">
//               <div className="flex justify-center">
//                 <CardHeader className="space-y-6">
//                   <CardTitle>ログイン</CardTitle>
//                   <Image src="/login.png" alt="login" width={100} height={100} />
//                 </CardHeader>
//               </div>
//               <CardFooter className="flex justify-center">
//                 <Button variant="outline">
//                   <FcGoogle className="mr-2"/>
//                   Googleでログイン
//                 </Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </form>
//     </div>
//   )
// }
