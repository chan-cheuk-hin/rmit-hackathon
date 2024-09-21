import React, { useState } from "react";
import "./../forms_update_project.css";

const FormsUpdateProject = () => {
    const [formData, setFormData] = useState({
        idTitle: "",
        description: "",
        completionStatus: false,
        estimatedCompletionDate: "",
    });

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
        // Process the formData here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ID Title */}
            <div className="form-group">
                <label htmlFor="idTitle">ID Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="idTitle"
                    name="idTitle"
                    value={formData.idTitle}
                    onChange={handleChange}
                    placeholder="Enter project ID title"
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
