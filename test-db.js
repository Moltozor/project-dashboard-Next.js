const postgres = require('postgres');

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

sql`SELECT NOW()`.then((res) => {
  console.log('Connexion réussie:', res);
  process.exit(0);
}).catch((err) => {
  console.error('Erreur:', err);
  process.exit(1);
});
