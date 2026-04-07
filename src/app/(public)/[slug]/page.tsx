import Link from "next/link";

type LandingPageProps = {
  params: Promise<{ slug: string }>;
};

const services = [
  {
    name: "Corte clásico",
    duration: "45 min",
    price: "$18",
    description: "Limpieza de contornos, acabado con producto y asesoría de estilo.",
    dark: false,
  },
  {
    name: "Corte + barba",
    duration: "60 min",
    price: "$25",
    description: "Corte completo con perfilado de barba y toalla caliente.",
    dark: true,
  },
  {
    name: "Afeitado premium",
    duration: "30 min",
    price: "$15",
    description: "Afeitado tradicional con crema premium y loción final.",
    dark: false,
  },
];

const team = [
  { name: "Alejandro", role: "Master Barber" },
  { name: "Matias", role: "Fade Specialist" },
  { name: "Sergio", role: "Beard Artist" },
];

const availableSlots = ["10:00", "11:30", "13:00", "15:30", "17:00", "18:30"];

const testimonials = [
  { name: "Carlos M.", quote: "La mejor barbería del barrio. Siempre salgo impecable." },
  { name: "Andrés P.", quote: "Reservar online me ahorra tiempo y el servicio es top." },
  { name: "Julián R.", quote: "Excelente atención, ambiente cuidado y puntualidad total." },
];

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params;

  return (
    /*
     * El hero rompe el max-w-6xl del layout con negative margin.
     * El resto de las secciones se mantienen dentro del flujo normal.
     */
    <div className="space-y-20 pb-8">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      {/*
        Hack full-bleed: saca el hero del padding/max-width del <main>
        para que ocupe todo el ancho de la ventana.
      */}
      <section className="-mx-6 -mt-10 sm:-mt-14">

        {/* MOBILE: video arriba, texto + stats abajo */}
        <div className="md:hidden">
          {/* Video */}
          <div className="relative w-full overflow-hidden bg-black" style={{ height: "56vw", minHeight: 220 }}>
            <video
              autoPlay muted loop playsInline
              className="h-full w-full object-cover opacity-90"
              src="https://video.wixstatic.com/video/5d3a2a_196d0b31232e4c658ab94f9cb876282b/720p/mp4/file.mp4"
            />
            <span className="absolute bottom-3 left-3 bg-black/75 px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] uppercase text-white">
              Reserva online · Sin esperas
            </span>
          </div>

          {/* Texto */}
          <div className="border-b border-black/10 bg-white px-6 py-8">
            <div className="mb-4 h-px w-8 bg-black" />
            <p className="mb-3 text-[9px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
              San Miguel · Barbería
            </p>
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-black">
              Redefi&shy;niendo<br />el corte
            </h1>
            <Link
              href={`/${slug}/reservar`}
              className="mt-6 inline-block bg-black px-6 py-3 text-[10px] font-bold tracking-[0.15em] uppercase text-white"
            >
              Reservar turno
            </Link>
          </div>

          {/* Stats mobile */}
          <div className="grid grid-cols-2 gap-px bg-black/10">
            <div className="bg-neutral-50 px-6 py-5">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-neutral-400">Clientes</p>
              <p className="mt-1 text-4xl font-black tracking-tight">+2K</p>
              <p className="mt-1 text-[9px] tracking-widest uppercase text-neutral-400">Atendidos</p>
            </div>
            <div className="bg-neutral-900 px-6 py-5 text-white">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/40">Promedio</p>
              <p className="mt-1 text-4xl font-black tracking-tight">4.9</p>
              <p className="mt-1 text-[9px] tracking-widest uppercase text-white/40">Puntuación</p>
            </div>
          </div>
        </div>

        {/* DESKTOP: grid editorial 3 columnas */}
        <div className="hidden md:block">
          <div
            className="grid gap-px bg-neutral-300"
            style={{ gridTemplateColumns: "1fr 1.6fr 1fr", gridTemplateRows: "380px 260px" }}
          >
            {/* Col 1 fila 1: texto hero */}
            <div className="flex flex-col justify-end bg-white px-10 py-10">
              <div className="mb-4 h-px w-8 bg-black" />
              <p className="mb-3 text-[9px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
                San Miguel · Barbería
              </p>
              <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-black xl:text-6xl">
                Redefi<br />niendo<br />el corte
              </h1>
            </div>

            {/* Col 2-3 fila 1: video */}
            <div
              className="relative overflow-hidden bg-black"
              style={{ gridColumn: "2 / 4" }}
            >
              <video
                autoPlay muted loop playsInline
                className="h-full w-full object-cover opacity-90"
                src="https://video.wixstatic.com/video/5d3a2a_196d0b31232e4c658ab94f9cb876282b/720p/mp4/file.mp4"
              />
              <span className="absolute bottom-5 left-5 bg-black/80 px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                Reserva online · Sin esperas
              </span>
            </div>

            {/* Col 1 fila 2: stat clientes */}
            <div className="flex flex-col justify-center bg-neutral-50 px-10 py-8">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-neutral-400">Clientes</p>
              <p className="mt-2 text-6xl font-black leading-none tracking-tight">+2K</p>
              <p className="mt-2 text-[9px] tracking-widest uppercase text-neutral-400">Atendidos</p>
            </div>

            {/* Col 2 fila 2: stat puntuación */}
            <div className="flex flex-col justify-center bg-neutral-900 px-10 py-8 text-white">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/40">Promedio</p>
              <p className="mt-2 text-6xl font-black leading-none tracking-tight">4.9</p>
              <p className="mt-2 text-[9px] tracking-widest uppercase text-white/40">Puntuación</p>
            </div>

            {/* Col 3 fila 2: horario + CTA */}
            <div className="flex flex-col justify-center bg-stone-100 px-10 py-8">
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-neutral-400">Horario</p>
              <p className="mt-2 text-2xl font-black uppercase tracking-tight">Lun – Sáb</p>
              <p className="mt-1 text-[9px] tracking-widest uppercase text-neutral-500">8:00 AM – 8:00 PM</p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                Tres especialistas, un espacio cuidado y puntualidad garantizada.
              </p>
              <Link
                href={`/${slug}/reservar`}
                className="mt-5 inline-block bg-black px-5 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase text-white transition hover:opacity-80 w-fit"
              >
                Reservar turno
              </Link>
            </div>
          </div>

          {/* Franja servicios — desktop */}
          <div
            className="grid gap-px bg-neutral-300"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {services.map((s) => (
              <div
                key={s.name}
                className={`px-10 py-6 ${s.dark ? "bg-neutral-900 text-white" : "bg-white"}`}
              >
                <p className={`text-[9px] font-bold tracking-[0.18em] uppercase ${s.dark ? "text-white/40" : "text-neutral-400"}`}>
                  {s.name}
                </p>
                <p className="mt-2 text-3xl font-black tracking-tight">{s.price}</p>
                <p className={`mt-1 text-[9px] tracking-widest uppercase ${s.dark ? "text-white/40" : "text-neutral-400"}`}>
                  {s.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FIN HERO ──────────────────────────────────────────────────── */}


      {/* ── RESERVAS ─────────────────────────────────────────────────── */}
      <section
        id="reservas"
        className="grid gap-6 rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,white,color-mix(in_srgb,var(--tenant-accent)_12%,white))] p-6 shadow-xl shadow-black/5 lg:grid-cols-[1.2fr_1fr] lg:p-8"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tenant-muted)]">
            Reservas rápidas
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Agenda tu cita con una vista clara
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--tenant-muted)]">
            Elige servicio, fecha y hora en un flujo visual más limpio y directo.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { title: "Servicio", tone: "from-sky-50 to-cyan-50 border-sky-200" },
              { title: "Fecha", tone: "from-amber-50 to-orange-50 border-amber-200" },
              { title: "Hora", tone: "from-emerald-50 to-lime-50 border-emerald-200" },
            ].map((item, index) => (
              <div key={item.title} className={`rounded-2xl border bg-gradient-to-br ${item.tone} p-4`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--tenant-muted)]">
                  Paso {index + 1}
                </p>
                <p className="mt-2 text-sm font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
          <Link
            href={`/${slug}/reservar`}
            className="mt-6 inline-flex rounded-full bg-[var(--tenant-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
          >
            Empezar reserva
          </Link>
        </div>
        <aside className="rounded-3xl border border-black/10 bg-white/80 p-5 backdrop-blur">
          <p className="text-sm font-semibold">Hoy hay disponibilidad</p>
          <p className="mt-1 text-xs text-[var(--tenant-muted)]">Horarios de ejemplo</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {availableSlots.map((slot, index) => (
              <span
                key={slot}
                className={`rounded-xl border px-2 py-2 text-center text-xs font-semibold ${
                  index % 2 === 0
                    ? "border-black/10 bg-white"
                    : "border-[var(--tenant-primary)]/20 bg-[color:color-mix(in_srgb,var(--tenant-primary)_9%,white)]"
                }`}
              >
                {slot}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-[var(--tenant-muted)]">
            Los horarios reales se verán al conectar la disponibilidad del negocio.
          </p>
        </aside>
      </section>

      {/* ── SERVICIOS ────────────────────────────────────────────────── */}
      <section id="servicios" className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tenant-muted)]">
            Servicios
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Lo más solicitado</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.name}
              className={`group rounded-3xl border p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-2xl ${
                index === 0
                  ? "border-sky-200 bg-gradient-to-br from-white to-sky-50"
                  : index === 1
                    ? "border-amber-200 bg-gradient-to-br from-white to-amber-50"
                    : "border-emerald-200 bg-gradient-to-br from-white to-emerald-50"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--tenant-primary)] shadow-sm">
                  {service.duration}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--tenant-muted)]">{service.description}</p>
              <p className="mt-5 text-2xl font-bold text-[var(--tenant-primary)]">{service.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── EQUIPO ───────────────────────────────────────────────────── */}
      <section id="equipo" className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tenant-muted)]">
            Equipo
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Profesionales de la casa</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, index) => (
            <article
              key={member.name}
              className={`rounded-3xl border p-6 shadow-lg shadow-black/5 ${
                index === 0
                  ? "border-sky-200 bg-gradient-to-br from-white to-sky-50"
                  : index === 1
                    ? "border-rose-200 bg-gradient-to-br from-white to-rose-50"
                    : "border-amber-200 bg-gradient-to-br from-white to-amber-50"
              }`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--tenant-primary)] text-base font-bold text-white shadow-lg shadow-black/10">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-[var(--tenant-muted)]">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--tenant-muted)]">
                Especialista en cortes modernos, perfiles limpios y acabados que respetan tu estilo.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIOS ──────────────────────────────────────────────── */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tenant-muted)]">
            Testimonios
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`rounded-3xl border p-6 shadow-lg shadow-black/5 ${
                index === 0
                  ? "border-sky-200 bg-gradient-to-br from-white to-sky-50"
                  : index === 1
                    ? "border-violet-200 bg-gradient-to-br from-white to-violet-50"
                    : "border-emerald-200 bg-gradient-to-br from-white to-emerald-50"
              }`}
            >
              <p className="text-sm leading-relaxed text-[var(--tenant-muted)]">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="mt-4 text-sm font-semibold">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section className="rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,var(--tenant-primary),color-mix(in_srgb,var(--tenant-primary)_72%,var(--tenant-accent)))] p-8 text-white shadow-2xl shadow-black/20 sm:p-10">
        <h2 className="text-3xl font-bold tracking-tight">¿Listo para tu próximo look?</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
          Agenda ahora y asegura tu horario preferido.
        </p>
        <Link
          href={`/${slug}/reservar`}
          className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--tenant-primary)] transition hover:opacity-90"
        >
          Reservar mi turno
        </Link>
      </section>
    </div>
  );
}