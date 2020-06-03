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

        // await listDatabases(client);
        // await createListing(client, {
        //     name: "Lovely Loft",
        //     summary: "A charming loft in Paris",
        //     bedrooms: 1,
        //     bathrooms: 1,
        //     _id: 123412345512345
        // })

        // await findOneListingByName(client, "Lovely Loft")

        // await findListingsWithMinimumBedroomsBAthroomsAndMostRecentReviews(client, {
        //     minimumNumberOfBedrooms: 5,
        //     minimumNumberOfBathrooms: 3,
        //     maximumNumberOfResults: 5
        // })

        // await updateListingByName(client, "Cozy Cottage", { bedrooms: 7, beds: 8 })
        await deleteListingByName(client, 'Cozy Cottage');
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

async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function findOneListingByName(client, nameOfListing) {
    result = await client.db("sample_airbnb").collection("listingsAndReviews")
                        .findOne({ name: nameOfListing });
    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}`);
    }
}

async function findListingsWithMinimumBedroomsBAthroomsAndMostRecentReviews(client, {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {
    const cursor = await client.db("sample_airbnb").collection("listingsAndReviews")
    .find({
        bedrooms: { $gte: minimumNumberOfBedrooms },
        bathrooms: { $gte: minimumNumberOfBathrooms }
    })
    .sort({ last_review: -1 })
    .limit(maximumNumberOfResults);

    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms}`)
        results.forEach((result, i) => {
            date = new Date(result.last_review).toDateString();

            console.log();
            console.log(`${i + 1}. name: ${result.name}`)
        })
    } else {
        console.log('No listings found')
    }
}

async function updateListingByName(client, nameOfListing, updatedListing) {
    result = await client.db("sample_airbnb").collection("listingsAndReviews")
            .updateOne({ name: nameOfListing }, { $set: updatedListing }, { upsert: true })

    if (result.upsertedCount > 0) {
        console.log('One document was inserted');
    } else {
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    }
}

async function deleteListingByName(client, nameOfListing) {
    result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne({ name: nameOfListing });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

main().catch(console.error);