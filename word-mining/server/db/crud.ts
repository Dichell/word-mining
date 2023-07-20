
class Crud {
    entity: any
    constructor(entity: any){
        this.entity = entity
    }
    findOne = async (filter: any = {}, options?: any) => {
        try{
            const response = await this.entity.find(filter).lean()
            return response
        }
        catch(e: any){
            throw new Error("findOne - error")
        }
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
    aggregate = async (aggr: any) => {
        try{
            const response = await this.entity.aggregate(aggr)
            return response
        }
        catch(e:any){
            throw new Error("updateOne - error")
        }
    }
}

export default Crud