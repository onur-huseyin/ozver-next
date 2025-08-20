export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gray-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">İletişim sayfası yükleniyor...</p>
      </div>
    </div>
  );
}
