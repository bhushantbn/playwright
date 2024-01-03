import { expect,test } from "@playwright/test";

test.describe("Home page api testcases", () => {
    const url="https://lara.meetanshi.org/festival/api/home"
    test("get home page API data status", async ({request}) => {
        const response=await request.get(url)
        expect(response.status()).toBe(200)
    })
    test("get home page API data status Text", async ({request}) => {
        const response=await request.get(url)
        expect(response.statusText()).toBe("OK")
    })
    test("get home page API slider Array", async ({request}) => {
        const response=await request.get(url)
        const data=await response.json()
        expect(data.slider).toBeInstanceOf(Array)
    
    })
    test("get home page API festival Array", async ({request}) => {
        const response=await request.get(url)
        const data=await response.json()
        expect(data.festival).toBeInstanceOf(Array)
    
    })
    test("get home page APIfestival Array data", async ({request}) => {
        const response=await request.get(url)
        const data=await response.json()
        data.festival.forEach(function(festival) {
            console.log(festival.fest_name);
            console.log(festival.fest_type);
        })
        expect(data.festival[0].fest_name).toContain("GoodBye 2023")
        expect(data.festival[1].fest_name).toContain("English New Year")
    })
    test("get home page API slider Array data", async ({request}) => {
        const response=await request.get(url)
        const data=await response.json()
        data.slider.forEach(function(slider) {
            console.log(slider.category_fest_name);
            console.log(slider.adv_type);
        })
        expect(data.slider[0].category_fest_name).toContain("International Volunteer Day")
        expect(data.slider[1].adv_type).toContain("Category")
    })
    test("Verify home page API Content headers",async({request})=>{
        const response=await request.get(url)
        expect(response.headers()['content-type']).toContain("application/json")
    
    })
    test("Verify home page API Server headers",async({request})=>{
        const response=await request.get(url)
        expect(response.headers()['server']).toContain("Apache")
    
    })
    test("Verify fest_date data date format",async({request})=>{
        const response=await request.get(url)
        const data=await response.json()
        data.festival.forEach(function(festival) {
            expect(festival.fest_date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
        })
    
    })
})
test.describe("Category page api testcases", () => {
    const url= "https://lara.meetanshi.org/festival/api/categoryDetails"
    test("Post Category details API", async ({context}) => {
        const response=await context.request.post(url,{
            form:{
                "postcategoryid":"189",
	            "language_id":"3"
            },
        })
        expect(response.status()).toBe(200)
        const data = await response.json()
        expect(data.status).toBe(true)
        expect(data.message).toBe("List of all festival")
    
    })
})