export default function TeamCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <article className="text-center">
      <div className="aspect-square overflow-hidden rounded-xl border">
        <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <h3 className="mt-2 font-semibold">{name}</h3>
      <p className="text-sm text-slate-600">{role}</p>
    </article>
  )
}
