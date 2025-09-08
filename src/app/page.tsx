import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">FitCoach Pro</div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#accueil"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#tarifs"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Tarifs
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Consultation gratuite
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="accueil"
        className="pt-16 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transformez votre
                <span className="text-blue-600 block">corps et votre vie</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Coaching sportif personnalisé pour atteindre vos objectifs.
                Programmes sur mesure, suivi individualisé et résultats
                garantis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Commencer maintenant
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Voir mes résultats
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1616279969096-54b228f5f103?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Coach sportif en action"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mes Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des programmes adaptés à chaque objectif pour vous accompagner
              vers la réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Perte de poids"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Perte de Poids
              </h3>
              <p className="text-gray-600 mb-4">
                Programme personnalisé pour une perte de poids durable et saine
              </p>
              <div className="text-blue-600 font-semibold">
                À partir de 150€/mois
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Prise de muscle"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prise de Muscle
              </h3>
              <p className="text-gray-600 mb-4">
                Développez votre masse musculaire avec des programmes ciblés
              </p>
              <div className="text-blue-600 font-semibold">
                À partir de 180€/mois
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Rééquilibrage alimentaire"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Rééquilibrage
              </h3>
              <p className="text-gray-600 mb-4">
                Apprenez à bien manger pour maintenir votre forme optimale
              </p>
              <div className="text-blue-600 font-semibold">
                À partir de 120€/mois
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Suivi en ligne"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Suivi en Ligne
              </h3>
              <p className="text-gray-600 mb-4">
                Coaching à distance avec suivi quotidien et programmes adaptés
              </p>
              <div className="text-blue-600 font-semibold">
                À partir de 100€/mois
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Tarifs
            </h2>
            <p className="text-xl text-gray-600">
              Des formules adaptées à tous les budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Basic */}
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                100€<span className="text-lg text-gray-500">/mois</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Programme d&apos;entraînement personnalisé
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Suivi hebdomadaire
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Conseils nutritionnels de base
                </li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Choisir ce plan
              </button>
            </div>

            {/* Plan Premium */}
            <div className="border-2 border-blue-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Populaire
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                180€<span className="text-lg text-gray-500">/mois</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Programme 100% sur mesure
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Suivi quotidien
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Plan nutritionnel complet
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Appels vidéo hebdomadaires
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Choisir ce plan
              </button>
            </div>

            {/* Plan Elite */}
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Elite</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                300€<span className="text-lg text-gray-500">/mois</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Coaching intensif 1-to-1
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Disponibilité 7j/7
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Plan nutritionnel + compléments
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Séances en présentiel (si local)
                </li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Choisir ce plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Témoignages
            </h2>
            <p className="text-xl text-gray-600">Ce que disent mes clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Marie, 32 ans</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;J&apos;ai perdu 12kg en 4 mois grâce au programme
                personnalisé. L&apos;accompagnement était parfait, je recommande
                vivement !&quot;
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Julien, 28 ans</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Coaching au top ! J&apos;ai gagné 8kg de muscle en 6 mois.
                Les conseils nutrition ont fait toute la différence.&quot;
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sophie, 45 ans</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Enfin un coach qui s&apos;adapte à mon emploi du temps.
                Résultats visibles dès le 2ème mois !&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Prêt à commencer votre transformation ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Réservez votre consultation gratuite dès aujourd&apos;hui
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Réserver
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">FitCoach Pro</h3>
              <p className="text-gray-400">
                Votre partenaire pour une transformation physique réussie.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">📧 contact@fitcoachpro.fr</p>
              <p className="text-gray-400 mb-2">📱 +33 6 12 34 56 78</p>
              <p className="text-gray-400">📍 Paris, France</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FitCoach Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
