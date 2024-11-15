import { Request, Response } from "express";
import Task from "../models/taskModel";

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch(error) {
        res.status(500).json({ error: "Error fethcing tasks" });
    }
};

export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({ title, description });
        await newTask.save();
        res.status(201).json(newTask);
    } catch(error) {
        res.status(500).json({ error: "Error creating Task" });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );
        res.status(200).json(updateTask);
    } catch(error) {
        res.status(500).json({ error: "Error updating Task" });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Task deleted'});
    } catch(error) {
        res.status(500).json({ error: "Error deleting Task" });
    }
}