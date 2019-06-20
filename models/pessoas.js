const findAll = (connection, req, res) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from pessoas', (err, results) => {
            if(err) { 
                
                reject(err)
            } else {
                resolve(results)
            }
            
        })

    })
         
}


const deleteOne = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('delete from pessoas where id = '+id, (err) => {
            if(err) {                 
                reject(err) 
            } else {
                resolve() 
            }
            
        })

    })
   
}

module.exports = {
    findAll, 
    deleteOne  
} 