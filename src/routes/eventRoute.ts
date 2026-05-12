import {
    getEvents,
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent,
} from "../controllers/eventController";
import express from "express";

const router = express.Router();

router.get("/", getEvents); //menyimpan data event
router.post("/", createEvent); //mengambil data berdasarkan id
router.get("/:id", getEventById); //mengupdate data event berdasarkan id
router.put("/:id", updateEvent); //menghapus data event berdasarkan id
router.delete("/:id", deleteEvent); //menampilkan data event

export default router;