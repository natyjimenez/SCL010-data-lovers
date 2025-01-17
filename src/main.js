//criar variable para linkear la con la data Pokemon
const pokeData = window.POKEMON.pokemon;
// variable para la busqueda de pokemon o condicion
let searchPokemon;
let orderValue;
//variable para impression de los pokemones
let cardGallery = ""; 
//container pop up 
//let showModal = "";
// const contPokeGallery = document.getElementById("pokeGallery");
// const contPokeList =document.getElementById("pokeList");
const pokeResult =document.getElementById("pokeList");

 //Crear Elementos Galería
 const showGallery = (pokeData) => {
  for (let i = 0; i < pokeData.length; i++){
    cardGallery +=
    //onclick="showModal(${data[i].id})"
     `<div class="card" style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" >
    <h3 class="card-title">${pokeData[i].num} ${pokeData[i].name}</h3>
     <img class="card-img-top" src=${pokeData[i].img} alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${pokeData[i].type}</p>
  </div>
</div>`
  } pokeResult.innerHTML = cardGallery;
  };
  
//Mostrar cards en orden aleatorio
const randomData = (pokeData)=>{
  return pokeData.sort(() => Math.random() - 0.5)
};
showGallery(randomData(pokeData));

//Filtro por Tipo 
document.getElementById("slctFilterType").addEventListener ("change", ( ) => {
  cardGallery ="";
  searchPokemon = document.getElementById("slctFilterType").options[document.getElementById("slctFilterType").selectedIndex].value;
  //Imprimir el resultado por tipo
  showGallery(window.dataPokemon.filterData(pokeData, searchPokemon));
});
//Filtro por Debilidad
document.getElementById("slctFilterWeaknesses").addEventListener ("change", ( ) => {
  cardGallery ="";
  //Guardar la selección del usuario
  searchPokemon = document.getElementById("slctFilterWeaknesses").options[document.getElementById("slctFilterWeaknesses").selectedIndex].value;
  //Imprimir el resultado por debilidad
  showGallery(window.dataPokemon.filterData(pokeData, searchPokemon));
});

//FILTRO POR TIPO Y ORDEN
document.getElementById("slctFilterOrder").addEventListener ("input", ( ) => {
  cardGallery ="";
  //Guardar la selección del usuario
  orderValue = document.getElementById("slctFilterOrder").value;
if (orderValue == "AZ") {
  showGallery(window.dataPokemon.sortData(pokeData, "name", "ascendente"));
} else if (orderValue == "ZA") {
  showGallery(window.dataPokemon.sortData(pokeData, "name", "descendente"));
} else if (orderValue == "1-151") {
  showGallery(window.dataPokemon.sortData(pokeData, "number", "ascendente"));
} else if (orderValue == "151-1") {
  showGallery(window.dataPokemon.sortData(pokeData, "number", "descendente"));
}
});


// //Buscador
// document.getElementById("slctFilterWeaknesses").addEventListener ("change", ( ) => {
//   cardGallery ="";
//   //Guardar la selección del usuario
//   searchPokemon = document.getElementById("slctFilterWeaknesses").options[document.getElementById("slctFilterWeaknesses").selectedIndex].value;

// showGallery(window.dataPokemon.filterData(pokeData, searchPokemon));
// });

// //Orden de 151-1
//   if(ordenValue === "151-1"){
//   let sortNumDesc = pokeData.sort(function(a,b){
//               if (a.id < b.id) {
//                   return 1;
//              }else{
//              return -1;
//           }
//          });
//           // console.log(sortNumDesc);
//  for(let i = 0 ; i < sortNumDesc.length ; i++){
//   pokeResult.innerHTML +=
//   `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter">
//  <h3 class="card-title">${sortNumDesc[i].num} ${sortNumDesc[i].name}</h3>
//   <img class="card-img-top" src=${sortNumDesc[i].img} alt="Card image cap">
// <div class="card-body">
//  <p class="card-text">${sortNumDesc[i].type}</p>
// </div>
// </div>`
// }
//   }
// //Orden de 1-151
//    if(ordenValue === "1-151"){
//       let sortNumAsc = pokeData.sort(function(a,b){
//                   if (a.id > b.id) {
//                       return 1;
//                  }else{
//                  return -1;
//               }
//              });
//               // console.log(sortNumAsc);
//      for(let i = 0 ; i < sortNumAsc.length ; i++){
//       pokeResult.innerHTML +=
//       `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter">
//      <h3 class="card-title">${sortNumAsc[i].num} ${sortNumAsc[i].name}</h3>
//       <img class="card-img-top" src=${sortNumAsc[i].img} alt="Card image cap">
//     <div class="card-body">
//      <p class="card-text">${sortNumAsc[i].type}</p>
//     </div>
//     </div>`
//     }

    
//       }
// //Orden de A-Z
// if (ordenValue === "A-Z"){
//   let sortNameAz  = pokeData.sort(function(a,b){
//               if (a.name > b.name) {
//                   return 1;
//              }else{
//              return -1;
//           }
//          });
//           // console.log(sortNameAz);
//  for(let i = 0 ; i < sortNameAz.length ; i++){
//   pokeResult.innerHTML +=
//   `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter">
//  <h3 class="card-title">${sortNameAz[i].num} ${sortNameAz[i].name}</h3>
//   <img class="card-img-top" src=${sortNameAz[i].img} alt="Card image cap">
// <div class="card-body">
//  <p class="card-text">${sortNameAz[i].type}</p>
// </div>
// </div>`
// }
//   }
// //Orden de Z-A
// if(ordenValue === "Z-A"){
//   let sortNameZa  = pokeData.sort(function(a,b){
//               if (a.name < b.name) {
//                   return 1;
//              }else{
//              return -1;
//           }
//          });
//           // console.log(sortNameZa);
//  for(let i = 0 ; i < sortNameZa.length ; i++){
//   pokeResult.innerHTML +=
//   `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter">
//  <h3 class="card-title">${sortNameZa[i].num} ${sortNameZa[i].name}</h3>
//   <img class="card-img-top" src=${sortNameZa[i].img} alt="Card image cap">
// <div class="card-body">
//  <p class="card-text">${sortNameZa[i].type}</p>
// </div>
// </div>`
// }
//   }
