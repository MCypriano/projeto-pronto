 export const products = [
    {
      "id": "1",
      "name": "Camiseta Mescla",
      "price": 28.8,
      "parcelamento": [3, 9.33],
      "color": "Cinza",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_2.png",
      "size": ["M", "GG"],
      "date": "1995-12-17"
    },
    {
      "id": "2",
      "name": "Saia em couro",
      "price": 398.0,
      "parcelamento": [5, 30],
      "color": "Preto",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_3.png",
      "size": ["G", "40"],
      "date": "1996-12-17"
    },
    {
      "id": "3",
      "name": "Cardigan Tigre",
      "price": 398.8,
      "parcelamento": [5, 30],
      "color": "Laranja",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_4.png",
      "size": ["GG", "44"],
      "date": "1997-12-17"
    },
    {
      "id": "4",
      "name": "Cardigan off white",
      "price": 99.9,
      "parcelamento": [3, 33.3],
      "color": "Branco",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_5.png",
      "size": ["U", "46"],
      "date": "1998-12-17"
    },
    {
      "id": "5",
      "name": "Body Leopardo",
      "price": 129.9,
      "parcelamento": [3, 43.43],
      "color": "Amarelo",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_6.png",
      "size": ["M"],
      "date": "1999-12-17"
    },
    {
      "id": "6",
      "name": "Casaco Pelos",
      "price": 398.0,
      "parcelamento": [5, 30],
      "color": "Rosa",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_7.png",
      "size": ["GG", "38"],
      "date": "1999-12-16"
    },
    {
      "id": "7",
      "name": "Cropped Stripes",
      "price": 120.0,
      "parcelamento": [3, 40],
      "color": "Amarelo",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_8.png",
      "size": ["36", "U"],
      "date": "2000-12-17"
    },
    {
      "id": "8",
      "name": "Camisa Transparente",
      "price": 398.0,
      "parcelamento": [5, 30],
      "color": "Preto",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_9.png",
      "size": ["P"],
      "date": "2000-11-17"
    },
    {
      "id": "9",
      "name": "Pochete Clutch",
      "price": 99.0,
      "parcelamento": [3, 33],
      "color": "Preto",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_10.png",
      "size": ["M"],
      "date": "2003-12-17"
    },
    {
      "id": "9",
      "name": "Pochete Clutch",
      "price": 99.0,
      "parcelamento": [3, 33],
      "color": "Preto",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_10.png",
      "size": ["M"],
      "date": "2003-12-17"
    },
    {
      "id": "9",
      "name": "Pochete Clutch",
      "price": 99.0,
      "parcelamento": [3, 33],
      "color": "Preto",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_10.png",
      "size": ["M"],
      "date": "2003-12-17"
    },
    {
      "id": "9",
      "name": "Pochete Clutch",
      "price": 99.0,
      "parcelamento": [3, 33],
      "color": "Preto",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_10.png",
      "size": ["M"],
      "date": "2003-12-17"
    },
    {
      "id": "9",
      "name": "Pochete Clutch",
      "price": 99.0 ,
      "parcelamento": [3, 33],
      "color": "Preto",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_10.png",
      "size": ["M"],
      "date": "2003-12-17"
    },
    {
      "id": "9",
      "name": "Pochete Clutch",
      "price": 99.0 ,
      "parcelamento": [3, 33],
      "color": "Preto",
      "image": "https://raw.githubusercontent.com/agenciam3/Desenvolvedor-M3/master/src/img/img_10.png",
      "size": ["M"],
      "date": "2003-12-17"
    },
  ];
  
  document.getElementById("Container").innerHTML = `
${products.map(function(produto){
				return`
				<div class="produtos">
				 <img src="${produto.image}">
				 <p class="name">${produto.name}</p>
				 <p class="preco">R$ ${produto.price}</p>
				 <button class="comprar">COMPRAR</button>
				 </div>
				`
}).join('')}

         
         `
