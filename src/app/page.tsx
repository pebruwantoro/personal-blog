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
          <a href="https://www.linkedin.com/in/doni-pebruwantoro/" target="_blank" rel="noopener noreferrer" className="border border-primary text-primary font-bold py-3 px-6 rounded-full hover:bg-primary hover:text transition-colors">
            Get in Touch
          </a>
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
            <img src="https://placehold.co/80x80/00ADD8/FFFFFF?text=Go" alt="Golang Icon" className="w-16 h-16 rounded-full shadow-md bg-gray-700 p-2" />
            <p className="mt-2 text-sm font-medium">Golang</p>
          </div>
          {/* JavaScript Icon */}
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/80x80/323330/F7DF1E?text=JS" alt="JavaScript Icon" className="w-16 h-16 rounded-full shadow-md bg-gray-700 p-2" />
            <p className="mt-2 text-sm font-medium">JavaScript</p>
          </div>
          {/* Node.js Icon */}
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/80x80/333333/68A063?text=Node" alt="Node.js Icon" className="w-16 h-16 rounded-full shadow-md bg-gray-700 p-2" />
            <p className="mt-2 text-sm font-medium">Node.js</p>
          </div>
          {/* Python Icon */}
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/80x80/3776AB/FFD43B?text=Py" alt="Python Icon" className="w-16 h-16 rounded-full shadow-md bg-gray-700 p-2" />
            <p className="mt-2 text-sm font-medium">Python</p>
          </div>
          {/* SwiftUI Icon */}
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/80x80/F05138/FFFFFF?text=SwiftUI" alt="SwiftUI Icon" className="w-16 h-16 rounded-full shadow-md bg-gray-700 p-2" />
            <p className="mt-2 text-sm font-medium">SwiftUI</p>
          </div>
          {/* React Icon */}
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/80x80/61DAFB/20232A?text=React" alt="React Icon" className="w-16 h-16 rounded-full shadow-md bg-gray-700 p-2" />
            <p className="mt-2 text-sm font-medium">React</p>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 rounded-full shadow-md bg-gray-700 p-2 text-white">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <p className="mt-2 text-sm font-medium">Email</p>
          </a>
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/doni-pebruwantoro/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 rounded-full shadow-md bg-gray-700 p-2 text-white">
              <path fillRule="evenodd" d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764c.967 0 1.75.79 1.75 1.764s-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" clipRule="evenodd" />
            </svg>
            <p className="mt-2 text-sm font-medium">LinkedIn</p>
          </a>
          {/* GitHub Icon */}
          <a href="https://github.com/pebruwantoro" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 rounded-full shadow-md bg-gray-700 p-2 text-white">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.165 6.839 9.48.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.618.069-.606.069-.606 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.91.832.092-.647.35-1.089.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.253-.448-1.27.097-2.659 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.701.114 2.503.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.389.202 2.406.097 2.659.64.698 1.029 1.591 1.029 2.682 0 3.841-2.339 4.687-4.566 4.935.359.308.678.915.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .267.18.579.688.481C20.142 20.162 23 16.416 23 12c0-5.523-4.477-9.75-9.75-9.75Z" clipRule="evenodd" />
            </svg>
            <p className="mt-2 text-sm font-medium">GitHub</p>
          </a>
        </div>
      </section>
    </div>
  );
}
