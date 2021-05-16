
const {database} = require("../config");

// gets all jobs from the db
async function getAllJobs() {
    console.log("dattabase:getAllJobs", "called")

    const jobs = await database.collection("jobs").get().then(qs => {
        return qs.docs.map(doc => ({
            ...doc.data(),
            _id: doc.id
        }))
    }).catch(error => {
        console.log("dattabase:getAllJobs", "failed", error);

    });
    console.log("dattabase:getAllJobs", "finished")

    return jobs;
}

// updates a single job on the db
async function updateJob(jobId, updates) {
    await database.collection("jobs")
        .doc(jobId)
        .update(updates)

    return "Successfull";
}


module.exports = {
    getAllJobs,
    updateJob
}