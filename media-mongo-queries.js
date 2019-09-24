/*******************************************************
 * Ejercicios mongodb (mongo-queries-4)
 *******************************************************/

// 1

// Desde la terminal del sistema, ejecutar la siguiente línea
"mongoimport --db media --collection media ./media.json"

// 2
db.media.update({
    "titulo": "Matrix"
},{
    "tipo": "DVD",
    "Titulo": "Matrix", 
    "estreno": 1999, 
    "genero":"accion" 
})

// 3

db.media.insert({
    "tipo": "Libro", 
    "Titulo": "Constantinopla", 
    "capitulos": 12,
    "leidos": 3
})

db.media.update({
    "tipo": "Libro", 
    "Titulo": "Constantinopla",
    "capitulos": 12,
}, {
    $set: {
        "leidos": {
            $inc: 5
        }
    }
})

// 4

db.media.update({
    "tipo": "DVD", 
    "Titulo": "Matrix",
}, {
    $set: {
        "genero": "Ciencia Ficción"
    }
})

// 5

db.media.update({
    "tipo": "Libro",
    "Titulo": "Java para todos" 
}, {
    $unset: "editorial"
})

// 6

db.media.update({
    "tipo": "Libro",
    "Titulo": "Java para todos" 
}, {
    $push: {
        "Autor": "María Sancho"
    }
})

// 7

db.media.update({
    "tipo": "DVD",
    "Titulo": "Matrix"
}, {
    $push: {
        "actores": { 
            $each: [
                "Antonio Banderas",
                "Brad Pitt"
            ]
        } 
    }

})

// 8

db.media.update({
    "tipo": "DVD",
    "Titulo": "Matrix"
}, {
    $addToSet: {
        "actores": { 
            $each: [
                "Joe Pantoliano",
                "Brad Pitt",
                "Natalie Portman"
            ]
        } 
    }
})

// 9


db.media.update({
    "tipo": "DVD",
    "Titulo": "Matrix"
},[ 
    {
        $pop: {
            actores: 1
        },   
    },{
        $pop: {
            actores: -1
        },   
    },
])

// 10 (Ver ejercicio 7)

// 11


db.media.update({
    "tipo": "DVD",
    "Titulo": "Matrix"
},[ 
    {
        $pull: {
            "actores": {
                $in: [
                    "Joe Pantoliano",
                    "Antonio Banderas" 
                ]
            }
        },   
    }
])

// 12


db.media.update({
    "tipo": "CD",
    "Artista": "Los piratas",
    "Titulo": "Recuerdos"
}, {
    $push: {
        "canciones": { 
            "cancion": 5,
            "titulo": "El atardecer",
            "longitud": "6.50"
        } 
    }
})

// 13


db.media.update({
    "tipo": "CD",
    "Artista": "Los piratas",
    "Titulo": "Recuerdos"
}, {
    $set: {
        "canciones[elem].cancion": 3
    }
},
{
    arrayFilters: {
        "elem.titulo": "El atardecer"
    }
})

// 14

db.media.findOneAndUpdate({
    "tipo": "CD",
    "Artista": "Los piratas",
    "Titulo": "Recuerdos"
}, {
    $set: {
        "Artista": "Los piratillas"
    }
},{
    returnOriginal: false
})

// 15

db.media.renameCollection("multimedia")