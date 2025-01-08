document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
    
        {name: 'Anselmo Ralph', image: './img/album-ceu-explica.jpg'},
        {name: 'Bruno M', image: './img/Bruno M.jpg'},
        {name: 'Nagrela dos Lambas', image: './img/nagrelhaa.jpg'},
        {name: 'Passing Toloba ', image: './img/Passing.jpeg'},
        {name: 'Gerilson Insrael', image: './img/Gerildon.jpg'},
        {name: 'C4 Pedro', image: './img/C4Pedro_foto.webp'},
        {name: 'Scrô Que Cuia', image: './img/Scro.jpg'},
        {name: 'NGA', image: './img/NGA.avif'},
        {name: 'Preto Show', image: './img/Preto-Show.jpg'},
        {name: 'Prodigio', image: './img/Prodigio.png'},
        {name: 'Paulo Flores', image: './img/Paulo Flores.jpg'},
        {name: 'Yola Semedo', image: './img/Yola Semedo.jpg'},
        {name: 'Yola Araujo', image: './img/Yola Araujo.jpg'},
        {name: 'Pai Profeta', image: './img/PAI-PROFETA-1.jpeg'},
        {name: 'Perola', image: './img/Perola.webp'},
        {name: 'Yuri da Cunha', image: './img/yuri-da-cunha.png'},
    
    ];

    const albumsData =[
        {name: 'Anselmo Ralph',name:'História de Amor ', image: './img/Album Anselmo.jpg'},
        {name: 'C4 Pedro', name:'Ultimo Poeta',image: './img/Ultimo Poeta.jpeg'},
        {name: 'Paulo Flores',name:'Brincadeira Tem Hora [1993]', image: './img/Brincadeira Tem Hora [1993].jpg'},
        {name: 'Nagrelha ',name:'Arquitecto da Paz', image: './img/Arquitecto da Paz.jpeg'},
        {name: 'NGA', name:'King ', image: './img/Filho das Ruas.jpg'},
        {name: 'Yola Semedo', name:'Pro-Evolution-2', image: './img/Pro-Evolution2.jpeg'}
    ]

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist =>{
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src = "${artist.image}" alt =" imagem do ${artist.name}">
           <div>
            <h3> ${artist.name}</h3>
            <p> Artista</p>
            </div>
        `
        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album =>{
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')
       

        albumCard.innerHTML = `
            <img src = "${album.image}" alt =" imagem do ${album.name}">
           <div>
            <h3> ${album.name}</h3>
           
           

           </div>
            

        `
        albumsGrid.appendChild(albumCard)
    })


})



