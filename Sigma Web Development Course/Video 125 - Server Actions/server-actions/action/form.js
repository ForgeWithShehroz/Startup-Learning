"use server"
import fs from "fs/promises"

export const submitAction= async (e) => {
  console.log(e.get("name"), e.get("adress"))
  let a = await fs.writeFile("Shehroz.txt", `Name is ${e.get("name")} Adress is ${e.get("adress")}`)
  console.log(a);
}