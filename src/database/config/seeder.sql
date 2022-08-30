BEGIN;

insert into users(username, email, password, image) values 
('Mustafa', 'mustafa@gmail.com', '123456', 'https://images.pexels.com/photos/13278016/pexels-photo-13278016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'), 
('Zayan', 'zayan@gmail.com', '123456789', 'https://images.pexels.com/photos/13278016/pexels-photo-13278016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

insert into posts(title, content, image, userId) values 
('IMPORTANt', 'this is too important!', 'https://images.pexels.com/photos/13278016/pexels-photo-13278016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1), 
('Hello', 'Welcome', 'https://images.pexels.com/photos/13278016/pexels-photo-13278016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 2),
('test', 'test content ', 'https://images.pexels.com/photos/13278016/pexels-photo-13278016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1);



COMMIT;