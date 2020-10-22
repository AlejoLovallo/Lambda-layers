/* create the first admin user*/
use admin
db.createUser({user:"foouser",pwd:"foopwd",roles:[{role:"root",db:"admin"}]})
