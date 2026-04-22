Bun.serve({
port:5500,
 fetch(request){
  return new Response("oi meu lindo")
 }
}) 

console.log("ta funfando")