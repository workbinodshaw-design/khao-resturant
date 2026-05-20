import { motion } from 'framer-motion'


export default function KhaoGullyWebsite() {
  const dishes = [
    {
      title: 'Loaded Cheese Momos',
      price: '₹199',
      image:
        'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Fiery Korean Noodles',
      price: '₹249',
      image:
        'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Creamy White Sauce Pasta',
      price: '₹289',
      image:
        'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Smoky Mocktails',
      price: '₹149',
      image:
        'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1400&auto=format&fit=crop'
    }
  ]

  const gallery = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop'
  ]

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-black tracking-wide">
              Khao <span className="text-pink-500">Gully</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <a href="#menu" className="hover:text-pink-400 transition">Menu</a>
            <a href="#gallery" className="hover:text-pink-400 transition">Gallery</a>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          </div>

          <button className="bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition duration-300">
            Book Table
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-yellow-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full backdrop-blur-xl">
            <span className="text-pink-400 text-lg">✨</span>
            <p className="text-sm tracking-wide text-gray-200">
              Guwahati’s Viral Food Spot ✨
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tight">
            EAT.
            <span className="block bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              CHILL.
            </span>
            REPEAT.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            Neon lights, aesthetic interiors, cheesy food, spicy noodles,
            late-night cravings and memories that hit different 😮‍💨
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 px-10 py-5 rounded-full text-lg font-black shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-110 transition duration-300">
              Explore Menu
            </button>

            <button className="border border-white/20 bg-white/5 backdrop-blur-xl px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-black transition duration-300">
              Visit Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative z-20 -mt-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            ['4.7★', 'Google Rating'],
            ['50K+', 'Happy Foodies'],
            ['100+', 'Menu Items'],
            ['#1', 'Gen Z Vibes']
          ].map((item, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 text-center shadow-2xl"
            >
              <h2 className="text-5xl font-black bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent mb-3">
                {item[0]}
              </h2>
              <p className="text-gray-300 text-lg">{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop"
              className="rounded-[40px] h-[650px] object-cover w-full shadow-[0_0_80px_rgba(236,72,153,0.2)]"
            />

            <div className="absolute -bottom-10 -right-5 bg-gradient-to-r from-pink-500 to-orange-400 p-8 rounded-[30px] shadow-2xl max-w-xs">
              <h3 className="text-4xl font-black mb-2">Aesthetic AF ✨</h3>
              <p className="text-white/90 leading-relaxed">
                The perfect place for dates, reels, birthdays and midnight food cravings.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[8px] text-pink-400 mb-5 font-bold">
              About Khao Gully
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Where Food Meets
              <span className="block bg-gradient-to-r from-pink-500 to-yellow-300 bg-clip-text text-transparent">
                Viral Vibes.
              </span>
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              More than just a restaurant — Khao Gully is an experience.
              From sizzling street food to dreamy cafe aesthetics,
              every corner is designed to look straight out of Instagram.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-zinc-900 border border-white/10 p-6 rounded-[30px]">
                <div className="text-yellow-400 text-4xl mb-4">⭐</div>
                <h3 className="text-2xl font-black mb-2">Premium Taste</h3>
                <p className="text-gray-400">
                  Delicious flavors that keep people coming back.
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 p-6 rounded-[30px]">
                <div className="text-pink-400 text-4xl mb-4">📸</div>
                <h3 className="text-2xl font-black mb-2">Reel Worthy</h3>
                <p className="text-gray-400">
                  Every angle looks like a viral Instagram post.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full -top-32 -left-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[8px] text-orange-400 mb-5 font-bold">
              Trending Dishes
            </p>

            <h2 className="text-6xl font-black mb-6">
              Food That Hits
              <span className="block bg-gradient-to-r from-pink-500 to-yellow-300 bg-clip-text text-transparent">
                Different 😮‍💨
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dishes.map((dish, index) => (
              <motion.div
                whileHover={{ y: -15, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                key={index}
                className="bg-black border border-white/10 rounded-[35px] overflow-hidden shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    className="h-80 w-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black mb-4 leading-tight">
                    {dish.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-black text-pink-400">
                      {dish.price}
                    </p>

                    <button className="bg-gradient-to-r from-pink-500 to-orange-400 px-5 py-3 rounded-full font-bold hover:scale-110 transition duration-300">
                      Order Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[8px] text-pink-400 mb-5 font-bold">
              Ambience Check
            </p>

            <h2 className="text-6xl font-black leading-tight">
              Your Camera Will
              <span className="block text-yellow-300">Love This Place 📸</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-[40px] border border-white/10"
              >
                <img
                  src={img}
                  className="h-[450px] w-full object-cover hover:scale-110 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6">
              People Are Literally
              <span className="block text-pink-400">Obsessed 😭</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Bro the ambience is insane. Every corner looks aesthetic 😭',
              'The noodles + mocktails combo is actually addictive.',
              'Perfect place for reels, dates and birthday surprises ✨'
            ].map((review, i) => (
              <div
                key={i}
                className="bg-black border border-white/10 rounded-[35px] p-8 shadow-2xl"
              >
                <div className="flex gap-1 mb-5 text-yellow-400">
                  ★★★★★
                </div>

                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  “{review}”
                </p>

                <h4 className="font-black text-pink-400">Verified Foodie</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full right-0 top-0" />

        <div className="max-w-6xl mx-auto bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[50px] p-12 md:p-20 relative z-10 shadow-[0_0_80px_rgba(236,72,153,0.1)]">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[8px] text-orange-400 mb-5 font-bold">
              Visit Today
            </p>

            <h2 className="text-6xl font-black mb-8 leading-tight">
              Ready For The
              <span className="block bg-gradient-to-r from-pink-500 to-yellow-300 bg-clip-text text-transparent">
                Ultimate Food Date? 💘
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[35px] backdrop-blur-xl">
              <div className="text-pink-400 text-5xl mb-5">📍</div>
              <h3 className="text-2xl font-black mb-3">Location</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Christian Basti,
                GS Road, Guwahati
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[35px] backdrop-blur-xl">
              <div className="text-orange-400 text-5xl mb-5">⏰</div>
              <h3 className="text-2xl font-black mb-3">Opening Hours</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                11 AM — 11:30 PM
                Everyday
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[35px] backdrop-blur-xl">
              <div className="text-yellow-300 text-5xl mb-5">📞</div>
              <h3 className="text-2xl font-black mb-3">Reservations</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                +91 XXXXX XXXXX
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 px-12 py-5 rounded-full text-xl font-black hover:scale-110 transition duration-300 shadow-[0_0_50px_rgba(236,72,153,0.5)]">
              Reserve Your Spot ✨
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm bg-black">
        © 2026 Khao Gully — Designed To Go Viral ✨
      </footer>
    </div>
  )
}
