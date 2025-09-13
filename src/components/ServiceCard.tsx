export default function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="p-6 rounded-xl border hover:shadow transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 mt-2">{text}</p>
    </article>
  )
}
