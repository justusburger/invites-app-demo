import { Connection } from "typeorm";

export default async function insert(connection: Connection) {
  await connection.query(`
      INSERT INTO suburb (id, name, postcode) VALUES 
      ('101', 'Sydney', '2000'),
      ('102', 'Bondi', '2026'),
      ('103', 'Manly', '2095'),
      ('104', 'Surry Hills', '2010'),
      ('105', 'Newtown', '2042');
    `);

  await connection.query(`
      INSERT INTO category (id, name, parentCategoryId) VALUES 
      ('201', 'Plumbing', default),
      ('202', 'Electrical', default),
      ('203', 'Carpentry', default),
      ('204', 'Handyman', default),
      ('205', 'Building', default),
      ('206', 'Bathroom Renovation', '205');
    `);

  await connection.query(`
      INSERT INTO contact (id, firstName, lastName, phone, email) VALUES 
      ('301', 'Luke', 'Skywalker', '0412345678', 'luke@mailinator.com'),
      ('302', 'Darth', 'Vader', '0422223333', 'darth@mailinator.com'),
      ('303', 'Han', 'Solo', '0498765432', 'han@mailinator.com'),
      ('304', 'Kylo', 'Ren', '0488770066', 'kylo@mailinator.com');
    `);

  await connection.query(`
      INSERT INTO job (id, contactId, categoryId, suburbId, description, price, status) VALUES
      ('401', '301', '201', '101', 'Need to paint 2 aluminium windows and sliding glass door', 60, 'new'),
      ('402', '301', '203', '101', 'Rebuild door frame to fix gaps and leaks', 40, 'new'),
      ('403', '302', '201', '102', 'Integer aliquam pulvinar odio et convallis. Integer id tristique ex. Aenean scelerisque massa vel est sollicitudin vulputate. Suspendisse quis ex eu ligula elementum suscipit nec a est. Aliquam a gravida diam. Donec placerat magna posuere massa maximus vehicula. Cras nisl ipsum, fermentum nec odio in, ultricies dapibus risus. Vivamus neque.', 50, 'new'),
      ('404', '303', '204', '103', 'Sed accumsan urna vitae libero luctus volutpat. Nulla eu sodales enim, vitae blandit ligula. Suspendisse at magna pellentesque, rhoncus orci quis, consequat diam. Donec pulvinar accumsan erat, quis hendrerit est ultricies vel. Vivamus felis justo, vulputate non urna sed, finibus semper ipsum. Cras mattis, est vel posuere mattis, turpis augue elementum massa, vitae accumsan nibh nisl nec lectus. Maecenas porta sagittis erat at consequat. Suspendisse fermentum rutrum bibendum. Donec tempor mollis massa vel egestas.', 60, 'new');
    `);
}
