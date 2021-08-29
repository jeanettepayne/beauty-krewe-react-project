export default function fetchBrands() {
    fetch('http://localhost:3001/api/brands')
     .then(response => response.json())
     .then(data => console.log(data))
}

