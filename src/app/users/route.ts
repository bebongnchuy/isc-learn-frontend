export const users = [
    {
        id: 1,
        name: 'Yannick'
    },
    {
        id: 2,
        name: 'Hugo'
    }
];

export async function GET() {
    return Response.json(users);
    // return new Response(JSON.stringify(users));
}

export async function POST(request: Request) {
    const body = await request.json();
    return Response.json(body);
}