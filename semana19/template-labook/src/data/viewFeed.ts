import { connection } from "./connection";

export const viewFeed = async (): Promise<void> => {
  await connection.raw(`
    SELECT p.author_id, p.photo, p.description, p.type, DATE_FORMAT( p.created_at, '%d/%m/%Y') as creationDate, u.name FROM labook_posts p
    INNER JOIN labook_users u ON p.author_id = u.id `);
};
