"use server";

export async function saveMessage(formData) {
  const name = formData.get("name");
  console.log("Server received:", name); // 🔥 This logs on the SERVER
  return "Message saved for " + name;
}
