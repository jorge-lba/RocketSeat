import knex from 'knex'
import path from 'path'

const connerction = knex({
    client:'sqlit3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite')
    }
})

export default connerction