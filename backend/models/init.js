import createRegisteredusersTable from "./registered_users/init.js";
import createDonorsTable from "./donors/init.js";
import createDonationsTable from "./donations/init.js";
import createDonordetailsTable from "./donor_details/init.js";
import createPostsTable from "./posts/init.js";
import createRequirementsTable from "./requirements/init.js";
import createCategoriesTable from "./categories/init.js";

const initDatabase = async()=> {    
    await createRegisteredusersTable();
    await createDonorsTable();
    await createCategoriesTable();
    await createPostsTable();
    await createRequirementsTable();
    await createDonordetailsTable();
    await createDonationsTable();
}


const startInitialisation = async() => {
    console.log("attempting database initialization");
    try {
        await initDatabase();
        console.log("database initialization successful");
        process.exit(0);
    }catch (error) {
        console.error("database initialization failed:",error.message);
        process.exit(1);
    }
};

startInitialisation();