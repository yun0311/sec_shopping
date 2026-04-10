async function testAPI() {
  const res = await fetch("/api/test");
  const data = await res.json();

  console.log(data.message);
  document.getElementById("result").innerText = data.message;
}