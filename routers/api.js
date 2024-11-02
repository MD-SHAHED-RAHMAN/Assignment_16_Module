import express from 'express';
const router=express.Router();
import * as blogController from '../app/controllers/taskController.js';


//CREATE ROUTE
router.post("/create-blog",blogController.createBlog);  





//READ ROUTE
router.get("/read-blog",blogController.readBlog);


//UPDATE ROUTE
router.put("/update-blog",blogController.updateBlog);


//DELETE ROUTE
router.delete("/delete-blog",blogController.deleteBlog);


export default router;