import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Profile Section */}
      <section id="profile" className="container mx-auto px-4 sm:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Image src="/profile.png" alt="Profile Picture" width={150} height={150} className="rounded-full mb-8 shadow-lg bg-white"/>
        </div>
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">
            I love solving problems <span className="text-primary text-glow">with code!</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            I am a seasoned full-stack software engineer with over 4 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://drive.google.com/file/d/1VPWeT3nZvX_m_Mm_TtURA3jONi1M0Kgm/view?usp=sharing" className="border border-primary text-primary font-bold py-3 px-6 rounded-full hover:bg-primary hover:text transition-colors">
            Download CV
          </a>
        </div>
      </section>

      {/* Experience With Section */}
      <section id="experience-with" className="container mx-auto px-4 sm:px-8 py-20 text-center">
        <h2 className="section-title mb-12">EXPERIENCE WITH</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Golang Icon */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full shadow-md bg-go p-2 flex items-center justify-center">
              <Image src="/go-icon.svg" alt="Golang Icon" width={64} height={64} className="invert brightness-0" />
            </div>
            <p className="mt-2 text-sm font-medium">Golang</p>
          </div>

          {/* JavaScript Icon */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full shadow-md bg-js p-2 flex items-center justify-center">
              <Image src="/javascript-icon.svg" alt="JavaScript Icon" width={44} height={44} className="invert brightness-0" />
            </div>
            <p className="mt-2 text-sm font-medium">JavaScript</p>
          </div>

          {/* Node.js Icon */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full shadow-md bg-nodejs p-2 flex items-center justify-center">
              <Image src="/node-icon.svg" alt="Node.js Icon" width={64} height={64} className="invert brightness-0" />
            </div>
            <p className="mt-2 text-sm font-medium">Node.js</p>
          </div>

          {/* Python Icon */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full shadow-md bg-python p-2 flex items-center justify-center">
              <Image src="/python-icon.svg" alt="Python Icon" width={64} height={64} className="invert brightness-0" />
            </div>
            <p className="mt-2 text-sm font-medium">Python</p>
          </div>

          {/* SwiftUI Icon */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full shadow-md bg-swift p-2 flex items-center justify-center">
              <Image src="/swift-icon.svg" alt="SwiftUI Icon" width={44} height={44} className="invert brightness-0" />
            </div>
            <p className="mt-2 text-sm font-medium">SwiftUI</p>
          </div>

          {/* React Icon */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full shadow-md bg-react p-2 flex items-center justify-center">
              <Image src="/react-icon.svg" alt="React Icon" width={64} height={64} className="invert brightness-0" />
            </div>
            <p className="mt-2 text-sm font-medium">React</p>
          </div>

          {/* PHP Icon */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full shadow-md bg-php p-2 flex items-center justify-center">
              <Image src="/php-icon.svg" alt="PHP Icon" width={64} height={64} className="invert brightness-0" />
            </div>
            <p className="mt-2 text-sm font-medium">PHP</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 sm:px-8 py-20">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start mb-12">
            <Image src="/logo-bvt.png" alt="Bhumi Varta Technology Logo" width={70} height={70} className="rounded-full mr-4" />
            <div className="relative border-l-2 border-primary/30 pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold">Bhumi Varta Technology</h3>
              <h4 className="text-xl font-bold">Backend Engineer</h4>
              <p className="text-sm text-primary/80 mb-2">April 2025 – Present</p>
              <p>I improved service atomicity, consistency, isolation, and durability through increasing unit test coverage to at least 80%, while also developing Auth and User Settings for Lokasi Intelligence V4.0 from the ground up and assisting developers with Geospatial analysis feature implementation</p>
            </div>
          </div>
          <div className="flex items-start mb-12">
            <Image src="/logo-efishery.png" alt="eFishery Logo" width={70} height={70} className="rounded-full mr-4" />
            <div className="relative border-l-2 border-primary/30 pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold">eFishery</h3>
              <h4 className="text-xl font-bold">Backend Engineer</h4>
              <p className="text-sm text-primary/80 mb-2">Nov 2022 – Feb 2025</p>
              <p>By increasing unit test coverage to 80% and migrating cloud servers from AWS to GCP, I improved service atomicity, consistency, isolation, and durability while decreasing operational costs from 1 billion to 300 million, additionally building systems that achieved 120K Monthly Active Pond Data, creating Cultivation Report Data features used by 1K users monthly, and supporting the GMV Department in reaching 5 billion per quarter.</p>
            </div>
          </div>
          <div className="flex items-start mb-12">
            <Image src="/logo-apple-academy.png" alt="Apple Developer Academy Logo" width={70} height={70} className="rounded-full mr-4" />
            <div className="relative border-l-2 border-primary/30 pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold">Apple Developer Academy</h3>
              <h4 className="text-xl font-bold">iOS Developer</h4>
              <p className="text-sm text-primary/80 mb-2">Feb 2024 – Dec 2024</p>
              <p>Leveraging Challenge-Based Learning, I developed six Apple-environment applications (iOS, iPadOS, macOS) while extensively exploring technologies such as AVFoundation, CloudKit, SpriteKit, Xcode Cloud, and Unit Testing.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Image src="/logo-idn.png" alt="IDN Media Logo" width={70} height={70} className="rounded-full mr-4" />
            <div className="relative border-l-2 border-primary/30 pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold">IDN Media</h3>
              <h4 className="text-xl font-bold">Software Engineer</h4>
              <p className="text-sm text-primary/80 mb-2">Dec 2021 – Nov 2022</p>
              <p>For the IDN App, I created and implemented IDN Account Features for user management, ensuring seamless API integration through coordination with iOS and Android teams, collaborating with Product Management and System Analysts to meet sprint deadlines, and maintaining error logs and databases across development and beta servers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 sm:px-8 py-20 text-center">
        <h2 className="section-title">Contact</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Email Icon */}
          <a href="mailto:pebruwantoro.doni@gmail.com" className="flex flex-col items-center hover:opacity-75 transition-opacity">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full shadow-md bg-mail p-2 flex items-center justify-center">
                <Image src="/mail-icon.svg" alt="Node.js Icon" width={44} height={44} className="invert brightness-0" />
              </div>
            </div>
          </a>
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/doni-pebruwantoro/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-75 transition-opacity">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full shadow-md bg-linkedin p-2 flex items-center justify-center">
                <Image src="/linkedin-icon.svg" alt="LinkedIn" width={44} height={44} className="invert brightness-0" />
              </div>
            </div>
          </a>
          {/* GitHub Icon */}
          <a href="https://github.com/pebruwantoro" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-75 transition-opacity">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full shadow-md bg-github p-2 flex items-center justify-center">
                <Image src="/github-icon.svg" alt="GitHub" width={44} height={44} className="invert brightness-0" />
              </div>
            </div>
          </a>
          {/* Medium Icon */}
          <a href="https://medium.com/@pebruwantoro.doni" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-75 transition-opacity">
            <div className="w-10 h-10 rounded-full shadow-md bg-medium p-2 flex items-center justify-center">
                <Image src="/medium-icon.svg" alt="GitHub" width={44} height={44} className="invert brightness-0" />
              </div>
          </a>
        </div>
      </section>
    </div>
  );
}
