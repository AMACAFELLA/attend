import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {

try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('db992378-9cae-4cfd-83ea-7c22cc22831e', '7Abigale_West@gmail.com', 'ascit', 'https://i.imgur.com/YfJQV5z.png?id=9', 'ago ex', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('b1cdc5b8-d544-43fa-a64a-7abbc0536186', '13Florian.Friesen@gmail.com', 'subseco', 'https://i.imgur.com/YfJQV5z.png?id=15', 'rem', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('bafbf4c5-60a9-4a05-bca1-0831ab4b5a4c', '19Wendy13@gmail.com', 'nostrum complectus', 'https://i.imgur.com/YfJQV5z.png?id=21', 'carbo ullus deripio', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('fc8d4811-9dc5-4412-a722-4c8200f2d400', '25Serenity.Pfeffer@hotmail.com', 'unde', 'https://i.imgur.com/YfJQV5z.png?id=27', 'consuasor vilis', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d6318989-8477-49ca-b802-5987c7450a3b', '31Sheila.Hamill3@hotmail.com', 'contra non', 'https://i.imgur.com/YfJQV5z.png?id=33', 'amicitia circumvenio', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('61e2d00d-c019-46a2-b945-9c7c565c7ac0', '37Macy.Tromp-Muller@gmail.com', 'vobis', 'https://i.imgur.com/YfJQV5z.png?id=39', 'molestiae confero', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2554ff63-dc7c-4503-8bf5-42b1ec11234b', '43Constantin.Champlin92@hotmail.com', 'uxor victus uberrime', 'https://i.imgur.com/YfJQV5z.png?id=45', 'tabesco voco clamo', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('9a0e076a-9491-459e-9350-580852b8a851', '49Kendall.Moen55@yahoo.com', 'cuius', 'https://i.imgur.com/YfJQV5z.png?id=51', 'minima vomito', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('96a879eb-181c-42aa-af79-52df6795ce33', '55Bettie60@hotmail.com', 'sui charisma aliquam', 'https://i.imgur.com/YfJQV5z.png?id=57', 'quia', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('818a73ec-f0fb-49f5-99d9-c0f11b1815a1', 'commodo vos', 'assentator', 'certe derelinquo repudiandae', '64Marcus.Thompson47@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '96a879eb-181c-42aa-af79-52df6795ce33');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('591a8f4e-9a34-4e35-8365-b288023962a4', 'quaerat spiculum', 'ter beatus', 'demulceo', '71Aric_Graham@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ba23d1ae-4f3d-4036-9f1d-6569bba1373d', 'vapulus tutis apto', 'deprimo', 'sequi trucido', '78Josh25@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '61e2d00d-c019-46a2-b945-9c7c565c7ac0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('56c9a952-fff0-4c71-91cd-985ec86a0b4b', 'unus adeo', 'tego vespillo suffragium', 'tener argumentum', '85Alberto3@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', 'db992378-9cae-4cfd-83ea-7c22cc22831e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b52bf81f-e306-420a-a494-0506cb450f17', 'corrupti', 'enim', 'similique', '92Selina_Huels@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', 'fc8d4811-9dc5-4412-a722-4c8200f2d400');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('61d71621-c67f-4989-a217-35ba032f8e57', 'accendo solium', 'depereo theatrum', 'antiquus aetas', '99Eloisa72@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', 'd6318989-8477-49ca-b802-5987c7450a3b');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b796b877-2f39-4e00-b755-09fe5b8ed99f', 'delectus ante sono', 'aut cerno', 'ullus', '106Sebastian17@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'bafbf4c5-60a9-4a05-bca1-0831ab4b5a4c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('da2af842-08e9-4e0f-80cb-21579ea2b7fc', 'crebro vae blandior', 'vicinus', 'vaco teres', '113Maxie_Runte87@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', 'd6318989-8477-49ca-b802-5987c7450a3b');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e96a3802-b946-46be-b666-93944a18b857', 'et', 'venio', 'crebro bardus', '120Payton_Reichel@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', 'db992378-9cae-4cfd-83ea-7c22cc22831e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('802418ff-41ba-43b6-a286-d711d9ba8954', 'carpo reiciendis creator', 'vitium soleo', 'cilicium', '127Ryann.Shanahan@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', 'fc8d4811-9dc5-4412-a722-4c8200f2d400');

INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('763f31a4-6dc3-462b-aab4-28b8c14d5d02', 'sumo', 'supplanto tristis capillus', 'd6318989-8477-49ca-b802-5987c7450a3b');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('8ae8602c-d0d4-4006-af03-ab50b697d86c', 'sursum cunabula abbas', 'stabilis umerus', '61e2d00d-c019-46a2-b945-9c7c565c7ac0');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('6175dd48-7fbc-49ed-9b9c-d4f0c97fcda0', 'adfectus', 'thalassinus', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('3bcd62c7-1202-402a-983b-6620479875de', 'spectaculum admitto cubicularis', 'sortitus vigilo', 'bafbf4c5-60a9-4a05-bca1-0831ab4b5a4c');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('dde3628f-19f6-4ba0-9a63-6233bcce13dc', 'carpo reiciendis', 'adflicto xiphias', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('14fa9525-16de-4033-a891-ff52ccc1a35e', 'arcesso collum', 'decet comparo', '96a879eb-181c-42aa-af79-52df6795ce33');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('2dd64820-8bdc-47bd-bfdd-f17b3d28d8ee', 'dolore distinctio attonbitus', 'eligendi', '2554ff63-dc7c-4503-8bf5-42b1ec11234b');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('0c221e16-1912-4950-b68b-5e8a30646eab', 'cubicularis rem amitto', 'valeo cibo', '9a0e076a-9491-459e-9350-580852b8a851');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('a1abea22-db97-42d4-a8c6-2eb8939778f0', 'speciosus', 'pauci vitae tribuo', '2554ff63-dc7c-4503-8bf5-42b1ec11234b');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('d07004f4-509b-4c00-8791-b73c7989b3d7', 'usque', 'xiphias', 'bafbf4c5-60a9-4a05-bca1-0831ab4b5a4c');

INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('093ec23f-e233-4702-b025-4e01aef710fc', 'sursum curto tametsi', 'cervus cauda caecus', '163Jaime_Schultz@hotmail.com', 'ascisco vulnus', '0c221e16-1912-4950-b68b-5e8a30646eab');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('c16f52a4-d190-4180-8aca-b70d4cf82b85', 'cervus uxor aedificium', 'tabernus', '168Junior80@gmail.com', 'bardus curis cervus', '0c221e16-1912-4950-b68b-5e8a30646eab');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('15f721ce-4dc6-4d2a-823d-dc3807f88ddf', 'abundans', 'aurum vitiosus', '173Cristal_Cole48@yahoo.com', 'adiuvo', 'dde3628f-19f6-4ba0-9a63-6233bcce13dc');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('3ee49e72-6f1c-4412-842a-440f7bacd001', 'arguo', 'quo molestias acies', '178Sterling46@yahoo.com', 'adopto', '14fa9525-16de-4033-a891-ff52ccc1a35e');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('516a31de-f87d-41d4-92d5-eb8a9115382c', 'aeger sonitus cariosus', 'hic adopto aiunt', '183Bella.Hudson88@yahoo.com', 'subseco', 'dde3628f-19f6-4ba0-9a63-6233bcce13dc');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('d855f70f-e563-4c2f-8efc-0c6de126c8d2', 'adipiscor', 'quisquam testimonium synagoga', '188Hollie58@hotmail.com', 'laudantium terra causa', 'd07004f4-509b-4c00-8791-b73c7989b3d7');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('44023394-efad-486b-acf0-b5776b654ab9', 'adnuo', 'appello ait dens', '193Ashley83@yahoo.com', 'stella degusto', '14fa9525-16de-4033-a891-ff52ccc1a35e');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('b208d8d8-ab56-45f9-bc51-c371633009b3', 'aegrus adimpleo', 'certe', '198Valentin79@gmail.com', 'tamquam est', '8ae8602c-d0d4-4006-af03-ab50b697d86c');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('1d8c4185-9bd6-4edb-804a-5ec41f53d0af', 'cibo demitto', 'eius cura excepturi', '203Annabel_Trantow@yahoo.com', 'aequitas verbera arbustum', '763f31a4-6dc3-462b-aab4-28b8c14d5d02');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('148ad459-74a0-475a-9cef-00503a268ee4', 'bonus corroboro', 'apud sollers', '208Grace5@hotmail.com', 'antea velit', '763f31a4-6dc3-462b-aab4-28b8c14d5d02');

INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('d9ae4676-e3e9-4cf0-9f85-1c5abd782625', '2023-03-23T22:12:27.744Z', '2024-10-03T17:31:55.153Z', 'a1abea22-db97-42d4-a8c6-2eb8939778f0', '093ec23f-e233-4702-b025-4e01aef710fc');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('f652a5b8-b0ca-4375-bcf5-91a2d70b2b0e', '2024-11-29T05:27:55.233Z', '2024-07-20T08:28:27.302Z', 'dde3628f-19f6-4ba0-9a63-6233bcce13dc', '516a31de-f87d-41d4-92d5-eb8a9115382c');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('9ec50d87-113e-4f04-9faf-d303f202b3c5', '2023-11-07T20:54:41.332Z', '2023-10-06T16:06:02.789Z', '0c221e16-1912-4950-b68b-5e8a30646eab', '3ee49e72-6f1c-4412-842a-440f7bacd001');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('8edb741b-2e63-46c4-b898-25275132aadf', '2024-02-29T12:07:55.687Z', '2023-06-13T19:25:03.108Z', '0c221e16-1912-4950-b68b-5e8a30646eab', '15f721ce-4dc6-4d2a-823d-dc3807f88ddf');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('3534c4cb-8d92-42f6-a74a-17a6454dbdcd', '2024-04-14T09:12:21.937Z', '2024-10-12T14:49:30.571Z', '14fa9525-16de-4033-a891-ff52ccc1a35e', '3ee49e72-6f1c-4412-842a-440f7bacd001');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('812f717a-2637-4fba-986b-54fbc4cb7a2b', '2023-09-22T11:10:23.442Z', '2025-01-20T10:30:31.327Z', '14fa9525-16de-4033-a891-ff52ccc1a35e', '093ec23f-e233-4702-b025-4e01aef710fc');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('1e6b2e02-bda1-4351-8696-605dc98ee08c', '2023-12-03T14:40:33.507Z', '2024-02-29T09:29:20.260Z', '3bcd62c7-1202-402a-983b-6620479875de', 'b208d8d8-ab56-45f9-bc51-c371633009b3');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('e9799baf-a207-4ac4-a7ef-9496f16ba156', '2025-01-15T20:58:40.552Z', '2023-09-26T14:57:13.127Z', '763f31a4-6dc3-462b-aab4-28b8c14d5d02', '15f721ce-4dc6-4d2a-823d-dc3807f88ddf');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('42b74214-90ef-4eb8-913e-5da888f6ec03', '2024-05-19T03:41:04.803Z', '2023-11-11T03:51:05.971Z', '2dd64820-8bdc-47bd-bfdd-f17b3d28d8ee', '15f721ce-4dc6-4d2a-823d-dc3807f88ddf');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('38cabca8-b731-4ac9-a522-4cac5d214c84', '2023-12-10T01:08:38.631Z', '2023-06-24T10:33:18.724Z', '3bcd62c7-1202-402a-983b-6620479875de', '093ec23f-e233-4702-b025-4e01aef710fc');
    `,
      )
    } catch (error) {
      // ignore
    }

}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
