import { Cloud, Lock, RefreshCw, Fingerprint } from 'lucide-react';

const features = [
  {
    name: 'Easy Resume Creation',
    description:
      'Generate professional resumes with just a few clicks using our user-friendly interface.',
    icon: Cloud,
  },
  {
    name: 'Customizable Templates',
    description:
      'Choose from a variety of templates to match your style and the job you are applying for.',
    icon: Lock,
  },
  {
    name: 'Instant PDF Export',
    description:
      'Download your resume in PDF format instantly, ready to send to potential employers.',
    icon: RefreshCw,
  },
  {
    name: 'Secure Data',
    description:
      'Your personal data is securely stored and only accessible to you.',
    icon: Fingerprint,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen space-y-10 px-6">
      <section className="pt-14 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Welcome to Resupage
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          The easiest way to create professional resumes. Start building your career today.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-opacity-90"
          >
            Get Started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-foreground">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-12">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-16">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <feature.icon aria-hidden="true" className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold leading-8 text-foreground">
              {feature.name}
            </h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto text-center py-24">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What Our Users Say
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-12">
          {/* Replace this with actual testimonials */}
          <blockquote className="text-lg font-semibold text-muted-foreground">
            <p>"Resupage made it so easy to create a stunning resume. I got the job I wanted!"</p>
            <footer className="mt-4 text-sm text-foreground">- Jane Doe, Marketing Specialist</footer>
          </blockquote>
          <blockquote className="text-lg font-semibold text-muted-foreground">
            <p>"The customizable templates are a game-changer. Highly recommend Resupage!"</p>
            <footer className="mt-4 text-sm text-foreground">- John Smith, Software Engineer</footer>
          </blockquote>
        </div>
      </section>

      <section className="max-w-7xl mx-auto text-center py-24">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Create Your Resume Now
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Join thousands of professionals who have already built their resumes with Resupage.
        </p>
        <a
          href="/create-resume"
          className="mt-10 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-opacity-90"
        >
          Start Your Resume
        </a>
        
      </section>
    </main>
  );
}
