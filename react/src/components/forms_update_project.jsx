import React, { useState } from "react";
import "./../forms_update_project.css";


const FormsUpdateProject = ({setPopup}) => {
    const [formData, setFormData] = useState({
        idTitle: "",
        description: "",
        completionStatus: false,
        estimatedCompletionDate: "",
        link: ""
    });

    const updateState = () => {
        setPopup(false);
    };

    // Handle form input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new URLSearchParams();
        data.append('message', 'addProject');
        data.append('id', formData.idTitle);
        data.append('title', formData.idTitle);
        data.append('description', formData.description);
        data.append('link', formData.link);
        data.append('status', formData.completionStatus);
        data.append('est', formData.estimatedCompletionDate);

        fetch("https://cchandrew.com/api/", {
        mode: 'cors',
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json',
        },
        })
        .then(data => console.log(data))
        setFormData({
            idTitle: "",
            description: "",
            completionStatus: false,
            estimatedCompletionDate: "",
            link: ""
        });
        updateState();
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Project Title */}
            <div className="form-group">
                <label htmlFor="idTitle">Project Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="idTitle"
                    name="idTitle"
                    value={formData.idTitle}
                    onChange={handleChange}
                    placeholder="Enter project title"
                />
            </div>

            {/* Description */}
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter project description"
                ></textarea>
            </div>
            {/* Link */}
            <div className="form-group">
                <label htmlFor="link">Project Link</label>
                <input
                    type="text"
                    className="form-control"
                    id="link"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    placeholder="Enter project link"
                />
            </div>

            {/* Completion Status */}
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="completionStatus"
                    name="completionStatus"
                    checked={formData.completionStatus}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="completionStatus">
                    Project is complete
                </label>
            </div>

            {/* Estimated Completion Date */}
            <div className="form-group">
                <label htmlFor="estimatedCompletionDate">
                    Estimated Completion Date
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="estimatedCompletionDate"
                    name="estimatedCompletionDate"
                    value={formData.estimatedCompletionDate}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default FormsUpdateProject;
