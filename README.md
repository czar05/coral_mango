Section I
table 1 :- restaurent
name : string
address : string
description: string
reviews : its an array where we will store ids of reviews
noofreview : Number

table2 :- review
review: string
restaurent : id

table 3 :- user
name : string
email : string
password : string
role : string
we have made the relation bw restaurent and review model by monogodb id

Section II
api endpoints
base url :- http://localhost:7000/api/v1
user routes
register :- baseurl/users/register | post
login :- baseurl/users/login | post
logout:- baseurl/users/logout | get

restaurent and reviews routes
get all restaurent with associated reviews :- baseurl/restaurent | get
create restaurent :- baseurl/restaurent/create | post | admin
post review :- baseurl/restaurent/review | post
get restaurent with review id and noofreviews:- baseurl/restaurent/admin | get |admin

SECTION III
const a = [1, 3, 5, 2, 4];
question:- 1
const result1 = a.filter((item,index)=>{
return index%2 ===0;
})

console.log(result1);

question:-2
const result1 = a.map((item)=>{
return item\*item;
})
console.log(result1);

question:-3
const result1 = a.filter((item,index)=>{
return index%2 ===0
}).map((item)=>{
return item\*item;
})
console.log(result1);
