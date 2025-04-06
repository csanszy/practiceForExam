const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAlltodo = async (req, res) => {
    try {
      const lekeres = await prisma.todo.findMany({
        include: {
            user_todo_userTouser: true,
        },
      });
      res.json(lekeres);
    } catch {
      res.json("szar vagy");
    }
  };
  

const postTodo = async (req, res) => {
  console.log(req.body);
    try {
        const data = await prisma.todo.create({ data: req.body });
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "SZAR VAGY" });
    }
}
    //#################################################################
    /*
    {
        "title": "Egyszerűsített Todo",
        "task": "Backend kész",
        "user": 2
    }
    */
    //#################################################################


    /*try {
        const data = await prisma.todo.create({
            data: {
                title: 'New Todo',
                task: 'szopd ki',
                user: 2,
              },
        });
      } catch(err) {
        console.log(err);
      res.json("szar vagy");
      }*/


const updateTodo =  async (req, res) => {
    /*try {
        const updateTask = await prisma.todo.update({
            where: {
                id: parseInt(req.params.id),
              },
              data: {
                task: 'kisfasz',
              },
        });
        res.json(updateTask);
    } catch (error) {
        console.log(error);
    }*/

    try {
        const { id } = req.params;
        const updateTask = await prisma.todo.update({
            where: {
                id: parseInt(id),
              },
              data: {
                title: req.body.title,
                task: req.body.task,
              },
        });
        res.json(updateTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hiba történt a frissítés során." });
        
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTask = await prisma.todo.delete({
            where: {
                id: parseInt(id),
            }
        });
        res.json(deleteTask);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Hiba történt a törlés során." });
        
    }
}

  module.exports = {
    getAlltodo,
    postTodo,
    updateTodo,
    deleteTodo,
  };

