import{data} from'../data_libros/data_libros.js'

const items=document.getElementById('items');
const templateCard=document.getElementById('template-card').content;
const fragment= document.createDocumentFragment();
let reserva={};

document.addEventListener('DOMContentLoaded',()=>{
    loadData(data)
})

const loadData = data =>{
    data.forEach(libros=>{
        const{id,name,image}= libros
        templateCard.querySelector('h5').textContent=name;
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('p').textContent=dewey
        templateCard.querySelector('.btn-dark').dataset.id=id

        const clone=templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)

}
//algo