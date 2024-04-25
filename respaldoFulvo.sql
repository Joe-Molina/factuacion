
    CREATE TABLE clientes (
      id int(11) NOT NULL COMMENT 'id del cliente
',
      id_admin_creador int(11) NOT NULL COMMENT 'id del admin que lo creo',
      nombre varchar(191) NOT NULL COMMENT 'nombre del cliente',
      apellido varchar(191) NOT NULL COMMENT 'apellido del cliente',
      Domicilio varchar(191) NOT NULL COMMENT 'lugar donde vive',
      Cedul varchar(191) NOT NULL COMMENT 'cedula del cliente',
      createdAt datetime(3) NOT NULL DEFAULT current_timestamp(3),
      updatedAt datetime(3) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

      INSERT INTO clientes (id, id_admin_creador, nombre, apellido, Domicilio, Cedula, createdAt, updatedAt) VALUES

      (1,1,'joe','molina','mata seca','30045639','Tue Apr 16 2024 11:25:37 GMT-0400 (hora de Venezuela)','Tue Apr 16 2024 11:25:37 GMT-0400 (hora de Venezuela)')
     ,(2,1,'damian','medina','valle verde','31584452','Tue Apr 16 2024 11:28:35 GMT-0400 (hora de Venezuela)','Tue Apr 16 2024 11:28:35 GMT-0400 (hora de Venezuela)')
     

      CREATE TABLE iniciosdesesion (
        id int(11) NOT NULL,
        id_usuario int(11) NOT NULL,
        createAt datetime(3) NOT NULL DEFAULT current_timestamp(3)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    INSERT INTO iniciosdesesion (id, id_usuario, createdAt, updatedAt) VALUES
    (1,1,'Tue Apr 16 2024 11:25:23 GMT-0400 (hora de Venezuela)','Tue Apr 16 2024 11:25:23 GMT-0400 (hora de Venezuela)')
   ,(2,1,'Wed Apr 24 2024 15:58:50 GMT-0400 (hora de Venezuela)','Wed Apr 24 2024 15:58:50 GMT-0400 (hora de Venezuela)')
   ,(3,1,'Thu Apr 25 2024 09:09:17 GMT-0400 (hora de Venezuela)','Thu Apr 25 2024 09:09:17 GMT-0400 (hora de Venezuela)')
   
      
    CREATE TABLE factura (
      id int(11) NOT NULL COMMENT 'id de la factura',
      id_admin_creador int(11) NOT NULL COMMENT 'id del admin que loc reo',
      id_cliente int(11) NOT NULL COMMENT 'id del cliente',
      DescripcionFactura varchar(191) NOT NULL COMMENT 'descripcion de la factura',
      createdAtdatetime(3) NOT NULL DEFAULT current_timestamp(3),
      updatedAt datetime(3) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        INSERT INTO factura (id, id_admin_creador, id_cliente, DescripcionFactura, createdAt, updatedAt) VALUES
    (5,1,2,'hola','Tue Apr 16 2024 11:28:46 GMT-0400 (hora de Venezuela)','Tue Apr 16 2024 11:28:46 GMT-0400 (hora de Venezuela)')
   ,(6,1,2,'nueva factura','Wed Apr 24 2024 15:59:18 GMT-0400 (hora de Venezuela)','Wed Apr 24 2024 15:59:18 GMT-0400 (hora de Venezuela)')
   ,(7,1,2,'rrtet','Wed Apr 24 2024 15:59:49 GMT-0400 (hora de Venezuela)','Wed Apr 24 2024 15:59:49 GMT-0400 (hora de Venezuela)')
   ,(8,1,1,'qweqwe','Wed Apr 24 2024 16:03:28 GMT-0400 (hora de Venezuela)','Wed Apr 24 2024 16:03:28 GMT-0400 (hora de Venezuela)')
   ,(10,1,1,'setrywerty','Wed Apr 24 2024 16:04:50 GMT-0400 (hora de Venezuela)','Wed Apr 24 2024 16:04:50 GMT-0400 (hora de Venezuela)')
   
        
    CREATE TABLE usuarios (
        id int(11) NOT NULL,
        username varchar(191) NOT NULL,
        email varchar(191) NOT NULL,
        password varchar(191) NOT NULL,
        tipo_usuario varchar(191) NOT NULL,
        created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

      INSERT INTO usuarios (id, username, email, password, tipo_usuario, created_at) VALUES
      (1,'joe','joedodaniljr123@gmail.com','$2b$10$uabzxuNuCwzUqSGHQSVUgObvhnUuKjEPaiRjAgbe9qCkqVD2Vp782','admin','undefined')
     



