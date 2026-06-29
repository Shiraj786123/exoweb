/** City imagery and map coordinates for Local SEO sections */

export const CITY_LOCAL_DATA = {
  Ampara: {
    image: '/images/cities/ampara.jpg',
    imageAlt: 'Peace Pagoda and skyline near Ampara, Eastern Province',
    location: 'Ampara, Eastern Province, Sri Lanka',
    lat: 6.6937,
    lng: 81.6555,
  },
  Batticaloa: {
    image: '/images/cities/batticaloa.jpg',
    imageAlt: 'Batticaloa Clock Tower, Batticaloa town centre',
    location: 'Batticaloa, Eastern Province, Sri Lanka',
    lat: 7.7172,
    lng: 81.7004,
  },
  Trincomalee: {
    image: '/images/cities/trincomalee.jpg',
    imageAlt: 'Harbour and coastline at Trincomalee',
    location: 'Trincomalee, Eastern Province, Sri Lanka',
    lat: 8.5874,
    lng: 81.2152,
  },
  Kalmunai: {
    image: '/images/cities/kalmunai.jpg',
    imageAlt: 'Kalmunai Mosque, Kalmunai town',
    location: 'Kalmunai, Ampara District, Sri Lanka',
    lat: 7.4094,
    lng: 81.8347,
  },
  Kattankudy: {
    image: '/images/cities/kattankudy.jpg',
    imageAlt: 'Bazaar strip along the road in Kattankudy',
    location: 'Kattankudy, Batticaloa District, Sri Lanka',
    lat: 7.6779,
    lng: 81.7234,
  },
};

export function getCityLocalData(cityName) {
  return CITY_LOCAL_DATA[cityName] || null;
}

export function getOsmEmbedUrl(lat, lng, label) {
  const delta = 0.08;
  const bbox = [lng - delta, lat - delta, lng + delta, lat + delta].join('%2C');
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}

export function getGoogleMapsUrl(lat, lng, label) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}
