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
    work: [],
    education: [],
    projects: [],
    hackathons: [],
    contact: {
      email: "",
      tel: "",
      social: {
        GitHub: { name: "GitHub", url: "", icon: "" },
        LinkedIn: { name: "LinkedIn", url: "", icon: "" },
        X: { name: "X", url: "", icon: "" },
        Youtube: { name: "Youtube", url: "", icon: "" },
      },
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddItem = (key: string, newItem: any) => {
    setFormData({
      ...formData,
      [key]: [...formData[key], newItem],
    });
  };

  const handleRemoveItem = (key: string, index: number) => {
    const newItems = [...formData[key]];
    newItems.splice(index, 1);
    setFormData({ ...formData, [key]: newItems });
  };

  const fillWithTestData = () => {
    setFormData({
      name: "John Doe",
      initials: "JD",
      url: "https://johndoe.com",
      location: "New York, NY",
      locationLink: "https://www.google.com/maps/place/newyork",
      description: "A passionate developer with expertise in full-stack development.",
      summary: "Experienced software engineer with a strong background in developing scalable web applications.",
      avatarUrl: "/avatar.png",
      skills: "JavaScript, React, Node.js, TypeScript, CSS, HTML",
      work: [
        {
          company: "Tech Corp",
          href: "https://techcorp.com",
          badges: ["Software Engineer", "Full-Stack"],
          location: "Remote",
          title: "Lead Developer",
          logoUrl: "/techcorp.png",
          start: "Jan 2020",
          end: "Present",
          description: "Led a team of developers to build scalable web applications using modern technologies.",
        },
      ],
      education: [
        {
          school: "State University",
          href: "https://stateuniversity.com",
          degree: "Bachelor's in Computer Science",
          logoUrl: "/stateuniversity.png",
          start: "2015",
          end: "2019",
        },
      ],
      projects: [
        {
          title: "My Awesome Project",
          href: "https://myawesomeproject.com",
          dates: "Jan 2022 - Present",
          description: "Developed a project management tool used by hundreds of companies.",
          tags: ["JavaScript", "React", "Node.js"],
          image: "/myawesomeproject.png",
        },
      ],
      hackathons: [
        {
          title: "Hackathon 2024",
          dates: "March 23rd - 25th, 2024",
          location: "Remote",
          description: "Developed a mobile app to help local businesses track and optimize their supply chains.",
        },
      ],
      contact: {
        email: "john@doe.com",
        tel: "+1234567890",
        social: {
          GitHub: { name: "GitHub", url: "https://github.com/johndoe", icon: "github" },
          LinkedIn: { name: "LinkedIn", url: "https://linkedin.com/in/johndoe", icon: "linkedin" },
          X: { name: "X", url: "https://x.com/johndoe", icon: "x" },
          Youtube: { name: "Youtube", url: "https://youtube.com/johndoe", icon: "youtube" },
        },
      },
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
      <button
        type="button"
        onClick={fillWithTestData}
        className="mb-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Fill with Test Data
      </button>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label className="block font-medium">Skills (comma separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">Work Experience</h2>
          {formData.work.map((work, index) => (
            <div key={index} className="border p-2 rounded mb-2">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={work.company}
                onChange={(e) => {
                  const newWork = [...formData.work];
                  newWork[index].company = e.target.value;
                  setFormData({ ...formData, work: newWork });
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <input
                type="url"
                name="href"
                placeholder="Company URL"
                value={work.href}
                onChange={(e) => {
                  const newWork = [...formData.work];
                  newWork[index].href = e.target.value;
                  setFormData({ ...formData, work: newWork });
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={work.title}
                onChange={(e) => {
                  const newWork = [...formData.work];
                  newWork[index].title = e.target.value;
                  setFormData({ ...formData, work: newWork });
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={work.location}
                onChange={(e) => {
                  const newWork = [...formData.work];
                  newWork[index].location = e.target.value;
                  setFormData({ ...formData, work: newWork });
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                name="logoUrl"
                placeholder="Logo URL"
                value={work.logoUrl}
                onChange={(e) => {
                  const newWork = [...formData.work];
                  newWork[index].logoUrl = e.target.value;
                  setFormData({ ...formData, work: newWork });
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                name="start"
                placeholder="Start Date"
                value={work.start}
                onChange={(e) => {
                  const newWork = [...formData.work];
                  newWork[index].start = e.target.value;
                  setFormData({ ...formData, work: newWork });
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                name="end"
                placeholder="End Date"
                value={work.end}
                onChange={(e) => {
                  const newWork = [...formData.work];
                  newWork[index].end = e.target.value;
                  setFormData({ ...formData, work: newWork });
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <textarea
                name="description"
                placeholder="Job Description"
                value={work.description}
                onChange={(e) => {
                  const newWork = [...formData.work];
                  newWork[index].description = e.target.value;
                  setFormData({ ...formData, work: newWork });
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              ></textarea>
              <button
                type="button"
                onClick={() => handleRemoveItem("work", index)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              handleAddItem("work", {
                company: "",
                href: "",
                title: "",
                location: "",
                logoUrl: "",
                start: "",
                end: "",
                description: "",
              })
            }
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Work Experience
          </button>
        </div>
        {/* Similar sections for education, projects, and hackathons can be added */}
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
