
async function getPrice()
{
  const data = await fetch("https://bitbo.io", {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}

function init()
{
  console.log("Hello, World!")

  getPrice();
}