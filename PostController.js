const PostSevice = require('./PostService.js')

class PostController{
    async create(req,res){
        try{
            const post = await PostSevice.create(req.body,req.files.picture)
            res.json(post);
        }catch (error){
            res.status(500).json(error.message)
        }
    }

    async getAll(req,res){
        try{
            const posts = await PostSevice.getAll()
            res.json(posts)
        }catch(error){
            res.status(500).json(error.message)
        }
    }
    async getById(req,res){
        try{
            const post = await PostSevice.getById(req.params.id);
            res.json(post);
        }catch(error){
            res.status(500).json(error.message)
        }
    }
    async update(req,res){
        try{
            const updatedPost = await PostSevice.update(req.body)
            return res.json(updatedPost)
        }catch(error){
            res.status(500).json(error.message)
        }
    }
    async delete(req,res){
        try{
            const post = await PostSevice.delete(req.params.id)
            return res.json(post)
        }catch(error){
            res.status(500).json(error.message)
        }
    }
}
module.exports = new PostController;