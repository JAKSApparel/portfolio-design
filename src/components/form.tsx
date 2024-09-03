"use client";

import { useState } from "react";

export default function CreateResumePage() {
  const [formData, setFormData] = useState({
    name: "",
    initials: "",
    url: "",
    location: "",
    locationLink: "",
    description: "",
    summary: "",
    avatarUrl: "",
    skills: "",
    navbar: [],
    contact: {
      email: "",
      tel: "",
      social: {
        GitHub: { name: "GitHub", url: "", icon: "" },
        LinkedIn: { name: "LinkedIn", url: "", icon: "" },
        X: { name: "X", url: "", icon: "" },
        Youtube: { name: "Youtube", url: "", icon: "" },
        email: { name: "Send Email", url: "", icon: "" },
      },
    },
    work: [],
    education: [],
    projects: [],
    hackathons: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/create-resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Resume created successfully!");
    } else {
      alert("Failed to create resume.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Your Resume</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Initials</label>
          <input
            type="text"
            name="initials"
            value={formData.initials}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Website URL</label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Location Link</label>
          <input
            type="url"
            name="locationLink"
            value={formData.locationLink}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Avatar URL</label>
          <input
            type="text"
            name="avatarUrl"
            value={formData.avatarUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Skills (comma-separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Social Media Links */}
        <h2 className="text-xl font-semibold">Social Links</h2>
        <div>
          <label className="block font-medium">GitHub URL</label>
          <input
            type="url"
            name="contact.social.GitHub.url"
            value={formData.contact.social.GitHub.url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">LinkedIn URL</label>
          <input
            type="url"
            name="contact.social.LinkedIn.url"
            value={formData.contact.social.LinkedIn.url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">X URL</label>
          <input
            type="url"
            name="contact.social.X.url"
            value={formData.contact.social.X.url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Youtube URL</label>
          <input
            type="url"
            name="contact.social.Youtube.url"
            value={formData.contact.social.Youtube.url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Work Experience */}
        <h2 className="text-xl font-semibold">Work Experience</h2>
        {/* Add multiple work experiences here */}
        <div>
          <label className="block font-medium">Company</label>
          <input
            type="text"
            name="work[0].company"
            value={formData.work[0]?.company || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="work[0].location"
            value={formData.work[0]?.location || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="work[0].title"
            value={formData.work[0]?.title || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Logo URL</label>
          <input
            type="text"
            name="work[0].logoUrl"
            value={formData.work[0]?.logoUrl || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Start Date</label>
          <input
            type="text"
            name="work[0].start"
            value={formData.work[0]?.start || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">End Date</label>
          <input
            type="text"
            name="work[0].end"
            value={formData.work[0]?.end || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="work[0].description"
            value={formData.work[0]?.description || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>

        {/* Similar sections for education, projects, and hackathons */}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Resume
        </button>
      </form>
    </div>
  );
}
