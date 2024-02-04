import {test,expect} from '@playwright/test'
import { json } from 'node:stream/consumers'
import { join } from 'path'
var userid;
test.describe('MockAPI Testcases',()=>{
    const apiURL="https://reqres.in/api/users?page=2"
    
    test('get User',async({request})=>{
     const res=await request.get(apiURL)
        console.log(await res.json());
        expect(res.status()).toBe(200)
    })
    test("Create User",async({request})=>{
        const res=await request.post("https://reqres.in/api/users",{
            data:{
                "name":"bhushan",
                "job":"trainer"
            },
            headers:{
                "Accept":"application/json"
            }
        })
        console.log(await res.json());
        expect(res.status()).toBe(201);
        var r=await res.json()
        userid=r.id
    })
    test("Update User",async({request})=>{
        const res=await request.put("https://reqres.in/api/users/"+userid,
        {
            data:{
                "name":"bhushan",
                "job":"trainer"
            },
            headers:{
                "Accept":"application/json"
            }
        })
        console.log(await res.json());
        expect(res.status()).toBe(200);
        var r=await res.json()
        userid=r.id
    })
    test("Delete User",async({request})=>{
        const res=await request.delete("https://reqres.in/api/users/"+userid)
        expect(res.status()).toBe(204)
    })
})