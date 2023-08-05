import { prisma } from '../../../lib/prisma';

export async function POST(req: Request){

    const body = await req.json();

    if(body === null){
        return {
            status: 400,
            body: 'No body provided'
        }
    }

    const { name, email, password } = body;

    const user = await prisma.users.create({
        data: {
            name,
            email,
            password
        }
    });
    return {
        status: 200,
        body: user
    }
}