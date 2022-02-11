let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "root",
        database: "codenotch"
    });

connection.connect(function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Conexión correcta.");
    }
});


// // ----- AGREGAR UNA COLUMNA NUEVA
// const sql = 'ALTER TABLE notas ADD fecha DATE';
// const sql = 'ALTER TABLE asignatura ADD campo_relacionado VARCHAR(60)';

// ---- BORRAR UNA COLUMNA
// const sql = 'ALTER TABLE modalidad DROP COLUMN temporada_inicio';
// const sql = 'ALTER TABLE asignatura DROP COLUMN campo_relacionado';


// --- INSERTAR DATOS

//             // ----- EN TABLA ASIGNATURA ----
//         const sql = 'INSERT INTO asignatura (nombre) VALUES ("FASE FINAL")';

//         // ----- EN TABLA profesores ----
//         const sql = 'INSERT INTO profesores (nombre, apellido) VALUES ("Raúl", "Leoni")';

//         // ------ EN TABLA modalidad
//         const sql = 'INSERT INTO modalidad (modalidad) VALUES ("Intensivo - Presencial")';

//         --- EN TABLA alumnos
//         const sql = 'INSERT INTO alumnos (nombre, apellidos, id_modalidad) VALUES ("Julio", "González", "9")';
        
//         ---- EN TABLA notas -----
//         let random1 = Math.floor(Math.random()*(9))+1;
//         let random2 = Math.floor(Math.random()*(9))+1;
//         let random3 = Math.floor(Math.random()*(9))+1;
//         let random4 = Math.floor(Math.random()*(9))+1;
//         let random5 = Math.floor(Math.random()*(9))+1;

//         const sql = `INSERT INTO notas (id_alumno, id_profesor, id_asignatura, id_modalidad, nota, fecha) VALUES ("${random1}", "${random2}", "${random3}", "${random4}", "${random5}", "2021-02-10")`;

//         ---- EN TABLA materia_profesor ---
//         const sql = `INSERT INTO materia_profesor (id_materia, id_profesor, id_grupo) VALUES ("${random1}", "${random2}", "${random3}")`;


// // ----- OTROS RETOS 

//         // ---- SETEAR TODAS LAS NOTAS A CERO
//         // const sql = `UPDATE notas SET nota = "0"`

//         // ---- OBTENER NOMBRE Y APELLIDO DE TODOS LOS ESTUDIANTES ---
//         // const sql = `SELECT nombre, apellidos FROM alumnos`

//         // --- DESCRIBIR DATOS DE LA TABLA PROFESORES
//         // const sql = `SELECT * FROM profesores`

//         // ---- ELIMINAR NOTAS QUE TENGAN MÁS DE 10 AÑOS ---
//         // const sql = `DELETE FROM notas WHERE fecha < '2011-10-29';`

//         // ---- PONER UN 5 A LOS QUE TENGAN MENOS DE 5 EN NOTAS

//         // (primero agregamos notas a cada uno)
//         // for (let index = 1; index < 11; index++) {
//         //     let random1 = Math.floor(Math.random()*(9))+1;
//         //     const sql = `UPDATE notas SET nota = "${random1}" WHERE idnotas = ${index}`
//         //     connection.query(sql, (error, result) => {
//         //         if (error) throw error;
//         //         else console.log(result);
//         //     });
//         // }

//         // (luego ponemos un 5 a los que sean menores a 5)
//         // const sql = `UPDATE notas SET nota = "5" WHERE nota < 5`




// ----EJECUTADOR (TOMA EL SQL DE CUALQUIER CONEXIÓN ARRIBA)----
    connection.query(sql, (error, result) => {
        if (error) throw error;
        else console.log(result);
    });

// ----CIERRA LA CONEXIÓN---
connection.end();