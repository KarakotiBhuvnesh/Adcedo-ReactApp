export default function ProjectCard({ title, image }: { title: string; image: string }) {
  return (
    <figure className="rounded-xl overflow-hidden border">
      <img src={image} alt={title} className="w-full h-64 object-cover" loading="lazy" />
      <figcaption className="p-3 text-sm">{title}</figcaption>
    </figure>
  )
}
