const {
    MongoClient
} = require('mongodb');

async function main() {
    const uri = 'mongodb+srv://thines92:Aidran001@cluster0-t6myq.mongodb.net/test?retryWrites=true&w=majority'

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log('Databases:');
    databasesList.databases.forEach(db => console.log(` = ${db.name}`));
}

main().catch(console.error);