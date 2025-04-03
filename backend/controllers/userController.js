const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAlluser = async (req, res) => {
    try {
      const lekeres = await prisma.user.findMany();
      res.json(lekeres);
    } catch {
      res.json("hiba");
    }
  };
  
  module.exports = {
    getAlluser,
  };