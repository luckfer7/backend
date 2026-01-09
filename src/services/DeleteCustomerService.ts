import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {
    async execute({ id}: DeleteCustomerProps) {
        if (!id) {
            throw new Error("Solicitação invalida. O ID do cliente é obrigatório");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("O cliente solicitado não foi encontrado");
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Cliente foi deletado com sucesso."};
    }
}

export { DeleteCustomerService };