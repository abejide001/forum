import {MigrationInterface, QueryRunner} from "typeorm";

export class FakePosts1611514630772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            insert into post (title, text, "creatorId") values ('Chinatown', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

            Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
            
            Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1);
            insert into post (title, text, "creatorId") values ('Blume in Love', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            
            Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
            insert into post (title, text, "creatorId") values ('Passport to Pimlico', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
            
            Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1);
            insert into post (title, text, "creatorId") values ('Beast Must Die, The', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1);
            insert into post (title, text, "creatorId") values ('Just Before Dawn', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1);
            insert into post (title, text, "creatorId") values ('Tag: The Assassination Game (a.k.a. Everybody Gets It in the End)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
            
            Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
            
            Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1);
            insert into post (title, text, "creatorId") values ('Vasermil', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
            insert into post (title, text, "creatorId") values ('Tom, Tom, the Piper''s Son', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
            insert into post (title, text, "creatorId") values ('Last Supper, The', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
            
            Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
            
            Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1);
            insert into post (title, text, "creatorId") values ('Box of Moon Light', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
            
            Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
            
            Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1);
            insert into post (title, text, "creatorId") values ('Greenfingers', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
            
            Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            
            Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1);
            insert into post (title, text, "creatorId") values ('16 Years of Alcohol', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
            
            In congue. Etiam justo. Etiam pretium iaculis justo.', 1);
            insert into post (title, text, "creatorId") values ('Restrepo', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
            
            In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
            
            Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1);
            insert into post (title, text, "creatorId") values ('Fifth Commandment, The', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
            insert into post (title, text, "creatorId") values ('Holy Motors', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
            
            Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1);
            insert into post (title, text, "creatorId") values ('Du côté de la côte', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1);
            insert into post (title, text, "creatorId") values ('Summer of the Monkeys', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
            
            In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
            insert into post (title, text, "creatorId") values ('Romance of Astrea and Celadon, The (Les amours d''Astrée et de Céladon)', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
            
            Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1);
            insert into post (title, text, "creatorId") values ('Kissed', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
            
            Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
            
            Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1);
            insert into post (title, text, "creatorId") values ('Liar''s Dice', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
            
            Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
            
            Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
            insert into post (title, text, "creatorId") values ('Coming Out', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1);
            insert into post (title, text, "creatorId") values ('Confession', 'In congue. Etiam justo. Etiam pretium iaculis justo.
            
            In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
            insert into post (title, text, "creatorId") values ('Counter Investigation (Contre-enquête)', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
            
            In congue. Etiam justo. Etiam pretium iaculis justo.
            
            In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
            insert into post (title, text, "creatorId") values ('Reckless Moment, The', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
            
            Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
            insert into post (title, text, "creatorId") values ('Jane Austen in Manhattan', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
            insert into post (title, text, "creatorId") values ('I Want Candy', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
            
            In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
            
            Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
            insert into post (title, text, "creatorId") values ('PK', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.
            
            Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
            insert into post (title, text, "creatorId") values ('Hedda Gabler', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1);
            insert into post (title, text, "creatorId") values ('Last Dragon, The', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
            
            Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1);
            insert into post (title, text, "creatorId") values ('This Is England', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
            
            Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
            insert into post (title, text, "creatorId") values ('China O''Brien', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
            
            Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
            
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1);
            insert into post (title, text, "creatorId") values ('Jönssonligan dyker upp igen', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
            
            Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
            
            Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
            insert into post (title, text, "creatorId") values ('North', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1);
            insert into post (title, text, "creatorId") values ('Man Named Pearl, A', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
            
            Fusce consequat. Nulla nisl. Nunc nisl.
            
            Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
            insert into post (title, text, "creatorId") values ('The Beales of Grey Gardens', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
            
            Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
            
            Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1);
            insert into post (title, text, "creatorId") values ('La discrète', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
            
            In congue. Etiam justo. Etiam pretium iaculis justo.
            
            In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
            insert into post (title, text, "creatorId") values ('Little Trip to Heaven, A', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
            
            Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
            
            In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1);
            insert into post (title, text, "creatorId") values ('Je suis né d''une cigogne', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
            
            Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1);
            insert into post (title, text, "creatorId") values ('What Time Is It There? (Ni neibian jidian)', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
            
            Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
            
            Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1);
            insert into post (title, text, "creatorId") values ('Ouija', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
            
            In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
            
            Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1);
            insert into post (title, text, "creatorId") values ('Lupin III: The Castle Of Cagliostro (Rupan sansei: Kariosutoro no shiro)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
            
            Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
            insert into post (title, text, "creatorId") values ('Dumplings (Gaau ji)', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            
            Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
            
            Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1);
            insert into post (title, text, "creatorId") values ('Me & Isaac Newton', 'In congue. Etiam justo. Etiam pretium iaculis justo.
            
            In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
            insert into post (title, text, "creatorId") values ('Weight of the Nation', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
            
            Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1);
            insert into post (title, text, "creatorId") values ('Perks of Being a Wallflower, The', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
            insert into post (title, text, "creatorId") values ('In My Sleep', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
            
            In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
            insert into post (title, text, "creatorId") values ('Krays, The', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
            
            Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
            insert into post (title, text, "creatorId") values ('Let the Fire Burn', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
            
            In congue. Etiam justo. Etiam pretium iaculis justo.
            
            In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
            insert into post (title, text, "creatorId") values ('Samson and Delilah', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
            
            Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1);
            insert into post (title, text, "creatorId") values ('Lights in the Dusk (Laitakaupungin valot)', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
            
            Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
            `
        )
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
