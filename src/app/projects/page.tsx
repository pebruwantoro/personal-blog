export default function Projects() {
  const projects = [
    {
      title: "Lokasi Intelligence V4.0",
      summary: "Geospatial Intelligence tools to analyze Point of Interest to support the business owner in leveraging their company.",
      role: "Backend Engineer.",
      tech: "REST API, gRPC, Golang, Redis, Kafka, PostgreSQL, ArgoCD, Docker, Azure."
    },
    {
      title: "Kolamku",
      summary: "Internal Dashboard to monitor eFishery users to achieve metrics of 200K Monthly Active Pond.",
      role: "Backend Engineer.",
      tech: "Golang, Redis, RabbitMQ, PostgreSQL, Jaeger, Grafana, Docker, GCP, Kubernetes."
    },
    {
      title: "eFarm",
      summary: "Mobile and Live Streaming Mobile App.",
      role: "Backend Engineer.",
      tech: "REST API, gRPC, Golang, PHP (Laravel), Redis, RabbitMQ, MySQL, Grafana, Docker."
    },
    {
      title: "Audium",
      summary: "A Gallery, Museum, or Art Guide that seeks a more immersive and engaging experience but often feels disconnected from static displays, by delivering dynamic, proximity-based audio content that narrates stories tied to each exhibit as they move through the museum, enhancing their emotional connection to the artwork or artifacts.",
      role: "Tech Lead and iOS Engineer.",
      tech: "SwiftUI, AVFoundation, BLE (Bluetooth Low Energy), Supabase."
    },
    {
      title: "Vocaloom",
      summary: "an interactive storybook app designed to support parents of children with Autism Spectrum Disorder (ASD) in expressive speech therapy at home.",
      role: "Tech Lead and iOS Engineer.",
      tech: "UIKit, Core ML, AVFoundation."
    },
    {
      title: "IDN App",
      summary: "Media and Live Streaming Mobile App.",
      role: "Backend Engineer.",
      tech: "REST API, gRPC, Golang, PHP (Laravel), Redis, RabbitMQ, MySQL, Grafana, Docker."
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 py-20">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/20 rounded-lg shadow-lg p-6 flex flex-col transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.summary}</p>
              <p className="text-gray-400 mb-2"><strong>Role:</strong> {project.role}</p>
              <p className="text-gray-400"><strong>Tech:</strong> {project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}