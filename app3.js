const inventario = [
    {
        "Producto": "Celular",
        "Marca": "Apple", 
        "Modelo": "iPhone 17 Pro Max", 
        "Color":"Blanco",
        "Stock": 10
    },
    {
        "Producto": "Cuaderno",
        "Marca": "Norma", 
        "Cantidad Hojas": 100, 
        "Estilo": "Cuadriculado",
        "Stock": 20 
    },
    {
        "Producto": "Televisor",
        "Marca": "LG", 
        "Pulgadas": 80,
        "Resolucion": ["HD", "Full HD", "4K/UHD" ],
        "Stock": 30
    }
]

for(let objeto of inventario){   
    console.log(objeto.Producto);
}