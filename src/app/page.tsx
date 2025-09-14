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
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                A propos
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Les cours
              </a>
              <a
                href="#tarifs"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                S&apos;abonner
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Se connecter
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="accueil"
        className="pt-16 bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                  🏠 100% en ligne
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Ton sport à la
                  <span className="block text-gray-600">maison</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transformez votre vie, un entraînement à la fois ! Votre coach
                  sportive dédiée vous apporte la salle de sport... chez vous !
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">62+</div>
                  <div className="text-sm text-gray-600">Vidéos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Disponible</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">En ligne</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Je m&apos;abonne maintenant
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
                  Voir les cours
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1595571024048-45a59177f538?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Femme faisant du sport à la maison"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Résultats garantis
                    </div>
                    <div className="text-sm text-gray-600">
                      Si vous vous investissez
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Coach expert</div>
                    <div className="text-sm text-gray-600">
                      Accompagnement personnalisé
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1585757318177-0570a997dc3a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Femme faisant des exercices de fitness"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ACCÉDEZ À UN CONTENU EXCLUSIF ET PERSONNALISÉ
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Abonnez-vous pour déverrouiller un trésor de vidéos de fitness
                conçues par une experte passionnée, où chaque séance est une
                source d&apos;inspiration qui vous pousse à vous dépasser.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Femme motivée faisant du sport"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                DES RÉSULTATS GARANTIS... SI VOUS VOUS INVESTISSEZ
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vous investissez dans un changement, une transformation qui
                demande du dévouement. Avec l&apos;aide de votre coach, chaque
                goutte devient une récompense, et vous allez désormais aimer le
                sport.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Femme faisant du sport chez elle"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                FAITES DU SPORT OÙ QUE VOUS SOYEZ
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Oubliez les déplacements, les horaires restrictifs, ou les
                regards jugements. Dans votre salon, votre chambre, ou même en
                déplacement, votre coach est à portée de clic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🖥 Les cours 🖥
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Programmation d&apos;entraînement à faire chez soi ou en salle
              sous forme de cours en ligne : Cours dansé, Cours cardio,
              Renforcement/Tonification (Haut, Bas du corps, Abdos-Fessiers,
              Spécial dos, CAF Cuisses-Abdos-Fessiers), Stretching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cours dansés */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Femme faisant de la danse fitness"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cours chorégraphiés
                </h3>
                <p className="text-gray-600 mb-4">
                  Vous travaillerez à la fois l&apos;endurance, la coordination,
                  avec des impacts modérés. Vous brulerez des calories en un
                  temps record.
                </p>
                <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                  En savoir plus →
                </button>
              </div>
            </div>

            {/* Renforcement musculaire */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Femme faisant des exercices de musculation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Renforcement musculaire
                </h3>
                <p className="text-gray-600 mb-4">
                  C&apos;est un complément à toute activité qui permet
                  d&apos;affiner et de tonifier toutes les parties du corps.
                </p>
                <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                  En savoir plus →
                </button>
              </div>
            </div>

            {/* Stretching */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Femme faisant du stretching"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Stretching
                </h3>
                <p className="text-gray-600 mb-4">
                  Cela permet de se détendre et d&apos;assouplir le corps.
                </p>
                <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                  En savoir plus →
                </button>
              </div>
            </div>

            {/* Cardio */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Femme faisant du cardio"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cardio</h3>
                <p className="text-gray-600 mb-4">
                  Pour permettre de brûler un maximum de calories en un minimum
                  de temps.
                </p>
                <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                  En savoir plus →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
              Je m&apos;abonne
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ils en parlent mieux que moi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-gray-900 mr-4">
                  EXCELLENT
                </div>
                <div className="text-sm text-gray-600">Basée sur 7 avis</div>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Beatriz James"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Beatriz James</h4>
                    <div className="text-sm text-gray-600">
                      22 Novembre 2023
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Trustindex vérifie que la source originale de l&apos;avis est
                  Google.
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;J&apos;ai eu la chance de travailler avec Camille, une
                coach sportive exceptionnelle. Elle est chouette, dynamique et
                passionnée par son travail. Elle a une grande connaissance de la
                forme physique et de la nutrition, et elle a su me guider tout
                au long de mon parcours de remise en forme. Grâce à ses conseils
                et à son soutien, j&apos;ai atteint mes objectifs de santé et de
                bien-être. Je recommande vivement Camille à tous ceux qui
                cherchent à améliorer leur condition physique et leur qualité de
                vie.&quot;
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Clara Cadiou"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Clara Cadiou</h4>
                    <div className="text-sm text-gray-600">
                      16 Novembre 2023
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Trustindex vérifie que la source originale de l&apos;avis est
                  Google.
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Super coach, toujours souriante, de bon conseil,
                d&apos;une énergie positive ; rendant bien plus faciles les
                levés à 05h00 tous les matins, et motivants les entraînements au
                taquet ; menant à de belles évolutions de performances sportives
                💪&quot;
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="émilie BRIERE"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">émilie BRIERE</h4>
                    <div className="text-sm text-gray-600">
                      15 Novembre 2023
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Trustindex vérifie que la source originale de l&apos;avis est
                  Google.
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Vous recherchez une prof Dynamique et toujours de bonne
                humeur? Je recommande camille +++ pour votre santé physique vous
                ne trouverez pas mieux😉&quot;
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Léna POTIER"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Léna POTIER</h4>
                    <div className="text-sm text-gray-600">
                      15 Novembre 2023
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Trustindex vérifie que la source originale de l&apos;avis est
                  Google.
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Débordante d&apos;énergie et motivante, elle sait vous
                pousser à donner le meilleur de vous même. Dans ses cours les
                chorées et mouvements sont variés, on ne se lasse pas, et on se
                défoule.&quot;
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Joan Auffret"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Joan Auffret</h4>
                    <div className="text-sm text-gray-600">
                      15 Novembre 2023
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Trustindex vérifie que la source originale de l&apos;avis est
                  Google.
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Merci pour ce cours riche en intensité. Camille est à
                l&apos;écoute de nos besoins et sait y répondre que ce soit sur
                le plan nutri ou sur le plan sportif. Elle s&apos;adapte à notre
                niveau et nous fait progresser!&quot;
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Marion Huguet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Marion Huguet</h4>
                    <div className="text-sm text-gray-600">
                      15 Novembre 2023
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Trustindex vérifie que la source originale de l&apos;avis est
                  Google.
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Une super coach motivante agréable et à l&apos;écoute.
                Pour avoir été son élève pendant plusieurs années je ne regrette
                pas du tout! Très professionnel. Je recommande X 1000&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Les questions les plus récurrentes
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quelle est la différence entre le programme et la programmation
                d&apos;entrainement ?
              </h3>
              <p className="text-gray-600">
                La programmation d&apos;entrainement est un programme que je
                créé spécialement pour vos besoins. Vous pouvez me contacter à
                hello@fitcoachpro.com pour m&apos;en dire plus sur vos besoins.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Est-il possible de renouveler un abonnement qui a été résilié ?
              </h3>
              <p className="text-gray-600">
                Oui votre compte ne sera pas supprimé, vous pourrez y revenir
                pour vous ré-abonner
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Puis-je arrêter quand je souhaite mon abonnement ?
              </h3>
              <p className="text-gray-600">
                Une fois que vous avez pris votre abonnement, vous avez accès à
                tous les cours pour la période choisie : 1 mois ou 1 an. Un
                renouvellement automatique est mis en place mais vous pourrez
                stopper l&apos;abonnement dans votre espace personnel à tout
                moment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ai-je besoin de matériel pour suivre les vidéos ?
              </h3>
              <p className="text-gray-600">
                Pas besoin de matériel ou très peu, vous pouvez remplacer des
                haltères par des bouteilles d&apos;eau etc
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ENVOIE UN MESSAGE
            </h2>
            <p className="text-xl text-gray-600">
              Je répondrai à tes questions dans un bref délai si tu hésites à
              passer à l&apos;action, et quel abonnement prendre.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de téléphone*
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Objet
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                  <option>Question</option>
                  <option>Service client</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message*
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="hidden">
                <input type="text" name="honeypot" />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">FitCoach Pro</h3>
              <p className="text-gray-400">
                Votre partenaire pour une transformation physique réussie.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horaires service client :</h4>
              <p className="text-gray-400 mb-2">Lundi – Vendredi:</p>
              <p className="text-gray-400 mb-2">09:00 à 18h00</p>
              <p className="text-gray-400">Samedi & Dimanche fermé</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
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
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <p className="text-gray-400 text-sm">
                FitCoach Pro par Darlow France – Mentions Légales – CGV
              </p>
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
