const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require("body-parser");


const {getAllJobs, updateJob} = require("./controllers/jobs");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json({ limit: "25mb", type: "*/*" }));


// Put all API endpoints under '/api'

// endpoint to update a single job
app.post('/api/jobs/:jobId', async (req, res) => {
    console.log(`Jobs updater called`);
    const {jobId} = req.params;
    
    const {updates} = req.body;
    console.log(`Jobs updater called`);
    updateJob(jobId, updates);
    res.json({payload: "successfull"});
});

// endpoint to get all jobs
app.get('/api/jobs', async (req, res) => {
    console.log(`Jobs fetcher called`);
    const jobs = await getAllJobs().catch(error => {
        console.log(`Jobs fetcher failed`, error);

    });
    console.log(`Jobs fetcher finished`, jobs.length);

    res.json({payload: jobs});
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`JOBS listening on ${port}`);