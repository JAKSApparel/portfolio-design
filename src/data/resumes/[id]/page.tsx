import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs';

export default async function ResumePage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Load the corresponding resume data
  const filePath = path.join(process.cwd(), 'src/data/resumes', `${id}.tsx`);

  if (!fs.existsSync(filePath)) {
    notFound(); // Trigger a 404 if the file doesn't exist
  }

  const { DATA } = await import(filePath);

  return (
    <div>
      <h1>{DATA.name}</h1>
      <p>{DATA.description}</p>
      {/* Render other data as needed */}
    </div>
  );
}
