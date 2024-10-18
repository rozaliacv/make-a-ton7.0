import createRegisteredusersTable from "./registered_users/init.js";
const initDatabase = async()=> {    
    await createRegisteredusersTable();
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