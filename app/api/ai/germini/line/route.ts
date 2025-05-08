export async function GET() {
    return new Response('<h1>Hello</h1>',{
        status : 200,
    });
}

export async function POST(request : Request){
    return new Response('hello',{
        status : 200,
    });
}