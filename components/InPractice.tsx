import Image from 'next/image';

export function InPractice() {
  return (
    <section className="bg-white px-6 py-16">
      <h2 className="font-heading text-2xl font-bold text-[#2F5D62] text-center mb-10">
        Mira cómo funciona en la práctica
      </h2>

      <div className="space-y-6">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md">
          <Image
            src="https://i.ibb.co/qLh8Vnjd/Chat-GPT-Image-10-de-jul-de-2026-15-09-53.png"
            alt="Tutorial de uso"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="https://i.ibb.co/tp1r9mZS/Chat-GPT-Image-10-de-jul-de-2026-15-48-42.png"
              alt="Material 1"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="https://i.ibb.co/wTW3pmW/Chat-GPT-Image-10-de-jul-de-2026-15-50-18.png"
              alt="Material 2"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="https://i.ibb.co/prw6TgG9/Chat-GPT-Image-10-de-jul-de-2026-16-05-16.png"
              alt="Material 3"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
