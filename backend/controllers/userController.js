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
 
 /* const postUser = async (req, res) => {
    try {
      const { name, birthdate } = req.body;
  
      // Check if birthdate is a valid date
      const validBirthdate = new Date(birthdate);
      if (isNaN(validBirthdate.getTime())) {
        return res.status(400).json({ error: "Invalid date format" });
      }
  
      const newUser = await prisma.user.create({
        data: {
          name,
          birthdate: validBirthdate,
        }
      });
  
      res.json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Hiba történt a felhasználó létrehozásakor." });
    }
  }*/
 
const postUser = async (req, res) => {
    try {
      const { name, birthdate } = req.body;
      const newUser = await prisma.user.create({
        data: {
          name,
          birthdate: new Date(birthdate),
        }
      });
      res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hiba történt a felhasználó létrehozásakor." });
      
    }
}


const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: req.body.name,
        birthdate: req.body.birthdate ? new Date(req.body.birthdate) : undefined, //csak dátumnál van ez
      },
    });
    res.json(updateUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hiba történt a felhasználó frissítésekor." });
  }
}


const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await prisma.user.delete({
      where: {
        id: parseInt(id),
      }
    });
    res.json(deleteUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hiba történt a felhasználó törlésekor." });
    
  }
}
  
  module.exports = {
    getAlluser,
    postUser,
    putUser,
    deleteUser,
  };