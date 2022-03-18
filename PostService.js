const Post = require("./post.js");
const FileService = require("./FileService.js")
class PostService{
    async create(post,picture){
        const fileName = FileService.saveFiles(picture)
        const createdPost = await Post.create({...post,picture:fileName});
        return createdPost

    }

    async getAll(){
        const posts = await Post.find()
        return posts
    }

    async getById(id){
        if(!id){
            throw new Error('id is not defined')
        }
        const post = await Post.findById(id);
        return post;
    }
    async update(post){
        if(!post._id){
            throw new Error('id is not defined')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id,post,{new: true})
        return updatedPost

    }
    async delete(id){
        if(!id){
            throw new Error('id is not defined')
        }
        const post = await Post.findByIdAndDelete(id)
        if(post.picture){
            await FileService.deleteFiles(post.picture)
        }
        return post
    }
}

module.exports = new PostService;