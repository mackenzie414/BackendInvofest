import {Request, Response} from 'express';
import {Category} from '../types/category';

let Categories: Category[] = [];

//1. Menampilkan data category
export const getCategories = (req: Request, res: Response) => {
    res.json(Categories);
};

//2. Menyimpan data category
export const createCategory = (req: Request, res: Response) => {
    const { name } = req.body;

    // validasi jika field name belum diisi
    if (!name) {
        return res.status(500).json({ message: "Field name category harus diisi" });
    }

    const newCategory: Category = {
        id: Date.now(), // generate id unik berdasarkan timestamp
        name: name,
    };

    Categories.push(newCategory);
    res.status(201).json({ message: "Category berhasil ditambahkan", category: newCategory });
};

//3.Mengambil data berdasarkan id
export const getCategoryById = (req: Request, res: Response) => {};

//4. Mengupdate data category berdasarkan id
export const updateCategory = (req: Request, res: Response) => {};

//5. Menghapus data category berdasarkan id
export const deleteCategory = (req: Request, res: Response) => {};