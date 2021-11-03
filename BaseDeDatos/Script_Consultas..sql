use bbddproteccionbarrial

select * from localidad

insert into localidad(Nombre_Localidad) values ('Cordoba');
insert into localidad(Nombre_Localidad) values ('Villa Soto');


select * from contacserv

insert into contacserv(Policia,Bombero,Emergencias,CentroVecinal) values ('101','100','911','4563658');

select * from barrio

insert into barrio(NombreBarrio,Codigo_Postal,Id_localidad,Provincia,IdContact_Serv) values ('Sarmiento','5014','1','Cordoba',1);


select * from usuario

 insert into usuario(Nombre,Apellido,TipoDoc,NroDoc,Domicilio,Id_Barrio,Telefono,Mail) 
 values ('Pablo','Villablo','DNI','37661471','Guido Spano 2362','1','4566256','Pablo@gmail.com');
 
 select * from usuariologin
 
 insert into usuariologin(Login,Contraseña,Id_Usuario) values ('Pablo2193','123456','1');
