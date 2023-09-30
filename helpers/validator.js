class Validator{
    static validateTaskDetails(taskDetails){
        if(taskDetails.hasOwnProperty('title') && taskDetails.title.trim().length > 0 &&
            taskDetails.hasOwnProperty('description') && taskDetails.description.trim().length > 0 &&
            taskDetails.hasOwnProperty('completed') && typeof taskDetails.completed == 'boolean'
        ){
            return {
                "status":true,
                "message":"Task added Successfully"
            }
        }
        else{
            return{
                "status":false,
                "message":"Please Check Details, Provide Required Parameters"
            }
        }
    }
}

module.exports = Validator;