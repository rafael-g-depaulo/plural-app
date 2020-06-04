import Router from "express"
import Mapping from "../models/Mapping"


export default ({User}, config) => {

    return Router(config)
    .post("/users/:user_id/mapping",async(req, res) =>{


        const{user_id}= req.params
        const{artistic_name, short_biography, long_bio, sexual_orientation, gender_orientation, professional, art_category} = req.body

        const user = await User.findByPk(user_id)
        if(!user){
            return res.status(400).json({error:"user not found"+user_id})
        }

        const mapping = await Mapping.create({
            artistic_name,
            short_biography,
            long_bio,
            sexual_orientation,
            gender_orientation,
            professional,
            art_category,
            user_id,
        })

        return res.json(mapping)


    })
}