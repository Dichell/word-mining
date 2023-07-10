
class Crud {
    entity: any
    constructor(entity: any){
        this.entity = entity
    }
    updateOne = async (filter: any = {}, update: any, options?: any) => {
        try{
            const response = await this.entity.findOneAndUpdate(filter, update, options).lean()
            return response?._id ? response : null
        }
        catch(e:any){
            throw new Error("updateOne - error")
        }
    }
}

export default Crud