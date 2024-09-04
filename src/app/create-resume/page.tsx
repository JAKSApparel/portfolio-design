// app/create-resume/page.tsx

import ResumeForm from "@/components/resume-form";

export default function CreateResumePage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create Your Resume</h1>
      <p className="mb-4">
        Use the form below to fill in the details of your resume and get started.
        You can customize the sections and export the resume when you're ready.
      </p>
      <ResumeForm />
    </div>
  );
}
