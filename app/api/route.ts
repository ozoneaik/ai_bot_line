import { logLocal } from "@/utils/Logger";

export async function GET(){
    logLocal({message : 'hello'});
    return Response.json({message : 'GET request received at /api/route'},{status : 400});
}