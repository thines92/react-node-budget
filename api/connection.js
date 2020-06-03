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
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);