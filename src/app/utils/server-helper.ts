import prisma from "./connect"

export const connectToDatabase = async () => {
try {
    await prisma.$connect()
    console.log("Connected to database")
} catch (error) {
    console.log(error)
    throw new Error("Failed to connect to database")
}
}