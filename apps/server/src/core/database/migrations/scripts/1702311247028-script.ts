import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {

try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('6d8a074b-eda0-427d-80de-833bceb6bfcb', '1Maryse_Mertz@yahoo.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('eaca6082-61e3-4736-b459-457090c09849', '13Kasey_Hagenes@yahoo.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=15', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('c719031f-9228-403d-b117-ed8bcae26497', '19Granville25@gmail.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=21', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d8d9e31d-0a87-4bed-b260-b23287a56338', '25Lorenza1@gmail.com', 'Cathy Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ce95b3b0-77d5-4ece-b8bc-7498500e495d', '31Della_Robel85@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=33', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('0366b6aa-9d27-45d0-9391-7a0fdfdfde36', '37Jany.Kilback@yahoo.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ace8684c-e444-43bc-86c2-4611c5ac383c', '43Earnest52@hotmail.com', 'Cathy Brown', 'https://i.imgur.com/YfJQV5z.png?id=45', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('466a271c-7e8b-4a4c-b42d-b41c94e4abfe', '49Ismael69@gmail.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=51', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('e25aded6-6d47-4fa0-bf8b-4bb66800ecc2', '55Elena.Kulas36@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=57', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7c5a4c25-49c9-459f-aba4-5308f906a402', 'Thank You for Attending', 'We are excited to announce a new event coming up. Stay tuned for more details', 'Admin', '64Zander_Cronin@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', 'd8d9e31d-0a87-4bed-b260-b23287a56338');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('91f245c8-d8eb-4faf-9bbe-a4bc4a700960', 'Thank You for Attending', 'Your event has been updated successfully.', 'Admin', '71Kamryn.Kutch@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', 'ce95b3b0-77d5-4ece-b8bc-7498500e495d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('90510d36-3e23-4120-b5ba-bccbcf40ffdb', 'Event Update', 'We are excited to announce a new event coming up. Stay tuned for more details', 'Event Coordinator', '78Vallie.Bruen@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9bc9bb0a-af23-4fa3-ba47-cc1b8b273c6e', 'Event Cancellation', 'Thank you for attending our event. We hope you had a great time', 'Admin', '85Alanna_Bashirian66@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e484338a-baf9-422b-8caa-cadc9572871d', 'New Event Announcement', 'Your event has been updated successfully.', 'John Doe', '92Rudolph25@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '466a271c-7e8b-4a4c-b42d-b41c94e4abfe');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('742134ab-5234-4eb6-bb11-f75282a9379a', 'Thank You for Attending', 'We are excited to announce a new event coming up. Stay tuned for more details', 'Event Coordinator', '99Rico81@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '466a271c-7e8b-4a4c-b42d-b41c94e4abfe');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9fdcd544-a569-4e7b-b9ae-5ea484620926', 'Event Update', 'Thank you for attending our event. We hope you had a great time', 'Admin', '106Macy.Kirlin@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'ace8684c-e444-43bc-86c2-4611c5ac383c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('90ae26ce-ac3e-4928-8c62-eb6069487cc0', 'New Event Announcement', 'Thank you for attending our event. We hope you had a great time', 'Event Team', '113Amara.Davis79@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', 'ce95b3b0-77d5-4ece-b8bc-7498500e495d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ea5dd8c2-e2d4-4958-b1b9-e446eaab493f', 'Thank You for Attending', 'Thank you for attending our event. We hope you had a great time', 'Jane Smith', '120Demetrius.Kautzer85@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '466a271c-7e8b-4a4c-b42d-b41c94e4abfe');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b5458ba6-8685-4174-8176-516ebb7fc4d4', 'Event Update', 'We regret to inform you that the event has been cancelled.', 'Event Team', '127Ressie.Murray24@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('c0d592b9-21c8-4df8-be42-bc6317dbb1ae', 'Global Marketing Summit', 'A celebration of local artists with exhibitions workshops and live performances.', 'e25aded6-6d47-4fa0-bf8b-4bb66800ecc2');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('6f098a29-86bb-482f-bf59-d0b2f7964644', 'Summer Gala', 'A night of glamour to raise funds for childrens education.', '0366b6aa-9d27-45d0-9391-7a0fdfdfde36');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('69953c4a-72f8-45a7-a247-5d0e6b37f9fb', 'Local Art Festival', 'A celebration of local artists with exhibitions workshops and live performances.', '466a271c-7e8b-4a4c-b42d-b41c94e4abfe');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('8fabf0af-bc96-4e4d-89cb-6815f870a67d', 'Tech Conference 2023', 'A night of glamour to raise funds for childrens education.', 'e25aded6-6d47-4fa0-bf8b-4bb66800ecc2');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('d422098a-5ea7-4887-8faf-7b710f40e2fb', 'Local Art Festival', 'The biggest tech conference of the year featuring keynote speakers from top tech companies.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('080a0a72-45ef-4b74-b00d-5e3326998096', 'Annual Charity Ball', 'A celebration of local artists with exhibitions workshops and live performances.', 'eaca6082-61e3-4736-b459-457090c09849');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('b635a79e-1794-4551-997d-f09854c7de4b', 'Summer Gala', 'A celebration of local artists with exhibitions workshops and live performances.', 'e25aded6-6d47-4fa0-bf8b-4bb66800ecc2');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('499acc73-0f02-4609-a510-38611bb4ef19', 'Global Marketing Summit', 'A celebration of local artists with exhibitions workshops and live performances.', 'e25aded6-6d47-4fa0-bf8b-4bb66800ecc2');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('c567b561-9b68-43d9-8b4b-6397fc694a3e', 'Global Marketing Summit', 'The biggest tech conference of the year featuring keynote speakers from top tech companies.', 'eaca6082-61e3-4736-b459-457090c09849');
INSERT INTO "event" ("id", "title", "description", "userId") VALUES ('48ba7aa9-0022-4d5d-9cc4-f14ac115e61f', 'Summer Gala', 'The biggest tech conference of the year featuring keynote speakers from top tech companies.', '0366b6aa-9d27-45d0-9391-7a0fdfdfde36');

INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('aa8dd874-f518-43a8-8b75-59ff81ef0111', 'John', 'Doe', '163Zane_Bechtelar96@hotmail.com', 'checked in', 'c0d592b9-21c8-4df8-be42-bc6317dbb1ae');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('1b764847-e4a8-4ff1-a7d2-7bf2caebe44c', 'Emily', 'Johnson', '168Roxanne72@gmail.com', 'checked in', '080a0a72-45ef-4b74-b00d-5e3326998096');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('a5b07eac-171d-4318-970f-f3f2e3667fee', 'Alex', 'Johnson', '173Agustina0@gmail.com', 'pending', '48ba7aa9-0022-4d5d-9cc4-f14ac115e61f');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('549ab8c5-c797-4455-b192-c4de357a8ec3', 'Michael', 'Johnson', '178Stanley45@hotmail.com', 'pending', 'c567b561-9b68-43d9-8b4b-6397fc694a3e');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('7ffc1039-07bb-4314-a8f9-c3b75ec1353e', 'Sarah', 'Smith', '183Joel.Bashirian88@gmail.com', 'checked in', '69953c4a-72f8-45a7-a247-5d0e6b37f9fb');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('82d352fb-9b57-443f-bf5e-5e97080b55fb', 'Sarah', 'Johnson', '188Scottie_Hand@hotmail.com', 'checked out', '69953c4a-72f8-45a7-a247-5d0e6b37f9fb');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('61ca42df-cfa6-4cbc-8ca3-e0b78c036331', 'Michael', 'Johnson', '193Elbert_McCullough81@gmail.com', 'checked in', 'c0d592b9-21c8-4df8-be42-bc6317dbb1ae');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('e6e92f13-6b31-4264-8b10-a7a304d7f7e2', 'Michael', 'Doe', '198Avis_Abbott@gmail.com', 'pending', '6f098a29-86bb-482f-bf59-d0b2f7964644');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('aa0781de-1319-4c93-b0e5-e7cacfef3c6b', 'Michael', 'Williams', '203Oma10@hotmail.com', 'pending', '69953c4a-72f8-45a7-a247-5d0e6b37f9fb');
INSERT INTO "attendee" ("id", "firstName", "lastName", "email", "status", "eventId") VALUES ('8896404c-dc66-4061-9c3a-d1c02136790a', 'Alex', 'Doe', '208Vicente.Jones@gmail.com', 'checked in', 'd422098a-5ea7-4887-8faf-7b710f40e2fb');

INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('a2b09ceb-0660-460c-b2e1-96a43c6f2dec', '2024-01-01T14:27:05.239Z', '2024-04-09T01:17:19.619Z', 'c0d592b9-21c8-4df8-be42-bc6317dbb1ae', 'e6e92f13-6b31-4264-8b10-a7a304d7f7e2');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('01754467-ce46-488b-a038-23b0df5f8a45', '2024-11-10T16:21:06.762Z', '2024-09-15T06:18:15.762Z', '499acc73-0f02-4609-a510-38611bb4ef19', '1b764847-e4a8-4ff1-a7d2-7bf2caebe44c');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('19e72486-2b82-4598-b349-539ab31be449', '2024-07-30T17:26:47.065Z', '2024-03-11T01:10:23.597Z', 'c567b561-9b68-43d9-8b4b-6397fc694a3e', '61ca42df-cfa6-4cbc-8ca3-e0b78c036331');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('efd76080-4f55-446b-b855-ca1979486fe1', '2024-06-12T17:35:53.960Z', '2024-07-03T15:48:29.484Z', 'd422098a-5ea7-4887-8faf-7b710f40e2fb', '7ffc1039-07bb-4314-a8f9-c3b75ec1353e');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('e1fc2468-78fa-422c-9f09-fa362535d43e', '2024-06-07T00:07:37.909Z', '2023-08-29T14:29:05.414Z', 'd422098a-5ea7-4887-8faf-7b710f40e2fb', '1b764847-e4a8-4ff1-a7d2-7bf2caebe44c');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('172ad002-0b86-453e-8949-055359eb34b3', '2024-07-14T22:18:44.157Z', '2024-06-01T21:02:48.654Z', '69953c4a-72f8-45a7-a247-5d0e6b37f9fb', 'a5b07eac-171d-4318-970f-f3f2e3667fee');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('b1998984-68fc-44a1-a15f-973f8450434a', '2024-09-28T10:37:18.261Z', '2023-11-10T04:23:36.553Z', '69953c4a-72f8-45a7-a247-5d0e6b37f9fb', 'aa8dd874-f518-43a8-8b75-59ff81ef0111');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('0f60139e-2e16-465b-b5a4-a0be7f2ec65a', '2024-08-15T03:20:01.550Z', '2025-01-03T10:19:39.365Z', '8fabf0af-bc96-4e4d-89cb-6815f870a67d', '82d352fb-9b57-443f-bf5e-5e97080b55fb');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('ff68af5d-b56c-4e9d-b82c-271cf4d704fa', '2023-05-01T03:42:30.321Z', '2025-02-11T19:19:16.857Z', '080a0a72-45ef-4b74-b00d-5e3326998096', '61ca42df-cfa6-4cbc-8ca3-e0b78c036331');
INSERT INTO "eventattendee" ("id", "checkInTime", "checkOutTime", "eventId", "attendeeId") VALUES ('5799d8fd-808a-42e7-87aa-1b7094824c55', '2023-07-30T13:23:36.041Z', '2025-01-31T19:59:28.684Z', '8fabf0af-bc96-4e4d-89cb-6815f870a67d', '61ca42df-cfa6-4cbc-8ca3-e0b78c036331');
    `,
      )
    } catch (error) {
      // ignore
    }

}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}