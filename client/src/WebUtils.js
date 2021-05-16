import $ from "jquery";


class WebUtils {
    constructor() {}

    getAllJobs() {
        console.log("WebUtils:getAllJobs", "called");

        return new Promise(function(fulfill, reject) {
            const url = `http://localhost:5000/api/jobs/`;
                
            const settings = {
                async: true,
                crossDomain: true,
                url,
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                success: fulfill,
                error: reject
            };

            return $.ajax(settings);    
        });
    }
    updateSingleJob(jobId, updates) {
        console.log("WebUtils:updateSingleJob", "called", {jobId, updates});

        return new Promise(function(fulfill, reject) {
            const url = `http://localhost:5000/api/jobs/${jobId}`;
                
            const settings = {
                async: true,
                crossDomain: true,
                url,
                method: "POST",
                data: JSON.stringify({updates}),
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                success: fulfill,
                error: reject
            };

            return $.ajax(settings);    
        });
    }
}

const instance = new WebUtils();

export default instance;