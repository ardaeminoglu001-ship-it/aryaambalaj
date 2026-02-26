export default function GoogleMapSection() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 relative z-20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.211757876274!2d32.9103038!3d39.958999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40820f1df21e1e0f%3A0x6b3b5c65db9128f7!2sBe%C5%9Fikkaya%2C%201953.%20Sk.%20No%3A6%2C%2006360%20Alt%C4%B1nda%C4%9F%2FAnkara!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Arya Ambalaj Konum"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
