GET - read
 - app.get(function(req, res){
})

POST - create
 - app.post(function(req, res){
})

PUT / PATCH - Update
 - put: update your database by sending entire entry
 - patch: only the part of the data that is need to be updated
 
DELETE
 - detele a specific piece. 
 - app.delete((function(req, res){
})
              
              
GET /comments - list all comments
POST /comments - Create a new comment 
GET /comments/:id - Get one comment (using ID)
PATCH /comments/:id - Update one comment
DELETE /comments/:id - Destroy one comment
