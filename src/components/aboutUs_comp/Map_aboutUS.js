const Map = () => {
    return (
        <section class="mb-4 container">
            <div class="mapa_nova row align-items-center">
                <h2 class="h1-responsive font-weight-bold text-center my-4" id="visitanos">¡Visítanos!</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.605984620909!2d-4.851547985263382!3d38.381235484809075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cbb2bb4f5ff9d%3A0x6a032e000210f980!2sILUMINACI%C3%93N%20NOVA-LUZ!5e0!3m2!1ses!2ses!4v1673543424205!5m2!1ses!2ses"
                    width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" title="map_novaluz">
                </iframe>
            </div>
        </section>
    );
};
export default Map;